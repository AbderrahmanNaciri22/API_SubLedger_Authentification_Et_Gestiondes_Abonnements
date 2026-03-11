const userModel = require("../models/userModel")  


async function verifyAdminRoleBeforeAjpute_lessthan_2(req,res,next){
        const {role} = req.body;
        const roleUser = await userModel.find({ role: "admin" });   
        if(roleUser.length >= 1 && role=="admin"){
            return res.status(400).json({message:"Admin is Max"});
        }

        next()
}

module.exports = verifyAdminRoleBeforeAjpute_lessthan_2;

