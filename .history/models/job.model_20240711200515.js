import { Schema } from "mongoose";

const Job = new Schema({
    jobTitle:{
        type:String,
        required:true
    },
    jobLocation:{
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
    jobDescription:{
        type:String,
        required:true
    },
    technicalSkills:{
        
})  

export const userSchema = mongoose.model('User', User);