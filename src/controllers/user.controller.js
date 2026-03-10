const userModel = require("../models/userModel")

exports.findAll = async (req,res) =>{
    const data = await userModel.find()
    res.status(200).json(data)
}

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