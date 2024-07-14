import { Schema } from "mongoose";

const Application = new Schema({
    jobId:{
        type:Schema.Types.ObjectId,
        ReferenceError
    },
    userId:{
        type:Schema.Types.ObjectId
    }
})