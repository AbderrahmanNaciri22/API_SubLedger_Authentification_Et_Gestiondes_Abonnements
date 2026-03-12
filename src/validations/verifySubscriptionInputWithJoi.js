const Joi = require('joi');


function verifySubscriptionInputWithJoi(req,res,next){
    const subscriptionSchema = Joi.object({
    name: Joi.string().required(),
    price:Joi.number().required(),
    billingCycle:Joi.string().required(),
    startDate:Joi.date().required(),
    status:Joi.string().required(),
})


const {error} = subscriptionSchema.validate(req.body);

if(error){
    return res.status(400).json({message: error.details[0].message})
}
next();
}


module.exports = verifySubscriptionInputWithJoi


