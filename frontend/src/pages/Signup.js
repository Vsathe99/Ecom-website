import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import loginIcons from "../assest/assest/signin.gif"
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';

import {  toast } from 'react-toastify';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        profilePic: ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
       
    }

    const handleUploadPic = async (e)=>{
        const file = e.target.file

        const imagePic = await imageTobase64(file)

        setData((preve)=>{
            return {...preve, profilepic:imagePic}
        })

    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        

        const dataResponse = await fetch("http://localhost:8080/api/signup",{
            method: "POST",
            credentials: 'include',
            headers:{
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const dataApi = await dataResponse.json()

        if(dataApi.success){
         
            toast.success(dataApi.message)
            navigate("/login")
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

        console.log('data', dataApi)
    }

    return (
        <section id='signup'>
            <div className='mx-auto container p-4 '>

                <div className='bg-white p-7 w-full max-w-lg mx-auto '>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>


                    <form action="" className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label htmlFor="">Name:</label>
                            <div className="bg-slate-100 p-2">
                                <input type="text"
                                    placeholder="Enter your name"
                                    name='name'
                                    value={data.name}
                                    className='w-full h-full outline-none bg-slate-100'
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

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

                        </div>


                        <button className='bg-black hover:bg-white hover:text-black hover:outline text-white px-4 py-2.5 w-full max-w-[100px] rounded-full  mx-auto block mt-6' >Signup</button>

                        <p className='my-5 '>Already have account ? <Link Link to={"/login"} className=' hover:text-blue-500'>Login</Link></p>
                    </form>



                </div>

            </div>
        </section>
    )
}

export default Signup