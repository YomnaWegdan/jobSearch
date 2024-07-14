import { Schema } from "mongoose";

const Application = new Schema({
    jobId:{
        type:Schema.Types.ObjectId,
        ref:
    },
    userId:{
        type:Schema.Types.ObjectId
    }
})