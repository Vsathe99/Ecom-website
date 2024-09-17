const user = require("../models/user")

async function userDetailsController(req,res){
    try{
        console.log("userId",req.userId)
        const use = await user.findById(req.userId)

        res.status(200).json({
            data : use,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController