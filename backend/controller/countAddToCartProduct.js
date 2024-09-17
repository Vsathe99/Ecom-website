const addToCartModel = require("../models/cartProduct")


const countAddToCartProduct = async(req,res)=>{
    try {
        const userId = req.userId

        const cont= await addToCartModel.countDocuments({
            userId:userId
        })

        res.json({
            data:{

                count : cont
            },
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

module.exports = countAddToCartProduct