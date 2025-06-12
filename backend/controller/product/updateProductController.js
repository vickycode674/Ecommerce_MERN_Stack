const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");

async function updateProductController(req,res){

    try{
        if(!uploadProductPermission(req.userId)){
          throw new Error("Permission Denied");
        }

        const { _id, ...resBody} = req.body

        const updateProduct = await productModel.findByIdAndUpdate(_id,resBody);//here is updation of the main controller

        res.json({
            message:"Product Updated Successfuully",
            data: updateProduct,
            success:true,
            error:false
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

module.exports = updateProductController;