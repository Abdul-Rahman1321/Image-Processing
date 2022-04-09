//importing express
import express, { NextFunction } from 'express';

//setting validation function to error handler
const validation = async function (req: express.Request, res: express.Response, next: NextFunction) {        
        let imageNames = ["horse", "duck", "midnight", "sea", "trophy", "stadium"]
        if (!imageNames.includes(String(req.query.imgName))
        ) {
            res.send('imgName does not exist');
            return;
        } else if(!Number.isInteger(parseInt(req.query.width as string)) || !Number.isInteger(parseInt(req.query.height as string))){
            res.send('width or height must be a number');
            return;
        }
        next();
}

export default validation;
