import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";
import {MdDelete} from 'react-icons/md'
import './homePageText.css'
import Cart from './Cart';

const CartItem = ({item,}) => {
  const dispatch = useDispatch();
  const itemPrice = parseFloat(item.Price.replace(/,/g, ''));

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  
  const cutDescription = `${item.Description.substring(0,170)}...`;
  const cutTitle = `${item.Title.substring(0, 60)}...`;
  const [count,setCount] = useState(1);
  const numberWithoutComma = parseInt((item.Price).replace(/,/g, ''));
  
  
  const increment = () =>{
    setCount(count + 1);
  } 
  
  const decrement = () =>{
    setCount(count - 1);
  }


  return (
    <div>
      <div className="">
          <div className='flex flex-row mt-28'>
            <img className="flex flex-row w-[250px] image-Container select-none mt-10 ml-10" alt="item image" src={item.image}/>
            <div className='flex flex-col mt-16 ml-10'>
                <h2 className="text-[#262626] text-xl font-semibold text-start">{cutTitle}</h2>
                <h2 className="text-start mt-3 w-[660px] text-[#808080] font-semibold">{cutDescription}</h2>
                <p className=""><span className="text-xl  mt-2 flex flex-row font-bold text-[#1f1f1f]">₹{(numberWithoutComma-200).toLocaleString("en-IN")}</span></p>
                <div className='flex flex-col justify-end mt-8'>
                  <p className='text-[#009E60] font-bold pt-32 ml-1 absolute'>In Stock</p>
                </div>
              <div className=' flex flex-row pt-28 -ml-[3px]'>
                  <button onClick={decrement} disabled={count===1} className={`${count===1 ? "cursor-no-drop text-[#A9A9A9]" : "cursor-pointer"} w-[50px] border border-[#D3D3D3] text-[30px]`}>-</button>
                  <div className='w-[50px] border border-[#D3D3D3] text-2xl flex flex-col justify-center'>{count}</div>
                  <button onClick={increment} disabled={count>=3} className={`${count>=3 ? "cursor-no-drop text-[#A9A9A9]" : "cursor-pointer"} w-[50px] border border-[#D3D3D3] text-[30px]`}>+</button>
                  <button onClick={removeFromCart} className=' relative left-10 text-[#1f1f1f] text-lg hover:text-blue-600 font-medium rounded-sm'>Delete</button> 
                  <h2 className='text-xl ml-28 mt-2 font-bold text-[#262626]'>Total :</h2>
                  <div className='text-xl ml-3 mt-2 text-[#1f1f1f] font-bold'> ₹{((numberWithoutComma-200)*count).toLocaleString('en-IN')}</div>
                </div>
              </div>

          </div>
      </div>
    </div>
  )
}

export default CartItem
