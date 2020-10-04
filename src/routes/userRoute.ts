import express, {Request,Response } from 'express';
import {userController} from '../controller/userController';

export class Routes{
    userController:userController=new userController();



public routes (router:any):void {
    router.get('/',this.userController.registerUsers)
    
}
}


