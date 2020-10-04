import {Request,Response} from 'express';
import {userServices} from '../services/userServices';
export class userController{
    userServ = new userServices();


        public  registerUsers = async (req:Request,res:Response)=> {
            let data = await this.userServ.registerUsers(req,res)
            console.log(data);
            res.json(data);

            
        }
}
