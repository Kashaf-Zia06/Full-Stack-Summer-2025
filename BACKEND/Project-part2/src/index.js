import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js";


dotenv.config()

const PORT=process.env.PORT


app.get('/', (req, res) => {
    console.log("Home request")
  res.send('Server is alive!');
});



const startServer = (async () => {
    try {

        let resp=await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is up on port : ${PORT} `)
        })

    }
    catch (error) {
        console.log("Failed to CONNECT ! ", error)
    }
})

startServer();