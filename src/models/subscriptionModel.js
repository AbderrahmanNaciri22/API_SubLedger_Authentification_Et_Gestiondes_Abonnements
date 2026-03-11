const { required } = require("joi");
const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
        trim:true
    },
    price:{
        type:number,
        required:true,
        trim:true,
    },
    billingCycle:{
        type:string,
        required:true,
        trim:true
    },
    startDate:{
        
    }
})