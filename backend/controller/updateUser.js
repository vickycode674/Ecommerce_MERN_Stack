const userModel = require("../models/userModel");

async function updateUser(req , res){
    try{
        const sessionUser = req.userId  //we get the user id from the cookies


        const {userId,email,name,role} = req.body

        console.log("Here is the acutal user===============",req.body)

        const payload = {  //so by using spread operator existing value only in by removing undefined and null values dude
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role}),
        } 

        const user = await userModel.findById(sessionUser) //we get the from these session user

        console.log("user.role=============================================",user,payload)


        const updateUser  = await userModel.findByIdAndUpdate(user,payload);
        console.log("Here we need to update the user in better way============",updateUser)
        
        res.json({
            data:updateUser,
            message: "User Updated",
            success: true,
            error :false
        })
    }
    catch (err) {
            res.status(500).json({
              message: err.message || "Internal server error",
              error: true,
              success: false
            });
    }
}

module.exports = updateUser