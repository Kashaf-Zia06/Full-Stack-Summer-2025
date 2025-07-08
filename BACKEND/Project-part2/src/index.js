import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config()

const app = express();
app.use(express.json());

const startServer = (async () => {
    try {

        await connectDB();
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server is up")
        })

    }
    catch (error) {
        console.log("Failed to CONNECT ! ", error)
    }
})

startServer();