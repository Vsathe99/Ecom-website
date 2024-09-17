
const user = require('../models/user')

const uploadProductPermission = async(userId)=>{
    const use = await user.findById(userId)

    if(use.role !== 'ADMIN'){
        return false
    }
    return true
}

module.exports = uploadProductPermission