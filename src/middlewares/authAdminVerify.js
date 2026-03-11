
async function authAdminVerify (req,res,next){
    if(req.role == "admin"){
        next()
    }else{
        return res.status(401).json({message : "Unauthorized"})
    }
}   


module.exports = authAdminVerify;