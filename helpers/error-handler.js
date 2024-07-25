function errorhandler(err,req,res,next){
    if(err){
        if(err.name === "UnauthorizedError")
        res.status(500).send({message:"Authentication is not valid"})
        if(err.name === "ValidationError"){
            res.status(400).json({message:err})
        }
        console.log(err);
        return res.status(500).json(err);
    }

}

module.exports = errorhandler;