import React, { useEffect } from 'react'
import { useState } from 'react'
import SummaryApi from '../common'
import {  toast } from 'react-toastify';
import moment from "moment";
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {

  const [allUsers, setAllUsers] = useState([])
  const [updateRole, setUpdateRole] = useState(false)
  const [updateUSerDetails, setupdateUSerDetails] = useState({
    email :"",
    name : "",
    role : "",
    _id : ""

  })

  const fetchAllUsers = async ()=>{
    const dataResponse = await fetch(SummaryApi.allUser.url,{
      method: 'GET',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    })
    const data = await dataResponse.json()

    if(data.success){
      setAllUsers(data.data)
    }

    if(data.error){
      toast.error(data.message)
    }

    console.log(data)
  }

  useEffect(()=>{
    fetchAllUsers()
  },[])

  return (
    <div className='pb-4'>
      <table className='w-full usertable'>
        <thead>
          <tr className='bg-black text-white'>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Acton</th>
          </tr>
        </thead>
        <tbody className="font">
          {
            allUsers.map((user, index)=>{
              return(
                <tr className='text-xl'> 
                  <td>{index +1}</td>
                  <td>{user?.name}</td>
                  <td className='text-xl'>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>{moment(user?.createdAt).format("ll")}</td>
                  <td>
                   
                    <button className='bg-slate-300 p-2 rounded-full hover:bg-slate-400 ' 
                    onClick={()=> {
                      setupdateUSerDetails(user)
                      setUpdateRole(true)

                    }}
                    
                    > 
                    <MdEdit className='text-xl'/>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


          {
            updateRole &&(
               <ChangeUserRole
                onClose={()=>setUpdateRole(false)} 
                name={updateUSerDetails.name}
                email={updateUSerDetails.email}
                role = {updateUSerDetails.role}
                userId= {updateUSerDetails._id}
                callFunc={fetchAllUsers}

               />
            )
          }

    </div>
  )
}

export default AllUsers