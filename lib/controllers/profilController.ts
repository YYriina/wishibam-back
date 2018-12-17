import * as mongoose from 'mongoose';
import { ProfilSchema } from '../models/profilModel';
import { Request, Response } from 'express';
import Mailer from '../mailers/Mailer';

const Profil = mongoose.model('Profil', ProfilSchema);

export class ProfilController{

    public addNewProfil (req: Request, res: Response) {                
        let newProfil = new Profil(req.body);
        let newMail = new Mailer( req.body.email, req.body.subject, req.body.message );
        newProfil.save((err, profil) => {
            if(err){
                res.send(err);
            }    
            res.json(profil);
            newMail.sendMail();
        });
    }

    public getProfils (req: Request, res: Response) {           
        Profil.find({}, (err, profil) => {
            if(err){
                res.send(err);
            }
            res.json(profil);
        });
    }

    public getProfilWithID (req: Request, res: Response) {           
        Profil.findById(req.params.profilId, (err, profil) => {
            if(err){
                res.send(err);
            }
            res.json(profil);
        });
    }

    public updateProfil (req: Request, res: Response) {           
        Profil.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, profil) => {
            if(err){
                res.send(err);
            }
            res.json(profil);
        });
    }

    public deleteProfil (req: Request, res: Response) {           
        Profil.remove({ _id: req.params.contactId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    
}