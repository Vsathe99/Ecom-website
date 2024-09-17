const user = require("../models/user")



async function allUsers(req,res){
    try {
        
        console.log(req.userId)

        const allUsers = await user.find()
        
        res.json({
            message : "Alluser",
            data: allUsers,
            success: true,
            error : false

        })

    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers