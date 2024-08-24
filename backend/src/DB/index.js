import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected!! : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connection faild: ",error)
        process.exit(1)
    }
}

export default connectDB