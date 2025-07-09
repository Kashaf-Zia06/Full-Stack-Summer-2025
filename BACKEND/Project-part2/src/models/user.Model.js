import mongoose, { Mongoose } from "mongoose";

import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },

        fullname: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String,
            required:true
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,"Password required"]
        },
        refreshToken:{
            type:String,
            required:true
        }




    }, { timestamps: true })


    UserSchema.pre("save", async function(next){
        if(!this.isModified("password"))
            return next()
        await (this.password=bcrypt.hash(this.password,10));
        next()

    })

    UserSchema.methods.isPasswordCorrect=async function (password) {

        return await  bcrypt.compare(password, this.password)
        
    }

    UserSchema.methods.generateAccessToken= function(){
        return jwt.sign(
            {
                id:this._id,
                username:this.username,
                fullname:this.fullname

            },
            process.env.ACCESS_TOKEN_SECRET),{
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }

    }

     UserSchema.methods.generateRefreshToken= function(){
        return jwt.sign(
            {
                id:this._id,
            },
            process.env.REFRESH_TOKEN_SECRET),{
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }

    }

export const User = mongoose.model("User", UserSchema);
