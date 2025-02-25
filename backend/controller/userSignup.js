const user = require('../models/user')
const bcrypt = require("bcryptjs");


async function userSignupController (req,res){
    
    try{
        const {name,email,password} = req.body;

        let use = await user.findOne({email});

      if (use) {
        throw new Error("Email already exists");
      }
        if(!email){
            throw new Error('Please provide email')
        }
        if(!password){
            throw new Error('Please provide password')
        }
        if(!name){
            throw new Error('Please provide name')
        }


        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const payload ={
            ...req.body,
            role: "GENERAL",
            password:hash
        }

        const userData = new user(payload)

       const saveData = await userData.save();

       res.status(201).json({
        data: saveData,
        success: true,
        message: 'User created successfully',
        error: false
       })

    }catch(err){
        res.json({
            message: err.message || err,
            success: false,
            err: true
        })
    }
}

module.exports = userSignupController;