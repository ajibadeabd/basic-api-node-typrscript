import  bodyParser from 'body-parser';
import  express from 'express';
import  cors from 'cors';
import  logger from 'logger';
import  path from 'path';

export class initialize{

     initialize(app:express.Application){
         app.use(cors());
        //  app.use(logger('dev'));
         app.use(express.json());
         app.use(bodyParser.urlencoded({extended:false}));
         app.use(bodyParser.json());
         app.use(express.static(path.join(__dirname, 'public')));

    }
} 

