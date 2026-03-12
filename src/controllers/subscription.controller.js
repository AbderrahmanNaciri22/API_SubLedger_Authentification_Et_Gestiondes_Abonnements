const subscriptionModel = require("../models/subscriptionModel");
const { param } = require("../routes/users.routes");



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
exports.findSubscriptionBytoken = async (req,res) =>{
            try{
             const subScription = await subscriptionModel.find({userId:req.userAUth.id}); 
            if (subScription.length === 0) {
            return res.status(400).json({ message: "no subscription found" });
            }
             return res.status(200).json(subScription)
        }catch(error){
                return res.status(500).json({ message: error.message });
        }
}
exports.findSubscriptionBytokenDetails = async (req,res) =>{
    try{
     const userId = req.userAUth.id
     const subscripton =await subscriptionModel.findById(req.params.id);
     if(subscripton.userId == userId ){
             return res.status(200).json(subscripton);   
     }else{
       return res.status(400).json("no access");   

     }
    }catch(error){
        return res.status(400).json({message:error.message})
    }

}
exports.deleteSubscription = async (req,res) =>{
    try{
        const userId = req.userAUth.id
        const subscripton =await subscriptionModel.findById(req.params.id);
        if(!subscripton){
            return res.status(404).json("subscription not found")
        }
        if(subscripton.userId == userId ){
         const deleteSub = await subscriptionModel.findByIdAndDelete(req.params.id) ;
         return res.status(200).json("Delete succefully"+deleteSub);
        }else{
        return res.status(400).json("no access");   

        }
        
    }catch(error){
        return res.status(400).json({message:error.message})
    }

}

