import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    const DBURL='mongodb://localhost:27017/MenoMate';
    try{
        const connectionInstance = await mongoose.connect(`${DBURL}`)
        console.log(`mongoDB connected!! : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connection faild: ",error)
        process.exit(1)
    }
}

export default connectDB