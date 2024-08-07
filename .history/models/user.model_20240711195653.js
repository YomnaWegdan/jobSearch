import { Schema } from "mongoose";

const User = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    recoveryEmail:{
        type:String
    },
    DOB:{
        type:Date,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true,       
        unique:true

    },
    gender:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        unique:true
    }
})