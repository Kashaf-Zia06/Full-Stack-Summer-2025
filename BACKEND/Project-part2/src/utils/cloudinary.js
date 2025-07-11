import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"


dotenv.config()


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async function (filePath) {
    try {
        if (!filePath)
            return "File path not available"
        else {
            const response = await cloudinary.uploader.upload(filePath, {
                resource_type: "auto"
            })
            fs.unlinkSync(filePath)
            // console.log("File uploaded on cloudinary: ",response.url)
            return response
        }
    }
    catch (error) {
        fs.unlinkSync(filePath) //remove from temporary local server
        return null

    }
}

export { uploadOnCloudinary }