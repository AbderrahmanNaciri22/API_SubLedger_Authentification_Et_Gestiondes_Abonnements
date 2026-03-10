const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");

exports.findAll = async (req,res) =>{
    const data = await userModel.find()
    res.status(200).json(data)
}

exports.ajoute = async (req,res) => {
    try{
         const {name,email,password,role} = req.body;

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

         const data = await userModel.create({
            name:name,
            email:email,
            password:hashedPassword,
            role:role
        })
        return res.status(201).json({ message: "Is created !!" });
    }catch(error){
            return res.status(500).json({ message: error.message });
    }

}

exports.delete = async (req,res)=>{
    try{
        const deleted = await userModel.findByIdAndDelete(req.params.id);
     if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({ message: "Deleted successfully" });
    }catch(error){
            res.status(400).json({ error: "Invalid ID" });
    }
}

exports.login = async (req,res) =>{

}