import React, { useState,useEffect } from 'react'
import UploadProducts from "../components/UploadProducts"
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const Product = () => {

  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(SummaryApi.allProducts.url)
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])

  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between'>
        <h2 className='font-bold text-2xl mt-2 '>All Products</h2>
        <button className='border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white py-2 px-4 rounded-full ' onClick={()=>setOpenUploadProduct(true) }> Upload Product.</button>
      </div>

    {/**all product */}
    <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
          {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>




      {/****uplod product */}
      {
        openUploadProduct && (
          <UploadProducts onClose={()=>setOpenUploadProduct(false)} fetchdata={fetchAllProduct}/>
        )
      }
      

    </div>
  )
}

export default Product