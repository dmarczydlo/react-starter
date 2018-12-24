
# React Starter 
React Starter it's alternative to create-react-app (boilerplate for React.js) without unnecessary dependencies. 

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/894b5647c5e248bb9e691deb7de01d64)](https://app.codacy.com/app/daniel.marczydlo/react-starter?utm_source=github.com&utm_medium=referral&utm_content=dmarczydlo/react-starter&utm_campaign=Badge_Grade_Dashboard)
[![Greenkeeper badge](https://badges.greenkeeper.io/dmarczydlo/react-starter.svg)](https://greenkeeper.io/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dmarczydlo/react-starter/issues)  
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/dmarczydlo/react-starter/blob/master/LICENSE)  [![GitHub issues](https://img.shields.io/github/issues/dmarczydlo/react-starter.svg)](https://github.com/dmarczydlo/react-starter/issues)
[![dependencies Status](https://david-dm.org/dmarczydlo/react-starter/status.svg)](https://david-dm.org/dmarczydlo/react-starter)
[![devDependencies Status](https://david-dm.org/dmarczydlo/react-starter/dev-status.svg)](https://david-dm.org/dmarczydlo/react-starter?type=dev)
[![Build Status](https://travis-ci.org/dmarczydlo/react-starter.svg?branch=master)](https://travis-ci.org/dmarczydlo/react-starter)
[![Coverage Status](https://coveralls.io/repos/github/dmarczydlo/react-starter/badge.svg?branch=master)](https://coveralls.io/github/dmarczydlo/react-starter?branch=master)

# Starter dependencies  
*  Axios
*  React
*  Redux
*  Thunk
*  React Router (v4)
*  Jest
*  ESLint
*  Babel (v7)
*  Webpack (v4)
*  Cypress (e2e)
*  Workbox (PWA)
*  Helmet

## Getting started
### To use repository
1. ```git clone git@github.com:dmarczydlo/react-starter.git```
1. ```yarn install```
1. ```yarn start```

### Using create script
1. Run ```/scripts/create.sh```
1. Enter project name
1. Script will copy files (replace project name also) and install dependencies. Also git will be inited

Script show you options to select like below:
```sh
Please select option for start:
1) Empty project
2) Full project (with tests and examples component
3) Quit
```
* If you select 1) option then your project will be created without tests
* If you select 2) option then your project will be created with all tests and dependencies for their.

## Production environment on docker
`react.conf` contains `nginx` configurations.

### How to run production env
1. Go to project root path (```react-starter```).
1. Build docker ```docker build -t nginx . ```
1. Run docker with port forwarding and volume ```docker -D run -p 8080:9000 -d -v $(pwd):/var/www/react_app --name nginx nginx```


### Progressive Web Apps
PWA was implemented for production environment. The configuration is in the ```public/pwa``` directory. Please update ```manifest.json``` file to set own property.

### End to End Tests
Cypress has been implemented for e2e (without selenium). How to run e2e tests?
* ```yarn cypress:run``` for developer environment (as CLI) 
* ```yarn cypress:open``` for open cypress browser mode
* ```yarn cypress:ci``` for CI
