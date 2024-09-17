const addToCartModel = require("../models/cartProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try {
        const currentUserId = req.userId
        const productId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id:productId})

        res.json({
            message:"product deleted",
            data:deleteProduct,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct