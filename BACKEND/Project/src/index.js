import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express"
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
dotenv.config();


connectDB();
const app=express();

//alternative approach of connecting DB in index.js
// //IFFE 
// (async()=>{
//     try
//     {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",(error)=>{
//             console.log("ERROR: ",error)
//             throw error
//         })        


//         app.listen(process.env.PORT,()=>{
//             console.log("Server is up");
//         })

//     }
//     catch(error){
//         console.log("Error: ",error)
//         throw error

//     }

// })()