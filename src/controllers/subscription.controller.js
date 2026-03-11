const subscriptionModel = require("../models/subscriptionModel")


exports.createSubscription = async (req,res) =>{
        try{
             const {name,price,billingCycle,startDate,status} = req.body;
    
             const userId = req.userAUth.id
             const data = await subscriptionModel.create({
                name:name,
                price:price,
                billingCycle:billingCycle,
                startDate:startDate,
                status:status,
                userId:userId
            })
            return res.status(201).json({ message: "subscription is created !!" });
        }catch(error){
                return res.status(500).json({ message: error.message });
        }
    
    
}
exports.getAll = async (req,res) =>{
            try{
                      
              const subScription = await subscriptionModel.find();
              res.send(subScription);
            
            }catch(error){
                return res.status(500).json({ message: error.message });
        }
}
