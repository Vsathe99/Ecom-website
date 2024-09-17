const expres = require('express')

const router = expres.Router()

const userSignupController = require("../controller/userSignup")
const userSignInController = require("../controller/userSignin")
const userDetailController = require("../controller/useDetail")
const authToken = require("../middleware/authToken")
const userLogout = require("../controller/userLogout")
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')
const UploadProductController = require('../controller/uploadProduct')

const updateProductController = require('../controller/updateProduct')
const getCategoryProduct = require('../controller/getCategoryProductSingle')
const getProductController = require('../controller/getProduct')
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct')
const getProductDetail = require('../controller/getProductDetail')
const addToCartController = require('../controller/addToCartController')
const countAddToCartProduct = require('../controller/countAddToCartProduct')
const addToCartViewProduct = require('../controller/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct')
const searchProduct = require('../controller/searchProduct')
const filterProductController = require('../controller/filterProduct')

router.post("/signup",userSignupController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailController)
router.get("/userLogout", userLogout)


// admin panel

router.get("/all-users",authToken, allUsers)
router.post("/update-user",authToken,updateUser)

// product

router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetail)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)


//user add to cart
router.post("/add-to-cart",authToken,addToCartController)
router.get("/countProduct",authToken,countAddToCartProduct)
router.get("/view-cart-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


module.exports = router;