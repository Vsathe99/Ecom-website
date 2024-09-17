import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../components/VerticalCard'

const SearchProduc = () => {

    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchProduct = async()=>{
        const response = await fetch(SummaryApi.search.url+query.search)
        const dataResponse= await response.json()

        setData(dataResponse.data)
    }
    
    useEffect(()=>{
        fetchProduct()
    },[query])
  return (
    <div className='container mx-auto p-4'>
    {
      loading && (
        <p className='text-lg text-center'>Loading ...</p>
      )
    }

   

    {
      data?.length === 0 && !loading && (
         <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
      )
    }


    {
      data?.length !==0 && !loading && (
        <VerticalCard loading={ loading} data={data}/>
      )
    }

  </div>
)
  
}

export default SearchProduc