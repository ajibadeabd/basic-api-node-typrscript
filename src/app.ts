import express  from "express";
import {Routes} from "./routes/userRoute";
import {initialize} from "./middleware/initialize";
import {database} from "./config/database";
const port = process.env.PORT || 3000;
class App{
public app: express.Application = express();
public initialize:initialize = new initialize();
public route: Routes = new Routes();
public database: database = new database();

constructor(){
    this.app = express(); 
    this.initialize.initialize(this.app);
    this.route.routes(this.app);
    this.database.database();

}

}



export default new App().app;
