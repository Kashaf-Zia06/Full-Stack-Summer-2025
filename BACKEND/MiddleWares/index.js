
const router=require('./ROUTER/route')

const express=require('express')

const app=express()
const port=3000;

app.use(express.json()) //using middleware
app.use("/",router) //using middleware

//custom middlewares

// const loggingMiddleWare= function (req,res,next){
//     console.log("Logging")
//     next()
// }
// app.use(loggingMiddleWare)

// const authMiddleWare= function (req,res,next){
//     console.log("Auhtingg")
//     next()
// }
// app.use(authMiddleWare)

// const validMiddleWare= function (req,res,next){
//     console.log("Validation")
//     next()
// }
// app.use(validMiddleWare)

app.get("/", (req,res)=>{
    console.log(req.body)
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log("Application Started")
})