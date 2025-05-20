const productModel = require("../models/productModel");

const getProductController = async(req,res)=>{
   try{
       //getting the producrt infro from db  [Creating Controller a api to get the value]
       const allProduct = await  productModel.find();

       res.json({
        message:"All Product",
        success:true,
        error:false,
        data: allProduct
       })
   }

   catch(err){
      res.status(400).json({
         message:err.message || err,
         error:true,
         success:false
      })
   }
}

module.exports = getProductController;  //step 2 to send it to the receriver end dude