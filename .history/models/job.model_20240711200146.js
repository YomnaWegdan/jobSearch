import { Schema } from "mongoose";

const Job = new Schema({
    title:{
        type:String,
        required:true
    },
    locat   
})

export const userSchema = mongoose.model('User', User);