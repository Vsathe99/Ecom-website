const productModel = require("../models/productModel")

const getCategoryWiseProduct = async (req,res)=>{
    try {
        const {category} = req?.body
        const product = await productModel.find({category})
        console.log(product)

        res.json({
            data:product,
            success:true,
            eroor:false
        })
    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}
module.exports = getCategoryWiseProduct