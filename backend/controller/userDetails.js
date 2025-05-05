const userModel = require("../models/userModel");

async function userDetailsController(req,res){

    try{
      console.log("Here is the user value===============",req.userId)

      const user = await userModel.findById(req.userId);

      console.log("Here is the user value===============",user)

      res.status(200).json({
        data: user,
        error: false,
        success: true,
        message: 'User Details'
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

module.exports = userDetailsController