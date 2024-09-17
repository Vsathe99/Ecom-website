import React, { useEffect, useState } from 'react'
import SummaryApi from "../common"
import { Link } from 'react-router-dom'

const CategoryList = () => {

    const [categoryProduct, setcategoryProduct ]= useState([])
    const [ loading, setloading] = useState(false)

    const fetchCategoryProduct = async()=>{
        setloading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataresponse = await response.json()
        setloading(false)
        setcategoryProduct(dataresponse.data)
           
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto  p-3'>
        <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
        {
            loading ?(
                <div>

                </div>
            ):(

                categoryProduct.map((product,index)=>{
                    return(
                        <Link to={"/product-category?category="+product?.category} className='cursor-pointer' key={product?.category}>
                            <div className='w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all' />
                            </div>
                            <p className='text-center text-sm md:text-xl capitalize'>{product?.category}</p>
                        </Link>
                    )
                })
            )
        }
        </div>
    </div>
  )
}

export default CategoryList