import { asyncHandler } from "../utils/asyncHandler.js"
import ApiError from "../utils/apiError.js"
import { User } from "../models/user.Model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import mongoose from "mongoose"
import { ApiResponse } from "../utils/apiResponse.js"
import jwt from "jsonwebtoken"
import upload from "../middlewares/multer.middleware.js"

const registerUser = asyncHandler(async (req, res) => {
    console.log("Inside user register controller")

    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    // get user details from frontend
    const { username, fullname, email, password } = req.body
    console.log(username)
    console.log(fullname)
    console.log(email)
    console.log(password)

    // validation - not empty
    if
        (
        [username, fullname, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(408, "Field is required")
    }

    // check if user already exists: username, email

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]

    })

    if (existedUser)
        throw new ApiError(400, "User already exists")

    //check for images, check for avatar

    const avatarLocalPath = req.files?.avatar[0]?.path

    if (!avatarLocalPath)
        throw new ApiError(408, "Avatar is required")

    // const coverImageLocalPath = req.files?.coverImage[0]?.path
    let coverImageLocalPath;
    console.log("Uploading on cloudinary")
    //upload them on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    console.log("Avatar uploaded")
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)
     if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    const coverImage=await uploadOnCloudinary(coverImageLocalPath)
    console.log(coverImageLocalPath)

    console.log("Uploaded on cloudinary")
    // create user object - create entry in db
    const user = await User.create({
        fullname,
        email,
        password,
        avatar: avatar?.url||" ",
        coverImage: coverImage?.url||" ",
        username:username.toLowerCase()

    })

    
    // remove password and refresh token field from response
    const createdUser=await User.findById(user._id).select(
        ("-password -refreshToken")
    )
    
    console.log("User created")

    // check for user creation
    if(!createdUser)
        throw new ApiError (500,"Registration failed")


    // return res

    res.status(200).json(
        
        new  ApiResponse(200,{createdUser},"Successfully Registered")
    )


})

export { registerUser }