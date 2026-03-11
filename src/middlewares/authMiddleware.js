const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");
require("dotenv").config();

async function authMiddleware (req,res,next){
    try{
        const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ message: "login required" });
    }
    
        const token = authToken.split(" ")[1];

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        req.userAUth = decode;
        req.role = decode.role
        // res.send(decode.role)

        next()

    }catch(error){
        return res.status(400).json({message : error.message})
    }
}


module.exports = authMiddleware;