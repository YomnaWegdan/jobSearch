import { Schema } from "mongoose";

const Job = new Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        enum:['Remote', 'Onsite , hybrid']
    },
    workingTime:{
        type:String,
        required:true,
        enum:['Full time', 'Part time']
    }   
})

export const userSchema = mongoose.model('User', User);