import express from express;
import cookieParser from "cookie-parser";
import cors from "cors"


const app=app()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//setting for incoming data types

app.use(express.json({limit:"16kB"})) //json type data
app.use(express.urlencoded({extended:true})) //url type data
app.use(express.static("public")) //public folder for images or assets for keep it on server
app.use(cookieParser())


export {app}