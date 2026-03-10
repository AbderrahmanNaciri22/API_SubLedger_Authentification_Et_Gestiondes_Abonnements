const userModel = require("../models/userModel")  


async function verifyAdminRoleBeforeAjpute_lessthan_2(req,res,next){
        const {role} = req.body;
        const user = await userModel.find()
        const roleUser = user.map(user => user.role)
        if(roleUser.length >= 2 && role=="admin"){
            return res.status(400).json({message:"Admin is Max"});
        }

        next()
}

module.exports = verifyAdminRoleBeforeAjpute_lessthan_2;

