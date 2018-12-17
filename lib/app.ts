import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";
import { Routes } from "./routers/Routes"
import { DB_URL } from './utils/env';

class App {

    //public declarations
    public app: express.Application;
    public mongoUrl: string = DB_URL;
    public routePrv: Routes = new Routes();

    //class constructor
    constructor() {
        //init app
        this.app = express();
        //launch config function
        this.config();
        //setup database connection
        this.mongoSetup(); 
        //use custom router
        this.routePrv.routes(this.app);         
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //support cross server acces
        this.app.use(cors());
    }

    private mongoSetup(): void{
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);  
    }
}

export default new App().app;