const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    billingCycle:{
        type:String,
        required:true,
        trim:true
    },
    startDate:{
        type:Date,
        required:true,
        trim:true
    },
    userId:{
        type:Number,
        required:true,
        trim:true,
    },
},
{
    timestamps: {createdAt:true , updatedAt : false}

})

module.exports = mongoose.model("subscription",subscriptionSchema)