import {Request,Response} from 'express';
import {studentSchema} from '../models/userModel';
import mongoose from 'mongoose';

const userModel =  mongoose.model('users',studentSchema );

export class userServices{

    
    public async registerUsers(req:Request,res:Response)  {


        let {name,email,password} = req.body;
            let save = new userModel({name,email,password})
             save.save()


            return (save)
        }
       
}
