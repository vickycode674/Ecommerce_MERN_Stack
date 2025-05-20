const userModel = require("../models/userModel")

const uploadProductPermission = async(userId) =>{
    const user = await userModel.findById(userId)

    console.log("here is the uer dude==========",user);

    if(user.role!=='ADMIN'){
        return false;
    }

    return true;
}

module.exports = uploadProductPermission;
