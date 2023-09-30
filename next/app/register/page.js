"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


export default function Register() {
    
    const [formData, setFormData ] = useState({})

    const handleSubmit = async (e) => {
        const uri = "http://localhost:3000/api/auth"
        e.preventDefault()
        await axios.post(uri, formData)
        .then((res)=>{
            if(res.data === "User Already exits!"){
                return toast.error("User Already exits!")
            }
            else if(res.data === "Register Success"){
                return toast.success("Register Success")
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


    return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-800'>
        <div className='relative w-[450px] h-[600px] bg-gray-700 rounded-lg overflow-hidden'>
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-teal-400 via-teal-400 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right'></div>
            <div className='absolute w-[380px] h-[420px] bg-gradient-to-r from-teal-400 via-teal-400 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right'></div>
            <div className='absolute inset-1 bg-gray-700 rounded-lg z-10 p-5'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-xl font-semibold text-teal-400 text-center mb-12 mt-6'>Register</h2>
                    <div className='relative flex flex-col my-12'>
                        <input 
                            onChange={(e)=>handleChange(e)}
                            name='email'
                            type='email'
                            autoFocus
                            placeholder=" "
                            className='relative z-10 border-0 border-b-2 border-teal-400 h-10 bg-transparent text-gray-100 outline-none px-2 peer' />
                        
                        <i className="bg-teal-800 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-buttom transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"/>
                        <label
                            className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0]
                            peer-focus:left-0
                            peer-focus:text-teal-400 text-teal-400
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-placeholder-shown:text-gray-500
                            peer-focus:scale-75
                            peer-focus:-translate-y-8">Enter your email
                        </label>
                    </div>

                    <div className='relative flex flex-col my-12'>
                        <input 
                            onChange={(e)=>handleChange(e)}
                            name='firstname'
                            type='text'
                            autoFocus
                            placeholder=" "
                            className='relative z-10 border-0 border-b-2 border-teal-400 h-10 bg-transparent text-gray-100 outline-none px-2 peer' />
                        
                        <i className="bg-teal-800 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-buttom transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"/>
                        <label
                            className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0]
                            peer-focus:left-0
                            peer-focus:text-teal-400 text-teal-400
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-placeholder-shown:text-gray-500
                            peer-focus:scale-75
                            peer-focus:-translate-y-8">Enter your firstname
                        </label>
                    </div>

                    <div className='relative flex flex-col mb-12'>
                        <input 
                            onChange={(e)=>handleChange(e)}
                            name='lastname'
                            type='text'
                            autoFocus
                            placeholder=" "
                            className='relative z-10 border-0 border-b-2 border-teal-400 h-10 bg-transparent text-gray-100 outline-none px-2 peer' />
                        
                        <i className="bg-teal-800 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-buttom transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"/>
                        <label
                            className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0]
                            peer-focus:left-0
                            peer-focus:text-teal-400 text-teal-400
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-placeholder-shown:text-gray-500
                            peer-focus:scale-75
                            peer-focus:-translate-y-8">Enter your lastname
                        </label>
                    </div>
                    
                    <div className='relative flex flex-col mb-12'>
                        <input 
                            onChange={(e)=>handleChange(e)}
                            name='password'
                            type='password'
                            autoFocus
                            placeholder=" "
                            className='relative z-10 border-0 border-b-2 border-teal-400 h-10 bg-transparent text-gray-100 outline-none px-2 peer' />
                        
                        <i className="bg-teal-800 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-buttom transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"/>
                        <label
                            className="peer-focus:font-medium absolute text-sm duration-500 transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0]
                            peer-focus:left-0
                            peer-focus:text-teal-400 text-teal-400
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-placeholder-shown:text-gray-500
                            peer-focus:scale-75
                            peer-focus:-translate-y-8">Enter your password
                        </label>
                    </div>
                    
                        <button type="submit" className="py-3 text-gray-100 bg-teal-400 w-full rounded hover:bg-teal-600 hover-scal-105 duration-300">
                            Submit
                        </button>

                        <p className="my-2 mt-6 text-right text-teal-400">
                            <a href="/" >
                             Login Now
                            </a>
                        </p>
                   
                </form>
                <div>
            </div>
            </div>
        </div>   
    </div>
  )
}
