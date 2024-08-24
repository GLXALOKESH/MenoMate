import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { DOTENV_PATH } from "../constants.js";
import { log } from "console";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET

})

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //upload file on cloudnary
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return responce


    }catch(error){
        console.error("Upload error:", error);

        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}



