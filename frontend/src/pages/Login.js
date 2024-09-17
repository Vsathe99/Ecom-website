import React, { useContext, useState } from 'react'
import loginIcons from "../assest/assest/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import {  toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    

    const {fetchUserDetail,fetchUserAddToCart} = useContext(Context)
    
    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
   
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method: "POST", 
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataJson = await dataResponse.json()

        if(dataJson.success){
            localStorage.setItem('token', dataJson.data);
            toast.success(dataJson.message)
            navigate('/')
            fetchUserDetail()
            fetchUserAddToCart()
            
        }

        if(dataJson.error){
            toast.error(dataJson.message)
        }
    }

    return (
        <section id='login'>
            <div className='mx-auto container p-4 '>

                <div className='bg-white p-7 w-full max-w-lg mx-auto '>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icon' />
                    </div>

                    <form action="" className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label htmlFor="">Email:</label>
                            <div className="bg-slate-100 p-2">
                                <input type="email" 
                                placeholder="Enter Email" 
                                name='email'
                                value={data.email}
                                className='w-full h-full outline-none bg-slate-100' 
                                onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="">Password:</label>
                            <div className="bg-slate-100 p-2 flex">
                                <input type={showPassword ? "text" : "password"} 
                                placeholder="Enter password " 
                                name='password'
                                value={data.password}
                                className='w-full h-full outline-none  bg-slate-100' 
                                onChange={handleOnChange}
                                />
                                <div className='cursor-pointer ' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showPassword ? (<FaEyeSlash />) : (<FaEye />)

                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forget-password'} className='block w-fit ml-auto hover:underline hover:text-blue-500'>Forget Password</Link>
                        </div>


                        <button className='bg-black hover:bg-white hover:text-black hover:outline text-white px-6 py-2.5 w-full max-w-[100px] rounded-full  mx-auto block mt-6' >Login</button>


                    </form>
                    <p className='my-5 '>Don't have account ? <Link Link to={"/signup"} className=' hover:text-blue-500'>Sign up</Link></p>
                </div>

            </div>
        </section>
    )
}

export default Login