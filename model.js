const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
    email: String,
    fName:String,
    lName:String,
    pass: String,
    about: String,
    experience: {
        type: Number,
        default: 0
    },
    domain: [String],
    projects: [String],
    followCount: {
        typr: Number,
        default: 0
    },
    linkedin: String,
    github: String,
    contests: [String],
    resumeFile:String,
});

const Model = mongoose.model('model', postSchema);

module.exports = {
    Model
}