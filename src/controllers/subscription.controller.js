const subscriptionModel = require("../models/subscriptionModel")


exports.createSubscription = async (req,res) =>{
        try{
             const {name,price,billingCycle,startDate,status,userId} = req.body;
    
             const data = await subscriptionModel.create({
                name:name,
                price:price,
                billingCycle:billingCycle,
                startDate:startDate,
                status:status,
                userId:userId 
            })
            return res.status(201).json({ message: "Is created !!" });
        }catch(error){
                return res.status(500).json({ message: error.message });
        }
    
    
}
exports.getAll = (req,res) =>{
    res.send("sub is working");
}
