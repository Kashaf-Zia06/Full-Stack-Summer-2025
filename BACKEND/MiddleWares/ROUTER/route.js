const express=require('express')


//router specific middleware
const router=express.Router()

//one req object is accessible to all middleware


const auth=function(req,res,next){
    console.log("I m aunthentication route")
    req.user={userId:1,role:"admin"}
    
    if(req.user){
        next() //pass on to next middleware
    }
    else{
        //sending response on front end
        res.json({
            success:"fail",
            message:"aunthentication failed"
        })
    }

}

const isAdmin=function(req,res,next){
    console.log("This is admin middleware")
    if(req.user.role==="admin")
        next() //if admin then next route or middleware
    else
        res.json({
            success:"fail",
            message:"This route is for admin only"
    })
}


const isStudent=function(req,res,next){
    console.log("I m student middleware")
    if(req.user.role==="student")
        next() //if student then next route or middleware
    else
        res.json({
            success:"fail",
            message:"This route is for student only"
    })
}



router.get('/admin', auth,isAdmin,(req,res)=>{
    res.send("Admin page welcomes you")
})

router.get('/student', auth,isStudent,(req,res)=>{
    res.send("Student page welcomes you")
})

router.get('/dashboard',auth,(req,res)=>{
    res.send("Welcome to dashboard")
})
module.exports=router;