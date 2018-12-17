import {Request, Response, NextFunction} from "express";
import { ProfilController } from "../controllers/profilController";

export class Routes { 
    
    //class declaration
    public contactController: ProfilController = new ProfilController() 
    

    public routes(app): void {   
        
        //home '/' route
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                //on request
                message: 'GET request successfulll!!!!'
            })
        })
        
        // '/profil' route 
        app.route('/profil')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            next();                       
        }, this.contactController.getProfils)        

        // POST endpoint
        .post(this.contactController.addNewProfil);

        // profil detail
        app.route('/profil/:profilId')
        // get specific profil
        .get(this.contactController.getProfilWithID)
        // change data profil
        .put(this.contactController.updateProfil)
        // delete profil
        .delete(this.contactController.deleteProfil)

    }
}