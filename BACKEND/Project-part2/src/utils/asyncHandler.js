//Promise based approach

const asyncHandler = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch((err)=>next(err))

}

//const asyncHandler=()=>{}
///const asyncHandler=(func)=>()=>{}
///const asyncHandler=(func)=>async()=>{}


// Try catch block approach
// const asyncHandler = (fn) => async (error,req, res, next)=>
// {
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){

//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })

//     }

// }


export { asyncHandler }