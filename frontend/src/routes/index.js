import { createBrowserRouter}  from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Product from "../pages/Product";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import SearchProduc from "../pages/SearchProduc";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "forget-password",
                element: <ForgotPassword/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: "product-category",
                element: <CategoryProduct/>
            },{
                path: "product/:id",
                element: <ProductDetail/>
            },{
                path:"cart",
                element:<Cart/>
            },{
                path : "search",
                element: <SearchProduc/>
            },
            {
                path:"admin-panel",
                element : <AdminPanel/>,
                children:[
                    {
                        path: "all-users",
                        element: <AllUsers/>
                    },
                    {
                        path: "all-product",
                        element: <Product/>
                    }
                ]
            },
            {

            }
        ]
    }
])

export default router;