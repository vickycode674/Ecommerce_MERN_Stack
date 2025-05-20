const uploadProductPermission = require("../helpers/permission");
const productModel = require("../models/productModel");

async function uploadProductController(req,res){
    try{
        const  sessionUserId = req.userId;
        console.log("welcome to the backend dude========================",sessionUserId);

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission Denied")
        }
        console.log("Here is the rquet body================",req.body)

         const  uploadProduct = new productModel(req.body)
         const saveProduct = await uploadProduct.save()

         res.status(201).json({
            message:"Product upload Successfully",
            error:false,
            success:true,
            data:saveProduct
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

module.exports = uploadProductController;