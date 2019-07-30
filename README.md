# tu-canton-app

## Stack
- Mysql
- Eexpress
- React.js
- Node.js

## Requirements
- node.js if not installed globally  go to `https://nodejs.org/en/download/`
- nodemon if not installed globally open root folder and install `npm install -g nodemon`
- mysql if not installed globally open root folder and install with `npm install mysql`

## Start Project
- Clone repo into local machine
- Open terminal in projects root folder and run npm install

## Database Installation
- from root folder  run mysql -u user -p <schema.sql this will create databases.  
- go to folder databas than dbQueries.js and replace `process.env.DB_HOST` for example with your own local information

### Fullstack Development
- Start Webpack with `npm run dev`
- Start nodemon with `npm run start-dev`
- Visit `http://localhost:3000/`
