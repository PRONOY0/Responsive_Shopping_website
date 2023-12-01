import React from 'react'
import '../components/homePageText.css'
import {useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {BsCartFill} from 'react-icons/bs'
import '../components/addtocart.css'
import toast from 'react-hot-toast'
import '../components/deleteCart.css'

const ElectronicsCard = ({Price, Title, Description, image}) => {
    const [heart, setHeart] = useState(false);
    const [clicked,setClicked] = useState(false);

    const cutTitle = `${Title.substring(0, 70)}...`;
    
    const cutDescription = `${Description.substring(0, 240)}...`;
    
    function clickHandler() {
        setClicked((prev) => !prev)
    }

    var itemsPrice = Price.replace(/,/g, '');
    const priceInt = parseInt(itemsPrice);
    const discountPrice = (priceInt - 200);
    const formattedPrice = discountPrice.toLocaleString('en-IN', {style: 'currency',currency: 'INR'});

    return (<div className='overflow-x-hidden flex flex-row border-2 border-[#d3d3d3c5] mt-6 scroll-smooth'>
        <img src={image}
            className='w-[250px] image-Container select-none mt-10 ml-10'/>
        <div className='flex flex-row ml-[6rem]'>
            {/*//? Title and description */}
                                <div className='flex flex-row'>
                                    <h1 className='mt-28 select-none text-start text-2xl font-bold absolute heroSectionBottomPart'>{cutTitle}</h1>
                                    <p className='mt-40 font-semibold text-start absolute w-[500px]'>{cutDescription}</p>
                                </div>
                                
                                {/*//? Price & Buy-button */}
                                <div className='flex flex-col relative pl-[1100px] pt-10'>
                                    <div className='bg-[#d3d3d3a2] h-[300px] top-5 w-[2px] absolute left-[1050px]'></div>
                                    <p className='font-bold text-2xl mr-36 mt-16 select-none'>{formattedPrice}</p>
                                    <span className='line-through text-red-500 font-bold text-2xl mt-16 select-none absolute left-[1270px]'>₹{Price}</span>

                                    <button onClick={()=>{toast.success("Purchased successfully 🥳")}} className='w-[280px] active:scale-[0.9] transition-all duration-[.5s] mt-2 h-[61px] bg-[#E6C744] mb-0 text-2xl font-semibold select-none'>
                                        Buy Now
                                    </button>

                                    <button class="CartBtn select-none" onClick={clickHandler}>
                                        {
                                            clicked ? 

                                            (
                                                <div className='text-2xl font-semibold flex select-none'>Remove from Cart <AiFillDelete className=' mt-1 ml-4'/> </div>
                                            )
                                            
                                            :

                                            (
                                            <div className='text-2xl font-semibold flex select-none'>Add to Cart <BsCartFill className=' mt-1 ml-6'/></div>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
            )
        }

    export default ElectronicsCard 

    