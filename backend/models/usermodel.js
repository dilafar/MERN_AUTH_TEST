const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const model = mongoose.model("User",userSchema);
module.exports = model;