
const user = require('../models/user')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const awt_secret = "vs@.&12345"

async function userSignInController (req,res){

    try {

        const {email, password} = req.body;

        if(!email){
            throw new Error('Please provide email')
        }
        if(!password){
            throw new Error('Please provide password')
        }

       const use = await user.findOne({email})

        if(!use){
            throw new Error('User not found')
        }

        const checkPassword = await bcrypt.compare(password, use.password)
      

        if(checkPassword){
            const tokenData = {
                _id : use._id,
                email : use.email
            }
          const token = await jwt.sign(
               tokenData
              , awt_secret );

              const tokenOption = {
                httpOnly : true,
                secure : true
              }
              
              res.cookie("token",token,tokenOption).status(200).json({
                message : "Login successfully",
                data : token,
                success : true,
                error : false
            })
           

        }else{
            throw new Error('Password is incorrect');
        }
        
    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            err: true
        })
    }

}

module.exports = userSignInController;