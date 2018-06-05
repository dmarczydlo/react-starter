
# React Starter 
React Starter it's alternative to create-react-app (boilerplate for React.js) without unnecessary dependencies. 

[![Greenkeeper badge](https://badges.greenkeeper.io/dmarczydlo/react-starter.svg)](https://greenkeeper.io/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dmarczydlo/react-starter/issues)  
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/dmarczydlo/react-starter/blob/master/LICENSE)  [![GitHub issues](https://img.shields.io/github/issues/dmarczydlo/react-starter.svg)](https://github.com/dmarczydlo/react-starter/issues)
[![dependencies Status](https://david-dm.org/dmarczydlo/react-starter/status.svg)](https://david-dm.org/dmarczydlo/react-starter)
[![devDependencies Status](https://david-dm.org/dmarczydlo/react-starter/dev-status.svg)](https://david-dm.org/dmarczydlo/react-starter?type=dev)
[![Build Status](https://travis-ci.org/dmarczydlo/react-starter.svg?branch=master)](https://travis-ci.org/dmarczydlo/react-starter)
[![Coverage Status](https://coveralls.io/repos/github/dmarczydlo/react-starter/badge.svg?branch=master)](https://coveralls.io/github/dmarczydlo/react-starter?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/dmarczydlo/react-starter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dmarczydlo/react-starter?targetFile=package.json)

# Starter dependencies  
*  Axios
*  React
*  Redux
*  Thunk
*  React Router (v4)
*  Jest
*  ESLint
*  Babel
*  Webpack

## Getting started
1. ```git clone git@github.com:dmarczydlo/react-starter.git```
1. ```yarn install```
1. ```yarn start```

## Production environment on docker
`docker` directory contains dockers configurations.

### How to run production env
1. Go to project root path (```react-starter```).
1. Run ```docker-compose -f docker/nginx.yml up --build```


### Progressive Web Apps
PWA was implemented for production environment. The configuration is in the ```public/pwa``` directory. Please update ```manifest.json``` file to set own property.
