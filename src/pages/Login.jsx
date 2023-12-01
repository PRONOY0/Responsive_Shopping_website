import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AiFillEyeInvisible,AiFillEye}  from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import './glass.css'
import toast from 'react-hot-toast'
import loginPage from '../resources/Coming Soon Website Coming Soon Page in Yellow Blue Photo and Videocentric Style.png'

function Login(){

    const [showPassword,setShowPassword] = useState(false);
    
    const [formData,setFormData] = useState({
        Email:"",
        Password:""
    });

    const Navigation = useNavigate();
   
    function changeHandler(event){
        event.preventDefault();
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(event){
        event.preventDefault();

        var storedEmail = localStorage.getItem('Email');
        var storedPassword = localStorage.getItem('Password');

    if(!storedEmail || !storedPassword){
        toast.error("The Ancor account doesn't exist. Enter a different account or get a new one.")
    }
        
    if(storedEmail && storedPassword){
        if(localStorage.getItem("Email") !== formData.Email || localStorage.getItem("Password") !== formData.Password ){
            toast.error("Entered password or email is incorrect")
        }
    }

    if(localStorage.getItem("Email")===formData.Email && localStorage.getItem("Password")===formData.Password){
        toast.success("Successfully logged in");
        Navigation('/mainpage');
    }

    }


    return (
        <div>
            <img src={loginPage} className='w-screen h-screen'/>
            <form onSubmit={submitHandler}>
            <div className='flex flex-col absolute top-[200px] left-[630px] h-[600px] w-[600px] bg-[#ffff] glassomorphism rounded-2xl'>
               
               {/*//* Title  */}
               <div className='flex flex-col'>
                <h2 className='text-[#000814ce] text-5xl text-center font-semibold font-mono mt-6'>Welcome Back!</h2>
                <p className='text-slate-700 mt-1 text-xl'>
                    Doesn't have an account yet? <span className='text-[#000814ce] font-bold'><NavLink to='/signup'>SignUp</NavLink></span>
                </p>
               </div>
                

            {/*//! Email field */}
                <div className='flex flex-col'>
                    <label htmlFor='emailid' className='text-left mt-7 text-[#000814ce] text-2xl font-bold pl-16'>
                        Email Address
                    </label>
                        <input type='mail' name='Email' value={formData.Email} onChange={changeHandler} placeholder='example@gmail.com' id='emailid' required className='pl-6 w-[420px] ml-16 mt-1 h-[50px] rounded-lg text-2xl border-none outline-none'/>
                </div>

            {/*//! Password field */}
                <div className='flex flex-col'>
                    <label htmlFor='passwid' className='text-left mt-8 text-[#000814ce] text-2xl font-bold pl-16'>
                        Password
                    </label>
                        <input type = {showPassword ? ('text') : ('password')} name='Password' value={formData.Password} onChange={changeHandler}  placeholder='Enter your Password' id='passwid' required className='pl-6 w-[420px] ml-16 mt-2 h-[50px] rounded-lg text-2xl border-none outline-none'/>
                        <span className='cursor-pointer select-none text-2xl text-slate-500 absolute top-[304px] left-[450px]' onClick={()=>setShowPassword((prev)=>!prev)}>
                        {
                        showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>
                        }
                        </span>

                    <p className='absolute mt-10 ml-[350px] text-[#000814ce] font-bold'>
                        <NavLink>
                            Forgot Password?
                        </NavLink>
                    </p>
                </div>


            {/*//! login button */}
                <div>
                    <button className ='w-[420px] -ml-12 mt-8 h-[50px] text-3xl rounded-lg text-center bg-[#ffd12c] text-[#1f1f1f] font-semibold font-mono'>Login</button>
                </div>


            {/*//! google and facebook icon */}
                <div className='flex flex-col relative mt-10 ml-[135px]'>
                    <div className='flex flex-row text-2xl gap-x-4 -ml-[30px] bg-[#fff] h-[2.7rem] rounded-lg  text-center w-[350px] pl-4 pt-1 cursor-pointer'>
                        <FcGoogle className='text-3xl mt-1'/>Continue with Google
                    </div>

                    <div className='flex flex-row mt-7 text-2xl gap-x-4 bg-[#4267B2] text-white pt-1 font-semibold h-[2.7rem]  rounded-lg text-center -ml-[30px] w-[350px] pl-4 cursor-pointer'>
                        <FaFacebookF className='text-3xl mt-1'/>
                        login with Facebook
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login
