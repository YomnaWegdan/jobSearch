import { Schema } from "mongoose";

const Job = new Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
    }   
})

export const userSchema = mongoose.model('User', User);