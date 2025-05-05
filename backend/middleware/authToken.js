
const jwt = require('jsonwebtoken');

async function authToken(req,res,next){ //here it goes to next controller
    
    try{
      const token = req.cookies?.token || req.header

      if(!token){
        return res.status(200).json({
           message: 'user not login',
           error :true,
           success : true,
        })
        }
    
       jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err,decoded){
        if (err){
          console.log("Error auth",err);
        }
  
        req.userId = decoded?._id
        console.log("here is decoded one==============",decoded?._id)
  
        next()      });
    }

    catch(err){
         res.status(400).json({
            message:err.message || err,
            data : [],
            error :true,
            success:false
    })
  }
}

module.exports = authToken