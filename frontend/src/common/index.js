const backendDomian = "http://localhost:8080"

const SummaryApi = {
    signUp:{
        url: `${backendDomian }/api/signup`,
        method : "post"
    },
    signIn:{
        url: `${backendDomian }/api/signin`,
        method : "post"
    },
    current_user:{
        url: `${backendDomian }/api/user-details`,
        method: "get"
    },
    logout_user:{
        url: `${backendDomian }/api/userLogout`,
        method: "get"
    },
    allUser : {
        url: `${backendDomian }/api/all-users`,
        method: "get"
    },
    updateUser:{
        url: `${backendDomian }/api/update-user`,
        method: "post"

    },
    uploadproduct:{
        url: `${backendDomian }/api/upload-product`,
        method:"post"
    },
    allProducts : {
        url: `${backendDomian }/api/get-product`,
        method: "get"
    },
    updateProduct:{
        url: `${backendDomian }/api/update-product`,
        methohd: "post"
    },
    categoryProduct:{
        url: `${backendDomian }/api//get-categoryProduct`
    },
    categoryWiseProduct:{
        url: `${backendDomian }/api/category-product`
        
    },
    productDetails:{
       url:`${backendDomian }/api/product-details`
    },
    addToCartProduct:{
        url: `${backendDomian }/api/add-to-cart`
    },
    countProduct:{
        url: `${backendDomian }/api/countProduct`
    },
    addToCartProductView:{
        url: `${backendDomian }/api/view-cart-product`
    },
    updateCartProduct:{
        url: `${backendDomian }/api/update-cart-product`
    },
    deleteCartProduct:{
        url: `${backendDomian }/api/delete-cart-productt`

    },
    search:{
        url: `${backendDomian }/api/search`

    },
    filterProduct : {
        url : `${backendDomian }/api/filter-product`,
        method : 'post'
    }
}

export default SummaryApi