const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required : true ,
        trim:true,
        unique:true,

    },
    password:{
        type:String,
        require:true,
        trim:true,
        min:8,
    },
    role:{
        type:String,
        enum:["user","admin"],
        require:true
    },
    createdAt:{
        type:date,
        required:true,
    },
})

module.exports = mongoose.model("User", userSchema);