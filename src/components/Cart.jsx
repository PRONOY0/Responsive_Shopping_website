import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from 'react-router-dom';
import logo from '../resources/Colorful_Illustrative_Online_Shop_Logo-removebg-preview.png'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {FaShoppingCart} from 'react-icons/fa'
import paypal from '../resources/paypal-removebg-preview.png'
import CongratulationTick from './CongratulationTick';
import {CgDanger} from 'react-icons/cg'
import emptyCart from '../EmptyCart.json'
import Lottie from 'lottie-react';
import './mobileStyle.css'
import {FaBars} from 'react-icons/fa'

const Cart = () => {
  const {cart} = useSelector((state) => state);

  const [congratsAnimation,setCongratsAnimation] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [appliedPromoCode,setAppliedPromoCode] = useState(false);
  const [discountApplied,setDiscountApplied] = useState(false);
  
  useEffect(()=>{
      const calculatedTotal = cart.reduce((acc, item) => {
        const price = parseInt(item.Price.replace(/[^0-9]/g, ''), 10);
        return acc + price;
      }, 0);
      setTotalAmount(calculatedTotal);
  },[cart])

  const [promoValue,SetPromoValue] = useState('')

  const handleInputChange = (e) => {
    SetPromoValue(e.target.value);
  };

  const checkOutHandler = () =>{

    if(promoValue==='AB24WFFP0CVQ'){
      setAppliedPromoCode(false);
      setDiscountApplied(true);
      
      setTimeout(()=>{
        setCongratsAnimation(true);
        
        setTimeout(()=>{
          setCongratsAnimation(false);
        },4000)
      },500)
      
    }
    else{
      setAppliedPromoCode(true);
      setDiscountApplied(false);
    }
  }

  const discountPrice = (totalAmount*0.3);
  const [mobileView,setMobileView] = useState(false);

  return (
    <div className='overflow-x-hidden'>

      {
        congratsAnimation ? (<CongratulationTick/>) 
        
        : 
      
        (<div>  
      <div className='navbarDiv'>
            <nav className='bg-white w-screen h-[87px]' id='navbar'>
              <div>
                <NavLink to='/' className='w-[150px] absolute' id='navbar-icon'>
                    <img src={logo}
                    className='absolute -top-[25px] -left-[960px]' id='icon'/>
                </NavLink>
                
                <div className='selectSection'>
                  <NavLink to='/men' className='text-2xl select-none text-[#000000] absolute left-[200px] pt-7 hover:border-b-2  border-blue-500' id='navbar-upperText1'>
                      Men
                  </NavLink>
  
                  <NavLink to='/Women' className='text-2xl select-none text-[#000000] absolute left-[310px] top-7 hover:border-b-2  border-pink-500' id='navbar-upperText2'>
                      Women
                  </NavLink>
  
                  <NavLink to='/electronics' className='text-2xl select-none text-[#000000] absolute left-[470px] top-7 hover:border-b-2  border-[#E6C744]' id='navbar-upperText3'>
                      Electronics
                  </NavLink>
  
                  <NavLink to='/homeandliving' className='text-2xl text-[#000000] absolute left-[660px] top-7 hover:border-b-2  border-orange-500' id='navbar-upperText4'>
                      Home & Living
                  </NavLink>
                </div>
              </div>

              <div className='bars'>
                        <FaBars onClick={()=>{
                          setMobileView((prev)=>!prev)}} className='absolute -left-2'/>

                        <div className={`${mobileView ? "block" : "hidden"} selectSection flex flex-col border bg-red-500 w-[200px] h-[400px]`}>
                          <NavLink to='/men' className='text-2xl select-none text-[#000000]'>
                              Men
                          </NavLink>
          
                          <NavLink to='/Women' className='text-2xl select-none text-[#000000] '>
                              Women
                          </NavLink>
          
                          <NavLink to='/electronics' className='text-2xl select-none text-[#000000]'>
                              Electronics
                          </NavLink>
          
                          <NavLink to='/homeandliving' className='text-2xl text-[#000000]'>
                              Home & Living
                          </NavLink>
                        </div>
              </div>

            </nav>
      </div>

      <div>
          <div>
            <NavLink to='/Cart'>
                <FaShoppingCart className='text-5xl absolute left-[1650px] text-[#00000] top-[26px]' id='shoppingCart'/>
                {
                    cart.length > 0 &&
                    <span
                    className="absolute top-[34px] left-[1674px] text-[14px] flex 
                    justify-center items-center rounded-full text-[#E6C744] font-bold" id='totalItems' 
                    >{cart.length}</span>
                }
            </NavLink>
            </div>

            <NavLink to='/login' id='login' className='text-2xl text-black bg-[#E6C744] select-none w-[120px] h-[44px] pt-1 rounded-lg  font-semibold absolute left-[1720px] top-[28px]'>
                Login
            </NavLink>
      </div>

      <div>
        { cart.length > 0 ?
         (<h1 className="text-[#262626] text-3xl mt-10 ml-9 absolute font-semibold">Shopping Cart</h1>) 
         
         :

         (null)
        }
      </div>
    
    {
      cart.length > 0  ? 
      
      (
      <div className='flex flex-row'>
      {/* //! cart items */}
        <div>
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            } )
          }
        </div>
        
        
        <div className=" w-[450px] bg-[#1f1f1f] h-[940px] overflow-hidden rounded-lg mt-10 ml-[330px]">
            <p className="font-[roboto] font-medium tracking-wider pt-10 flex pl-5 text-white text-4xl">Summary</p>

            <div className='bg-[#3c3c3c] mt-8 w-[450px] h-[2px]'></div>

          <div className='flex absolute mt-1 flex-col w-[270px] '>
            <p className='text-white select-none text-start flex flex-row gap-x-2 mt-4 font-[roboto] text-xl underline cursor-pointer ml-5'>
              Do you have a Promo Code?
            </p>

              
            <div className='flex flex-col'>
              <input type='text' onChange={handleInputChange} placeholder='Use this code:- AB24WFFP0CVQ' className=' outline-none h-[40px] select-none rounded-md border-none pl-5 mt-2 w-[350px] font-medium font-[roboto] placeholder:text-xl  flex flex-col ml-5' value={promoValue}/>
              <div className='flex flex-row ml-6 gap-x-2 mt-2'>
                <CgDanger className={`${ appliedPromoCode ? "block" : "hidden"} text-red-500 text-xl font-semibold`}/>
                <div>{ appliedPromoCode ? (<p className='text-red-500 font-[roboto] text-md'>Please Enter your Coupon Code</p>) : (null) }</div>
              </div>
            </div>
                
          </div>
           
          <div className='bg-[#3c3c3c] mt-36 absolute w-[450px] h-[2px]'></div>

          <p className="text-white mt-36 relative top-8 text-xl font-medium font-[roboto] ml-6 flex flex-row justify-between">
            SUBTOTAL
            <span className="relative -left-4">
            {
              promoValue==='AB24WFFP0CVQ'
              
              ? 
              
              (<p className="text-green-400 font-semibold text-xl">₹{(discountPrice-200).toLocaleString('en-IN')}</p>)
              
               : 
               
              (<p>₹{(totalAmount-200).toLocaleString('en-IN')}</p>) 
            }
            </span>  
          </p>


          <div className='bg-[#3c3c3c] mt-14 absolute w-[450px] h-[2px]'></div>

          <p className='flex flex-col mt-16 relative top-6 text-start text-lg ml-6 text-white font-medium'>
            ESTIMATED SHOPPING & HANDLING  <span className='flex flex-row justify-end -mt-6 text-lg relative -left-5 '>₹0</span>
            <p>Standard : Free  Arrives: 5-10 days</p>
          </p>

          
          <p className='flex flex-row justify-between relative top-12'>
            <span className='text-xl text-[#D3D3D3] font-semibold font-[roboto] ml-6 mt-16'>TAX</span>
            <span className='text-xl text-[#D3D3D3] font-medium font-[roboto] relative -left-5 mt-16'>₹25</span>
          </p>
       
          <div className='bg-[#3c3c3c] mt-20 absolute w-[450px] h-[2px]'></div>
        
          <p className='flex flex-row gap-x-[300px] mt-28 absolute'>
            <span className='text-xl font-medium text-white ml-6'>TOTAL</span>
            <span className={`${promoValue==='AB24WFFP0CVQ' ? "-left-14" : "-left-10"} text-xl text-white font-medium relative`}>
            {
               promoValue==='AB24WFFP0CVQ' 
              
              ? 
              
              (<p className="text-green-400 font-semibold text-xl">₹{(discountPrice-200).toLocaleString('en-IN')}</p>)
              
               : 
               
              (<p>₹{(totalAmount-200).toLocaleString('en-IN')}</p>) 
            }
            </span>
          </p>

          <div className='bg-[#3c3c3c] mt-44 absolute w-[450px] h-[2px]'></div>

        <div className='mt-52 gap-y-8 flex flex-col'>
          <button className="bg-[#E6C744] ml-5 w-[410px] h-[50px] text-xl font-semibold" onClick={checkOutHandler}>CHECKOUT</button>
          <p className='text-white text-2xl font-medium italic'>OR</p>
          <div className="bg-white ml-5 w-[410px] relative  h-[50px] flex flex-row justify-center cursor-pointer" onClick={checkOutHandler}>
            <p className='text-xl -ml-32 mt-[10px] font-semibold'>Check out with</p>
            <img src={paypal} className='absolute left-60 -top-10'/>
          </div>
        </div>
        
        </div>
      </div>
      
      ) 
      
      : 
      
      (
        
      <div className='overflow-hidden'>
        <div className="flex flex-col w-[1902px] h-[902px]" id='emptyCartDivSection'>
          <Lottie animationData={emptyCart} className='w-[600px] relative left-[650px]' id='emptyAnimation'/>
          <h1 className="relative top-5 font-bold font-[roboto] text-[#1f1f1f] text-6xl" id='headingForEmptyText'>YOUR CART IS EMPTY RIGHT NOW</h1>
          <p className='relative top-9 left-[410px] font-semibold text-2xl text-[#5A5A5A] text-start' id='para1'>Looks like you have not made your choice yet.It appears that your cart is currently empty.</p>
          <p className='relative top-9 left-[560px] font-semibold text-2xl text-[#5A5A5A] text-start' id='para2'>Explore our selection of products and start shopping now!</p>
          <NavLink className='relative top-24' to={"/mainpage"} id='shopNowBtn'>
            <button className="text-[#E6C744] font-semibold  text-3xl font-[roboto] w-[250px] h-[70px] rounded-lg bg-[#1f1f1f]">
              Shop Now
            </button>
          </NavLink>
        </div>
      </div>)
    }
        </div>)
      }
      </div>
  )
}

export default Cart

