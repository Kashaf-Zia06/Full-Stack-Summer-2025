import mongoose, { Mongoose } from "mongoose";

import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config()

const connectDB = (async()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! HOST: ${connectionInstance.connection.host}`)
        return connectionInstance

    }
    catch(error){
        console.log("Connection FAILURE ", error);
        return error

    }
}) 

export default connectDB

