import React from "react";
import "./homePageText.css";
import "./addtocart.css";
import toast from "react-hot-toast";
import "./deleteCart.css";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {add ,remove} from "../redux/slice/CartSlice";
import { AiFillDelete } from "react-icons/ai";


const ElectronicsCard = ({item}) => {
  
  const {Price, Title, Description, image} = item;
  
  const {cart} = useSelector((state) => state);
  
  const dispatch = useDispatch();
  
    const addToCart = () => {
      dispatch(add(item));
      toast.success("Item added to Cart"); 
    }

    const removeFromCart = () => {
      dispatch(remove(item.id));
      toast.error("Item removed from Cart");
    }

  const cutTitle = `${Title.substring(0, 70)}...`;

  const cutDescription = `${Description.substring(0, 240)}...`;

  var itemsPrice = Price.replace(/,/g, "");
  const priceInt = parseInt(itemsPrice);
  const discountPrice = priceInt - 200;
  const formattedPrice = discountPrice.toLocaleString("en-IN");

  return (
    <div className="overflow-x-hidden flex flex-row border-2 border-[#d3d3d3c5] mt-[110px] scroll-smooth">
      <img
        src={image}
        className="w-[250px] image-Container select-none mt-10 ml-10"
      />
      <div className="flex flex-row ml-[6rem]">
        {/*//? Title and description */}
        <div className="flex flex-row">
          <h1 className="mt-28 select-none text-start text-2xl font-bold absolute heroSectionBottomPart">
            {cutTitle}
          </h1>
          <p className="mt-40 font-semibold text-start absolute w-[500px]">
            {cutDescription}
          </p>
        </div>

        {/*//? Price & Buy-button */}
        <div className="flex flex-col relative pl-[1150px] pt-10">
          <div className="bg-[#d3d3d3a2] h-[300px] top-5 w-[2px] absolute left-[1050px]"></div>
          <p className="font-bold text-2xl mr-36 relative right-3 mt-16 select-none">
            ₹{formattedPrice}
          </p>
          <span className="line-through text-red-500 font-bold text-2xl mt-16 select-none absolute left-[1300px]">
            ₹{Price}
          </span>

          <button
            onClick={() => {
              toast.success("Purchased successfully 🥳");
            }}
            className="w-[280px] active:scale-[0.9] transition-all duration-[.5s] mt-2 h-[61px] bg-[#E6C744] mb-0 text-2xl font-semibold select-none"
          >
            Buy Now
          </button>

          <div>
            {cart.some((p) => p.id === item.id) ? (
              <button
                className="w-[280px]  mt-12 h-[61px] bg-[#E6C744] mb-0 text-2xl font-semibold"
                onClick={removeFromCart}
              >
                <AiFillDelete className="left-[1170px] text-3xl absolute" />
                Remove Item
              </button>
            ) : (
              <button
                className="w-[280px]  mt-12 h-[61px] bg-[#E6C744] mb-0 text-2xl font-semibold"
                onClick={addToCart}
              >
                <AiOutlineShoppingCart className="left-[1170px] text-3xl absolute" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsCard;
