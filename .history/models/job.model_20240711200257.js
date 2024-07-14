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
        
    }   
})

export const userSchema = mongoose.model('User', User);