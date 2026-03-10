const userModel = require("../models/userModel")


exports.ajoute = async (req,res) => {
    try{
         const {name,email,password,role} = req.body;
         const data = await userModel.create({
            name:name,
            email:email,
            password:password,
            role:role
        })
        return res.status(201).json({ message: "Is created !!" });
    }catch(error){
            return res.status(500).json({ message: error.message });
    }

}