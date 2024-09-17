
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from "../src/common/index"
import Context from "./context";
import { useDispatch } from 'react-redux';
import {setUserDetails} from "./store/userSlice"


function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetail = async()=>{

    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method:"GET",
      credentials : 'include',
      headers : {
        'Content-Type' : 'application/json',
        "auth-token" : localStorage.getItem('token')
      }
      
    })
    const data = await dataResponse.json()

    if(data.success){
      dispatch(setUserDetails(data.data))
    }

    console.log(data)
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.countProduct.url,{
      method:"GET",
      credentials : 'include',
      headers : {
        'Content-Type' : 'application/json',
        "auth-token" : localStorage.getItem('token')
      }
      
    })
    const data = await dataResponse.json()

    setCartProductCount(data?.data?.count)
    
  }

  useEffect(()=>{
    fetchUserDetail()
    fetchUserAddToCart()
  },)

  return (
   <>
   <Context.Provider value ={{
     fetchUserDetail,
     cartProductCount,
     fetchUserAddToCart
   }}>

  <ToastContainer 
  
  position='top-center'
  
  />
   <Header />
   <main className='min-h-[calc(100vh-155px)] pt-24 '>
    <Outlet />
   </main>
   <Footer/>
   </Context.Provider>
   </>
  );
}

export default App;
