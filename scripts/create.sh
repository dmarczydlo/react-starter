#!/usr/bin/env bash


removeTestAndExamples()
{
 echo "Remove unnecessary files"
 #remove test directory
 rm -rf test
 rm -rf cypress
 rm cypress.json
 rm .travis.yml
 rm _config.yml
 rm package-lock.json
 #remove unnecessary dependencies
 yarn remove jest --silent && yarn remove --dev  babel-jest coveralls cypress enzyme enzyme-adapter-react-16 enzyme-to-json fast-check fetch-mock node-fetch sinon --silent
 #remove scripts
 tmp=$(mktemp)
 SCRIPTS='{
          "start": "webpack-dev-server --mode development --progress --profile --colors --open",
          "build": "webpack --mode production --config=webpack.production.config.js --progress --profile --colors"
        }'

jq --argjson v "$SCRIPTS"  '.scripts = $v' package.json > "$tmp" && mv "$tmp" package.json 

jq 'del(.directories)' package.json > "$tmp" && mv "$tmp" package.json
jq 'del(.jest)' package.json > "$tmp" && mv "$tmp" package.json
 #remove examples (tbd)
}

echo "Please select option for start:"
PS3='Your option: '
options=("Empty project" "Full project (with tests and examples component" "Quit");
select opt in "${options[@]}"
do
    case $opt in
        "Empty project")
            echo "you chose choice 1"
            break
            ;;
        "Full project (with tests and examples component")
            echo "you chose choice 2"
            break
            ;;

        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

if [ "$opt" == "Quit" ]; then
  echo "The script has been interrupted"
  exit 1
fi

echo "Please enter project name"
read PROJECT_NAME

if [ -z "$PROJECT_NAME" ];
  then
    echo "You have define project name"
    exit 1
fi

echo $PROJECT_NAME;
rsync -av --progress ./ ../$PROJECT_NAME --exclude node_modules --exclude dist --exclude coverage --exclude .git --exclude .idea
cd ../$PROJECT_NAME
echo "## "$PROJECT_NAME > README.md


if ! [ -x "$(command -v jq)" ]; then
    sudo apt-get update
    sudo apt-get install jq
fi

if [ "$opt" == "Empty project" ]; then
  removeTestAndExamples
fi

tmp=$(mktemp)
jq --arg v "$PROJECT_NAME"  '.name = $v' package.json > "$tmp" && mv "$tmp" package.json


if [ -x "$(command -v yarn)" ]; then
    yarn --silent
else
    npm i --silent
fi

if [ -x "$(command -v git)" ]; then
  git init
fi

if [ -d "scripts" ]; then
  rm -rf scripts
fi
