import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        //The connectionInstance holds the Mongoose connection object, which gives you access to the current state of the connection and methods to interact with it.
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`MongoDB connected!! Host: ${connectionInstance.connect.host}`);
    } catch (error) {
        console.log("Error: ", error);
    }
};

export default connectDB;
