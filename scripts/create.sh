#!/usr/bin/env bash

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

tmp=$(mktemp)
jq --arg v "$PROJECT_NAME"  '.name = $v' package.json > "$tmp" && mv "$tmp" package.json


if [ -x "$(command -v yarn)" ]; then
    yarn
else
npm i
fi

if [ -x "$(command -v git)" ]; then
  git init
fi

if [ -d "scripts" ]; then
  rm -rf scripts
fi
