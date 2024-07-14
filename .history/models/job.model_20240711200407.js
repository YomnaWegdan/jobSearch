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
    },
    seniorityLevel: {
        type: String,
        enum: ['Junior', 'Mid-Level', 'Senior', 'Team-Lead', 'CTO'],
        required: true 
    },
    description:{
        type:String,
        required:true
})

export const userSchema = mongoose.model('User', User);