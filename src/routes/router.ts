//importing required modules
import express from 'express'
import resizing from './imgprocess/resizing'
import NodeCache from 'node-cache'
import path from 'path'
import validation from './errorhandler'

//setting express router object
const routes = express.Router()
//initializing chaching
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 })

//setting API End-point
routes.get(
    '/images',validation,
    async (req: express.Request, res: express.Response): Promise<void> => {
        //getting url parameters values
        const imgName = req.query.imgName as string
        const w = req.query.width
        const h = req.query.height

        //converting width & height into numbers
        let width = parseInt(w as string)
        let height = parseInt(h as string)

        //processing images and caching
        let img = myCache.get(req.originalUrl)
        if (img === undefined) {
            await resizing(imgName, width, height)
            const filePath: string = path.join(
                process.cwd(),
                `src/images/thumbnails/${imgName}_${width}_${height}.jpg`
            )
            res.sendFile(filePath)
            let newImg = myCache.set(
                req.originalUrl,
                path.join(
                    process.cwd(),
                    `src/images/thumbnails/${imgName}_${width}_${height}.jpg`
                )
            )
        } else {
            const filePath: string = path.join(
                process.cwd(),
                `src/images/thumbnails/${imgName}_${width}_${height}.jpg`
            )
            res.sendFile(filePath)
        }
    }
)

//exporting routes
export default routes
