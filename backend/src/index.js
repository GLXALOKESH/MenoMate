import mongoose from "mongoose";
import connectDB from "./DB/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
const port = process.env.PORT || 3000
dotenv.config({
    path:"./.env"
})



connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`app is running at port - ${port}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection error!! ",error)

})