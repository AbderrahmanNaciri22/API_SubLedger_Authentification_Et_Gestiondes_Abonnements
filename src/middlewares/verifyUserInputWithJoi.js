const Joi = require('joi');


function verifyUserInputWithJoi(req,res,next){
    const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    role:Joi.string().valid("user","admin").default("user"),
})


const {error,value} = userSchema.validate(req.body);

if(error){
    return res.status(400).json({message: error.details[0].message})
}
next();
}


module.exports = verifyUserInputWithJoi


