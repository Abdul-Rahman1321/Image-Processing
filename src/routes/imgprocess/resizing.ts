//importing sharp module for image processing
import sharp from 'sharp'

//setting async function for resizing images
const resizing = async (
    imgName: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        await sharp(`./src/images/${imgName}.jpg`)
            .resize({
                width: width,
                height: height,
            })
            .toFile(`./src/images/thumbnails/${imgName}_${width}_${height}.jpg`)
    } catch (error) {
        console.log(error)
    }
}

//expoting resizing function
export default resizing
