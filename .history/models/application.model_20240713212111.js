import mongoose, { Schema } from "mongoose";

const Application = new Schema({
    jobId:{
        type:Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    userTechSkills:[{ type: String  , required: true }],
    userSoftSkills: [{ type: String, required: true }],
    userResume: { type: String, required: true }
})

export const ApplicationModel = mongoose.model('Application', Application);