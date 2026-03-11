const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();


exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
            
        if(!user){
            return res.status(404).json({message : "User not found "});
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(400).json({message : "Password inncorect"});
        }

        const token = jwt.sign(
            {
                id:user.id,
                role:user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1D",
            }
        );
        res.status(200).json({
            message:"login success",token
        })

    }catch(error){
        return res.status(400).json({message : error.message})
    }

}



