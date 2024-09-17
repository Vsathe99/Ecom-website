import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import {useSelector, useDispatch} from "react-redux"
import SummaryApi from "../common";
import {toast} from "react-toastify"
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuseDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()


  const handleLogout = async()=>{
    const fetchdata = await fetch(SummaryApi.logout_user.url,{
      method: "GET",
      credentials : 'include',

    })
    const data = await fetchdata.json()
    if(data.success){
       localStorage.removeItem("token")
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }
    if(data.error){
      toast.error(data.message)
    }
  }

  const handleSearch=(e)=>{
    const {value} = e.target

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }
  }

  return (
    <header className='h-20 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
          <div className=''>
            <Link to={"/"}> <Logo w={100} h={80}/> </Link>
           
          </div>

          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
            <input type="text" placeholder='Search' className='w-full outline-none ' onChange={ handleSearch}/>
            <div className='text-lg min-w-[50px] h-8 flex items-center justify-center'>
            <IoSearch />
            </div>
          </div>

          <div className='flex items-center gap-8'>

            <div className='relative  flex justify-center'>

              {
                user?._id && (
                  <div className='text-4xl cursor-pointer relative flex justify-center ' onClick={()=>setMenuseDisplay(prev => !prev)}>
                  {
                    user?.profilepic ? (
                      <img src={user?.profilepic}  className='rounded-full w-10 h-10' alt={user?.name} />
                    ):(
  
                      <FaRegUserCircle />
                    )
                  }
                </div>
  
                )
              }

              
                {
                  menuDisplay &&<div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded  '>
                      <nav>

                        {
                          user?.role === ROLE.ADMIN && (
                            <Link to={"/admin-panel/all-product"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuseDisplay(prev => !prev)}>Admin Panel</Link>
                          )
                        }
                       
                      </nav>
                    </div>

                }
            </div>

            {
              user?._id && (
                <Link to={"./cart"} className='text-3xl cursor-pointer relative '>
                  <span><BsCart3 /></span>
                      <div className='bg-black text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-xs'>{context?.cartProductCount}</p>
                      </div>
                </Link>

              )
            }

            <div className=''>
              {
                user?._id ?(
                  <button onClick={handleLogout} className='px-3 py-1 rounded-full bg-black text-white'> Logout</button>
                ):(
                  <Link to={"/login"} className='px-3 py-1 rounded-full bg-black text-white'>Login</Link>
                )
              }
             
            </div>

          </div>
      </div>
    </header>
  )
}

export default Header