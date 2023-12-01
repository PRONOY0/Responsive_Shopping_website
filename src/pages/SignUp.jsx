import React, { useEffect } from 'react'
import backgroundImage from '../resources/Coming Soon Website Coming Soon Page in Yellow Blue Photo and Videocentric Style.png'
import {AiFillEyeInvisible,AiFillEye}  from 'react-icons/ai'
import {BsFillPersonFill}  from 'react-icons/bs'
import {BsFillTelephoneFill}  from 'react-icons/bs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import './glass.css'

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false);

  const Navigation = useNavigate();

  const [formData,setFormData] = useState({
    Password:"",
    ConfirmPassword:"",
    telephone:"",
    Email:"",
  })

  
  useEffect(()=>{

    localStorage.setItem('Email', formData.Email);

    if (formData.ConfirmPassword===formData.Password) {
      localStorage.setItem('Password', formData.Password);
    }

  })

  function submitHandler(event){

    event.preventDefault();

    if(formData.Password !== formData.ConfirmPassword){
      toast.error("Those password Doesn't match");
    }

    else{
      toast.success("Account Created successfully");
      Navigation('/mainpage');
    }
  }



  function clickHandler(event){
    setFormData( (prevData) =>(
      {
        ...prevData,
        [event.target.name]:event.target.value
      }
  ) )
  }
  return (
        <div>
        <img src = {backgroundImage} alt='signUp background' className='h-screen w-screen'/>
            <form onSubmit={submitHandler}>
              <div className='glassomorphism h-[850px] w-[650px] absolute top-[100px] left-[600px] rounded-xl'>
              
                <div className='mt-6'>
                  <h1 className='text-3xl font-bold text-[#000814ce]'>Create Account</h1>
                </div>

                {/*//! First Name*/}
                <div className='flex flex-col mt-5 text-start'>
                  <label htmlFor='FirstNameId' className='text-2xl text-[#000814ce] ml-12'>First Name</label>
                  <input type='text' id='FirstNameId'  required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='Enter your first name'/>
                </div>


              {/*//! Last Name*/}
                <div className='flex flex-col mt-5 text-start'>
                  <label htmlFor='LastNameId' className='text-2xl text-[#000814ce] ml-12'>Last Name</label>
                  <input type='text' id='LastNameId'  required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='Enter your last name'/>
                </div>
                
                {/*//! Email */}
                <div className='flex flex-col mt-5 text-start'>
                  <label htmlFor='EmailAddressId' className='text-2xl text-[#000814ce] ml-12'>Email Address</label>
                  <input type='email' id='EmailAddressId' name='Email' onChange={clickHandler} value={formData.Email} required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='Enter Your email address'/>
                  <BsFillPersonFill className='absolute text-3xl text-[#1b1f2d] left-[530px] top-[360px]'/>
                </div>

              {/*//! mobile no.*/}
                <div className='flex flex-col mt-5 text-start'>
                  <label htmlFor='Phone-Number-Id' className='text-2xl text-[#000814ce] ml-12'>Mobile Number</label>
                  <input type='tel' onChange={clickHandler} id='Phone-Number-Id' required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='example- 123-456-7891' name='telephone'/>
                  <BsFillTelephoneFill className='absolute text-2xl text-[#1b1f2d] left-[535px] top-[480px]'/>
                </div>
                
                {/*//! password */}
                <div className='flex flex-col mt-5 text-start'>
                  <label htmlFor='PasswordId' className='text-2xl text-[#000814ce] ml-12'>Password</label>
                  <input type={ showPassword ? ("text") : ("password") } id='PasswordId' required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='Enter Your Password' name='Password' value={formData.Password} ml-12 onChange={clickHandler}/>

                  <span className='cursor-pointer select-none text-3xl text-[#1b1f2d] absolute top-[590px] left-[530px]' onClick={()=>setShowPassword((prev)=>!prev)}>
                    {
                    showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>
                    }
                  </span>
                </div>


              {/*//! confirm password */}
                <div className='flex flex-col mt-6 text-start'>
                  <label htmlFor='ConfirmPasswordId' className='text-2xl text-[#000814ce] ml-12'>Confirm Password</label>
                  
                  <input type={ showPassword ? ("text") : ("password") } id='ConfirmPasswordId' required className='w-[530px] ml-12 mt-3 rounded-lg h-[50px] text-2xl pl-4' placeholder='Confirm Your Password' name='ConfirmPassword' ml-12 value={formData.ConfirmPassword} onChange={clickHandler}/>
                  <span className='cursor-pointer select-none text-3xl text-[#1b1f2d] absolute top-[705px] left-[530px] ' onClick={()=>setShowPassword((prev)=>!prev)}>
                    {
                      showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>
                    }
                  </span>
                </div>

                <div>

                  <button className='text-[#000814ce] text-3xl mt-10 font-semibold'>
                    Create
                  </button>
                </div>

              </div>
            </form>
        </div>
    )
}

export default SignUp
