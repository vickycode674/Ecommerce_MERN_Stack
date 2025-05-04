const userModel = require("../models/userModel");

const bcrypt = require('bcryptjs')

async function userSignUpController(req,res){
    try{ 
      const {email,password,name} = req.body;

      if(!email){
        throw new Error ("Please Provide Mail id")
      }

      if(!password){
        throw new Error ("Please Provide Mail id")
      }

      if(!name){
        throw new Error ("Please Provide Mail id")
      }

      const existingUser = await userModel.findOne({email});

      if (existingUser){
        return res.status(400).json({
            message: "User already exists with this email",
            error: true,
            success: false
      })
    }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = await bcrypt.hashSync(password,salt)

      if(!hashPassword){
        throw new Error ("Something is wrong here")
      }

      const payload = {   //combinging whole payload
         ...req.body,
         role : "GENERAL",
         password : hashPassword,
      }
      console.log("Here is teh final save data dude========",payload)

      const userData = new userModel(payload)
      const saveUser = userData.save()

      res.status(201).json({
        data:saveUser,
        success:true,
        error:false,
        message:"User created Sucessfully"
      })
    }
    catch(err){
        console.log("What is the error and going into the catch",err);
        res.json({
             message:err,
             error:true,
             success:false
            })
    }
}

module.exports = userSignUpController