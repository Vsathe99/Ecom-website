import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import productCategory from '../helpers/product';
import { IoCloudUploadOutline } from "react-icons/io5";
import uploadImage from '../helpers/uploadimage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import {toast} from "react-toastify"


const UploadProducts = ({
  onClose,fetchdata
}) => {

  const [data, setData] =useState({
    productName : "",
    brandName : "",
    category : "",
    productImage : [],
    description : "",
    price : "",
    selling : ""
  })

  const [fullScreenImg, setFullScreenImg] = useState("")
  const [openFullScreenImage,setOpenFullScreenImage] = useState(false)
  
  const handleOnChange = (e) =>{
    const {name , value} = e.target

    setData((prve)=>{
      return{
        ...prve,
        [name] : value
      }
    })

  }

  const handleUploadProduct = async(e) =>{
    const file = e.target.files[0]
  

    const uploadImageCloudinary = await uploadImage(file)

    setData((prve)=>{
      return{
        ...prve,
        productImage : [...prve.productImage,uploadImageCloudinary.url]

      }
    })
  }

  const handleDeleteProductImage = async(index)=>{
    console.log("image index",index)
    
    const newProductImage = [...data.productImage]
    newProductImage.splice(index,1)

    setData((preve)=>{
      return{
        ...preve,
        productImage : [...newProductImage]
      }
    })
    
  }


  {/***upload product */}

  const handleSubmite = async(e) =>{
    e.preventDefault()
   
    const response = await fetch(SummaryApi.uploadproduct.url,{
      method : "POST",
      credentials : "include",
      headers : {
        "Content-Type" : "application/json",
        "auth-token" : localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData?.message)
        onClose()
        fetchdata()
        
    }


    if(responseData.error){
      toast.error(responseData?.message)
    }

  }


  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded  w-full max-w-3xl h-full max-h-[80%] overflow-hidden'>

        <div className='flex justify-between pb-3'>
          <h2 className='font-bold text-lg'>UploadProducts</h2>
          <div className='w-fit ml-auto cursor-pointer'>
            <RxCross2 onClick={onClose}/>
          </div>
        </div>

        <form action="" className='grid p-4 gap-3 overflow-y-scroll h-full mb-4' onSubmit={handleSubmite}>
          <label htmlFor="productName">Product Name :</label>
          <input type="text" 
          id='productName' 
          name='productName'
          placeholder='Enter Product Name' 
          value={data.productName} 
          onChange={handleOnChange}
          className='p-2 bg-slate-100 border rounded'
          />
          
          <label htmlFor="brandName" className='mt-3'>Brand Name :</label>
          <input type="text" 
          id=' brandName ' 
          name='brandName'
          placeholder='Enter Brand Name' 
          value={data.brandName} 
          onChange={handleOnChange}
          className='p-2 bg-slate-100 border rounded'
          />

          <label htmlFor="category" className='mt-3'>Category :</label>
           <select name="category" id="category" value={data.category} onChange={handleOnChange}  className='p-2 bg-slate-100 border rounded'>
           <option  value={""}>Select Category</option>
            {
              productCategory.map((el,index)=>{
                return <option key={el.value+index} value={el.value}>{el.label}</option>
              })
            }
           </select>
          

           <label htmlFor='productImage' className='mt-3'>Product Image :</label>
              <label htmlFor='uploadImageInput'>
              <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                        <div className='text-slate-800 flex justify-center items-center flex-col gap-2'>
                          <span className='text-4xl'><IoCloudUploadOutline /></span>
                          <p className='text-sm'>Upload Product Image</p>
                          <input type='file' id='uploadImageInput'  className='hidden' onChange={handleUploadProduct}/>
                        </div>
              </div>
              </label> 
              <div>
                {
                  data?.productImage[0] ? (
                    <div className='flex items-center gap-2'>
                      {
                        data.productImage.map((el,index) =>{
                          return(
                            <div className='relative group'>

                                <img 
                                src={el} 
                                alt={el} 
                                width={100} 
                                height={100} 
                                className='bg-slate-100 border'
                                onClick={()=>{setOpenFullScreenImage(true)
                                  setFullScreenImg(el)
                                }}                 
                                />

                                <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer'  onClick={()=>handleDeleteProductImage(index)}>
                                <MdDelete/>  
                                </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  ):(
                    <p className='text-red-600 text-s'>*please upload product</p>
                  )
                }
               
              </div>
        

              <label htmlFor='description' className='mt-3'>Description :</label>
              <textarea 
                className='h-28 bg-slate-100 border resize-none p-1' 
                placeholder='enter product description' 
                rows={3} 
                onChange={handleOnChange} 
                name='description'
                value={data.description}
              >
              </textarea>


          
          <label htmlFor="price">Price:</label>
          <input type="text" 
          id='price' 
          name='price'
          placeholder='Enter Price' 
          value={data.price} 
          onChange={handleOnChange}
          className='p-2 bg-slate-100 border rounded'
          />
          
          <label htmlFor="selling">Selling Price:</label>
          <input type="text" 
          id='selling' 
          name='selling'
          placeholder='Enter Selling Price' 
          value={data.selling} 
          onChange={handleOnChange}
          className='p-2 bg-slate-100 border rounded'
          />
          

          <button className='px-3 py-2 bg-red-600 text-white mb-10 mt-5'>Upload Product</button>
        </form>

      </div>


      {/***display image full */}
      {
        openFullScreenImage &&(
          <DisplayImage onClose={()=>setOpenFullScreenImage(false)} imgUrl={fullScreenImg}/>
        ) 
        }
    

    </div>
  )
}

export default UploadProducts