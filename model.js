import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userName: String,
    pass : String,
    about:String,
    experience:{
        type:Number,
	default:0
    },
    domain: [String],
    projects: [String],
    followCount:{
        typr:Number,
        default:0
    },
    linkedin: String,
    github: String,
    Contests:[String],
});

const Model = mongoose.model('model',postSchema);

export default Model;