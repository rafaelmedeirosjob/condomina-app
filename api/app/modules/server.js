import fs from 'fs';
import logger from 'morgan';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
const app = express();
// config initials
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
if(process.env.APP_MODE === 'development') 
{
  app.use('/files',express.static(path.resolve(__dirname,'..','..','tmp','uploads')))
}

app.use(logger('dev'));

// routes of project
fs.readdirSync(__dirname)
  .filter(directory => directory.slice(-3) !== '.js')
  .forEach(directory => {
    fs.readdirSync(path.join(__dirname, directory))
      .filter(file => file === 'router.js')
      .forEach(file => {
        app.use('/api', require(path.join(__dirname, directory, file)));
      });
  });

// server init
const port = 3001;
const host = '0.0.0.0';
app.listen(port, host);
