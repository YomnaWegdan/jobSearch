import { Schema } from "mongoose";

const Company = new Schema({
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    numberOfEmployees:{
        type:Number,
        required:true
    },
    
    companyEmail:{
        type:String,
        required:true,
        unique:true
    },
    companyHr:{
        type:Schema.ObjectId,
        required:true
    }

});