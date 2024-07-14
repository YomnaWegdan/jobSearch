import { Schema } from "mongoose";

const Application = new Schema({
    jobId:{
        type:Schema.Types.ObjectId,
        ReferenceError:'Job not found'
    },
    userId:{
        type:Schema.Types.ObjectId
    }
})