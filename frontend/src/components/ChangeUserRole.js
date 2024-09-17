import React, {useState} from 'react'
import ROLE from '../common/role'
import { MdCancel } from "react-icons/md";
import SummaryApi from '../common';

import {toast} from "react-toastify"

const ChangeUserRole = ({
    name, email,role,onClose,userId,callFunc
}) => {

    const [userRole, setUserRole]= useState(role)

    const handleonchangeselect = (e)=>{
        setUserRole(e.target.value)
    }
    const updateUserRole = async ()=>{
        const dataResponse = await fetch(SummaryApi.updateUser.url,{
            method: "POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                userId:userId,
                role: userRole
            })
        })

        const data = await dataResponse.json()

        if(data.success){
            toast.success(data.message)
            onClose()
            callFunc()
        }
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50 '>
        <div className=' mx-auto bg-white shadow-md p-4 w-full max-w-sm '>

            <button className='block ml-auto' onClick={onClose}>
            <MdCancel />
            </button>

           <h1 className='p-4  font-medium'>Change User Role</h1>
           <p>Name: {name}</p>
           <p>Email: {email}</p>
           
            <div className='flex my-3'> 
            <p>Role:</p>
            <select className=' px-4 py-1' value={userRole} onChange={handleonchangeselect}>

                {
                    Object.values(ROLE).map(el =>{
                        return(
                            <option value={el} key={el}>{el}</option>
                        )
                    })
                }
            </select>
            </div>
            <button className='w-fit mx-auto block border p-1 rounded-full hover:bg-black hover:text-white' onClick={updateUserRole}>Change Role</button>
           
        </div>
        
    </div>
  )
}

export default ChangeUserRole