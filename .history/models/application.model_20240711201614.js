import { Schema } from "mongoose";

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
    userTechSkills:[{ type:
})