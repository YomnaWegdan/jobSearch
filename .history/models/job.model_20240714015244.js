// import mongoose, { Schema } from "mongoose";

// const Job = new Schema({
//     jobTitle:{
//         type:String,
//         required:true
//     },
//     jobLocation:{
//         type:String,
//         required:true,
//         enum:['Remote', 'Onsite , hybrid']
//     },
//     workingTime:{
//         type:String,
//         required:true,
//         enum:['Full time', 'Part time']
//     },
//     seniorityLevel: {
//         type: String,
//         enum: ['Junior', 'Mid-Level', 'Senior', 'Team-Lead', 'CTO'],
//         required: true 
//     },
//     jobDescription:{
//         type:String,
//         required:true
//     },
//     technicalSkills:{
//         type:[String],
//         required:true
//     },
//     softSkills:{
//         type:[String],
//         required:true
//     },
//     experience:{
//         type:String,
//         required:true
//     },
//     salary:{
//         type:String,
//         required:true
//     },
//     jobType:{
//         type:String,
//         required:true
//     },
//     jobCategory:{
//         type:String,
//         required:true
//     },
//     addedBy:{
//         type:Schema.Types.ObjectId,
//         ref:'User',
//         required:true
//     },
//     companyId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Company',
//         required: true
//     },
   
    
// })  

// export const JobModel = mongoose.model('Job', Job);


