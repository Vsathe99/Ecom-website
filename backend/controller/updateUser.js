const user = require("../models/user")


async function updateUser(req,res) {
    try {

        const sessionUser = req.userId

        const {userId, email, name, role} = req.body

        const payload = {
            ...(email && {email : email}),
            ...(name && {name : name}),
            ...(role && {role : role})
        }
        
        const use = await user.findById( sessionUser)
        


        const updateUser = await user.findByIdAndUpdate(userId,payload)

        res.json({
            message: "user updates",
            success : true,
            error: false,
            data : updateUser
        })

    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateUser