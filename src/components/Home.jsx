import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../resources/Colorful_Illustrative_Online_Shop_Logo-removebg-preview.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import "./homePageText.css";
import modeliconsImage from "../resources/Minimal Trendy Branding for Fashion and Photographer Model Agency Instagram Post.png";
import levi from "../resources/Levis-Logo-removebg-preview.png";
import Denims from "../resources/DENIM-removebg-preview.png";
import Louis from "../resources/Louis-Vuitton-logo-removebg-preview.png";
import HM from "../resources/H_M-Logo.svg-removebg-preview.png";
import Nike from "../resources/Nike-Logo.png";
import puma from "../resources/puma-removebg-preview.png";
import zara from "../resources/zara-removebg-preview.png";
import jordansIcons1 from "../resources/icon1-removebg-preview.png";
import jordansIcons2 from "../resources/icon2-removebg-preview.png";
import jordansIcons3 from "../resources/icon3-removebg-preview.png";
import jordansIcons4 from "../resources/icon4-removebg-preview.png";
import jordansIcons5 from "../resources/icon5-removebg-preview.png";
import jordansIcons6 from "../resources/icon6.png";
import upcomingJordans1 from "../resources/upcomingJordans1.png";
import upcomingJordans2 from "../resources/upcomingJordans2.png";
import upcomingJordans3 from "../resources/upcomingJordans3.png";
import upcomingJordans4 from "../resources/upcomingJordans4.png";
import upcomingJordans5 from "../resources/upcomingJordans5.png";
import upcomingJordans6 from "../resources/upcomingJordans6.png";
import { PiDotsNineBold } from "react-icons/pi";
import ellipseWomen from "../resources/Ellipse 2 (2).png";
import { BiSearch } from "react-icons/bi";
import phoneAdpic1 from "../resources/curly-woman-jumping-purple-background-young-cheerful-girl-green-skirt-pink-sweater-looks-away-isolated 1.png";
import phoneAdpic2 from "../resources/charming-slim-brunette-woman-pin-up-dress-coquettishly-raised-her-leg-isolated-wall.png";
import phoneAdpic3 from "../resources/full-length-view-glad-woman-dancing-blue-background-pinup-girl-polkadot-dress-having-fun 1.png";
import phoneAdpic4 from "../resources/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress 1.png";
import frame from "../resources/Frame 32.png";
import { GrApple } from "react-icons/gr";
import playStore from "../resources/playstore.png";
import { BsSendFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import Ad from "../resources/Yellow Modern New Arrival Promotion Instagram Post (1).png";
import { useSelector } from "react-redux";
import './mobileStyle.css'

const Home = () => {
  const { cart } = useSelector((state) => state);

  const shoes = [
    {
      id: 1,
      img: upcomingJordans1,
      iconsImage: jordansIcons2,
    },

    {
      id: 2,
      img: upcomingJordans2,
      iconsImage: jordansIcons4,
    },

    {
      id: 3,
      img: upcomingJordans3,
      iconsImage: jordansIcons5,
    },

    {
      id: 4,
      img: upcomingJordans4,
      iconsImage: jordansIcons3,
    },
    {
      id: 5,
      img: upcomingJordans5,
      iconsImage: jordansIcons1,
    },
    {
      id: 6,
      img: upcomingJordans6,
      iconsImage: jordansIcons6,
    },
  ];

  const navigation = useNavigate();
  const [jordan, setJordan] = useState(6);

  return (
    <div className="flex flex-col overflow-hidden homePageDiv">
      
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ml-5 gap-x-28 MultipleSectionDiv">
          <NavLink to="/">
            <img src={logo} className="w-[200px] -mt-6 -ml-10" />
          </NavLink>

          <NavLink
            to="/men"
            className="text-3xl mt-9 -ml-12 mb-20 font-[roboto] hover:border-b-2 font-normal hover:border-blue-500 text-[#1f1f1f] border-transparent border-b-2 "
          >
            Men
          </NavLink>

          <NavLink
            to="/Women"
            className="text-3xl hover:border-b-2 mt-9 mb-20 font-[roboto] font-normal text-[#1f1f1f] border-transparent border-b-2  hover:border-pink-500"
          >
            Women
          </NavLink>

          <NavLink
            to="/electronics"
            className="text-3xl mt-9 mb-20 hover:border-b-2 font-[roboto] font-normal text-[#1f1f1f] border-transparent border-b-2  hover:border-yellow-500"
          >
            Electronics
          </NavLink>

          <NavLink
            to="/homeandliving"
            className="text-3xl mt-9 mb-20 hover:border-b-2 font-[roboto] font-normal text-[#1f1f1f] border-transparent border-b-2  hover:border-orange-500"
          >
            Home & Living
          </NavLink>
        </div>

        <div className="flex flex-row gap-x-36 mr-5 mt-1 LoginAndCartDiv">
          <NavLink to="/Cart" className="flex flex-row h-0">
            <FaShoppingCart className="text-5xl mt-5" />
            {cart.length > 0 && (
              <span className="h-[30px] w-[30px] mt-2 -ml-4 rounded-full bg-yellow-500 flex flex-col justify-center text-xs font-bold">
                {cart.length}
              </span>
            )}
          </NavLink>

          <NavLink to="/login" className="h-0">
            <button className="w-[150px] text-2xl font-[roboto] tracking-wider rounded-md font-semibold h-[60px] mt-5 bg-[#E6C744]">
              Login
            </button>
          </NavLink>
        </div>
      </div>

      <div className="heroSection flex flex-row justify-between w-screen">
        <div className="heroSection-left flex flex-col gap-y-7">
          <div className="relative flex flex-col">
            <h1 className="heroSectionHeading tracking-wider text-start text-8xl leading-[110px] ml-36 mt-24 font-bold w-0">
              LET’S EXPLORE UNIQUE CLOTHES
            </h1>
            <div className="heroSectionYellowDiv bg-[#EBD96B] absolute mt-[310px] ml-24 z-[-1] w-[535.5px] h-[115.84px] -rotate-2"></div>
          </div>

          <p className="text-[#191818] tracking-wide ml-24 font-sans font-semibold  text-[25.2px]">
            Live for Influential and Innovative fashion!
          </p>

          <button
            onClick={() => {
              navigation("/mainpage");
            }}
            className="w-[280px] h-[80px] ml-[125px] bg-black text-white font-semibold text-3xl font-[roboto] tracking-widest rounded-lg"
          >
            SHOP NOW
          </button>
        </div>

        <div className="heroSection-right -mt-5">
          <img src={modeliconsImage} className="-ml-3" />
        </div>
      </div>

      <div className="bg-[#EBD96B] brandDiv w-screen mt-14 h-[200px] flex flex-row gap-x-20">
        <img src={puma} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={levi} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={Louis} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={Nike} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={Denims} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={HM} className="w-[120px] h-[70px] ml-[72px] mt-14" />
        <img src={zara} className="w-[120px] h-[70px] ml-[72px] mt-14" />
      </div>

      <div className="newArrivalsDiv flex flex-row justify-center -ml-[650px] mt-20">
        <h2 className="text-6xl font-extrabold tracking-wider text-[#000]">
          NEW ARRIVALS
        </h2>
        <div className="bg-[#EBD96B] ml-[306px] w-[250px] h-[50px] rounded-[100%] mt-5 -rotate-6 absolute z-[-1]"></div>
      </div>

      <div className="flex flex-row">
        <div className="yellowShoesDiv flex flex-row bg-[#EBD968] w-[875px] gap-x-14 h-[900px] rounded-[55px] mt-32 ml-[250px]">
          <div className="nikeRepeatedWords flex flex-col gap-y-5 mt-14 ml-32">
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
          </div>

          <div className="nikeRepeatedWords flex flex-col gap-y-5 mt-14">
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
            <p className="text-gray-200 text-9xl font-extrabold opacity-70">
              NIKE
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[953px] h-[770px] mt-[200px] -ml-[350px] rounded-[44px] shoesBox"> 
          <p className="brandingtext text-[3.5rem] flex flex-row justify-center poppinsblack text-white">
            NIKE
          </p>

          <p className="shoesName text-[2.95rem] pt-5 ml-16 poppinsblack text-[#EBD96B] tracking-widest ">
            Air Jordan 1 Zoom CMFT 2
          </p>

          <p className="ShoeDescription text-[1.5rem] ml-24 mt-2  text-white">
            Premium suede and Jordan Brand's signature Formula 23 foam come
            together to give you an extra luxurious (and extra cosy) AJ1.
          </p>

          <p className="shoePrice text-[3.5rem] text-[#DAF2FF] font-bold text-start ml-28 mt-2">
            ₹13,295
          </p>

          <div className="flex flex-col ml-12 mt-5">
            <p className="shoesTextDetails text-start ml-20 text-white text-xl font-medium">
              Nike Air technology absorbs impact for cushioning with every step.
            </p>

            <p className="shoesTextDetails text-start ml-20 text-white text-xl font-medium">
              Suede on the upper and toe breaks in easily and contours to your
              feet.
            </p>

            <p className="shoesTextDetails text-start ml-20 text-white text-xl font-medium">
              Jordan Formula 23 foam keeps your feet extra padded.
            </p>

            <p className="shoesTextDetails text-start ml-20 text-white text-xl font-medium">
              Colour Shown: Summit White/Light Silver/Sail/Particle Grey
            </p>

            <p className="shoesTextDetails text-start ml-20 text-white text-xl font-medium">
              Country/Region of Origin: Indonesia
            </p>
          </div>

          <ul className="shoesIcon flex flex-row gap-x-8 mt-9 ml-32">
            {shoes.map(({ id, iconsImage }) => {
              return (
                <button
                  className="w-[80px] gradient rounded-md  active1 active:border active:border-black"
                  key={id}
                  onClick={(e) => {
                    e.preventDefault();
                    setJordan(id);
                  }}
                >
                  <img src={iconsImage} className="w-[80px]" />
                </button>
              );
            })}{" "}
          </ul>

          <div className="relative">
            {shoes.map(({ img, id }) => {
              return id === jordan ? (
                <img
                  src={img}
                  className="shoeImage w-[550px] absolute -mt-[550px] -ml-[410px]"
                />
              ) : null;
            })}{" "}
          </div>

          <div className="shoesBuyButton flex flex-row justify-center mt-16 gap-x-28">
            <button onClick={(e) => {e.preventDefault();}} className="w-[200px] h-[60px]  bg-amber-300 text-2xl font-semibold rounded-[80px] ">Buy Now</button>

            <button onClick={(e) => {e.preventDefault();}} className="w-[200px] h-[60px]  bg-amber-300 text-2xl font-semibold rounded-[80px] ">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="sale-section relative mt-52 flex flex-row h-[712px] bg-[#FFDE59] gap-x-[630px]">
        <div className="sale-section-left">
          <img src={Ad} width="710px" height="710px" className="salePic"/>
        </div>

        <div className="sale-section-right flex flex-col gap-y-8 mt-8 text-start">
          <div>
            <h2 className="paydayText text-7xl font-bold heroSection mt-24 absolute z-10 w-0">
              PAYDAY
            </h2>
            <div className="whiteDiv bg-white w-[350px] h-[90px] mt-[90px] -rotate-2"></div>
          </div>

          <h2 className="poppinsblack text-[70.5px] text-start ">SALE NOW</h2>

          <p className="text-2xl text-start font-semibold ">
            Spend minimal ₹899 get 30% off
            <br />
            voucher code for your purchase
          </p>

          <p className="font-extrabold text-2xl ">
            1 October 2023 - 1 Dec 2023
          </p>

          <p className="font-medium text-2xl">
            <sup>*</sup>Terms & Conditions apply
          </p>

          <button
            onClick={() => navigation("/mainpage")}
            className="w-[181.72px] text-2xl h-[55.79px] text-white ml-3 rounded-lg bg-black"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="mobileSection flex flex-row  w-screen justify-around">

        <div className="left-mobileSection flex flex-col gap-y-16 mt-64">
          <h2 className="dwnldText text-5xl poppinsblack text-start">
            DOWNLOAD APP &
            <br />
            GET THE VOUCHER!
          </h2>

          <p className="descriptionText text-3xl font-[roboto] text-start text-[#555]">
            Get 30% off for first transaction
            <br />
            using UPI mobile app for now.
          </p>

          <div className="flex flex-row gap-x-16">
            <div className="dwnldBtn flex flex-row w-[204px] h-[71px] bg-black  rounded-[10px] items-center gap-x-4 pl-2 cursor-pointer">
              <GrApple className="text-5xl text-white ml-0" />
              <div className="flex flex-col">
                <p className="text-white text-sm text-start">Download on the</p>
                <span className="text-white text-start text-2xl">
                  App Store
                </span>
              </div>
            </div>

            <div className="dwnldBtn w-[214px] h-[71px] bg-black rounded-[10px] flex flex-row items-center gap-x-4 pl-3 cursor-pointer">
              <img src={playStore} width="40px" />
              <div className="flex flex-col">
                <p className="text-white text-sm text-start">GET IT ON</p>
                <span className="text-white text-start text-xl">
                  GOOGLE PLAY
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-mobileSection flex flex-col mt-20 h-[800px]">
          <div className="w-[367.89px]  h-[800px] border-[18px] border-[#C2C8DA] bg-white rounded-[34.98px] flex flex-col">
            <div className="flex flex-row justify-evenly gap-x-52 mt-10">
                <PiDotsNineBold className="text-yellow-400 text-3xl" />
                <img src={ellipseWomen} className="w-[50px] h-[50px]" />
            </div>

            <h3 className="font-bold text-3xl tracking-wider mt-7">Match your style</h3>

            <div className="relative -top-[100px] left-[380px]">
                  <div className="border z-[-100] border-[#C2C8DA] -top-[20px] w-[650px] absolute h-[650px] -left-[560px] rounded-[600px]"></div>

                  <div className="border z-[-100] border-[#C2C8DA] w-[500px] absolute h-[500px] top-[60px]  right-[310px] rounded-[600px]"></div>
            </div>
            

            <div className="flex flex-row pl-6 gap-x-5 mt-5">
              <div className="bg-[#EBD96B] rounded-[12.24px] h-[30px] text-center w-[80.92px]">
                Trending
              </div>

              <div className="bg-[#E9E6E6] rounded-[12.24px] h-[30px] text-center w-[80.92px]">
                All
              </div>

              <div className="bg-[#E9E6E6] rounded-[12.24px] h-[30px] text-center w-[80.92px]">
                New
              </div>
            </div>
        
            <div className="flex flex-row ml-4 gap-x-10 mt-5">
                <div className="flex flex-col">
                    <img src={phoneAdpic4} className="w-[120px]" />

                    <p className="font-semibold text-sm text-slate-500">Polkadot Red Dress</p>

                    <p className="font-semibold">₹1,499.00</p>
                </div>
 
                <div className="flex flex-col">
                    <img src={phoneAdpic2} className="w-[120px]" />

                    <p className="font-semibold text-center text-sm text-slate-500">Striped Pink <br/> Dress</p>

                    <p className="font-semibold">₹1,299.00</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row ml-6 mt-12 gap-x-10">
                    <img src={phoneAdpic3} className='w-[120px]'/>
                    <img src={phoneAdpic1} className='w-[120px]'/>
                </div>
            
                <img src={frame} className='w-[304px] absolute h-[31px] mt-[270px] ml-3 bg-white'/>
            </div>

          </div>

          <div className="w-[50px] h-[50px] bg-[#EBD96B] -ml-28 -mt-28 rounded-[100px] "></div>

          <div className="w-[13px] h-[13px] ml-[410px] bg-[#89807A] rounded-[100px]"></div>

          <div className="w-[40px] h-[40px] bg-[#EBD96B] rounded-[100px] -mt-[700px] ml-[400px]"></div>

          <div className="w-[30px] -ml-32 -mt h-[30px] bg-[#89807A] rounded-[100px]"></div>
        </div>

      </div>

      <div className="mt-[300px]">
        <div className="bg-[#E5C643] w-screen h-[800px] flex flex-col justify-center items-center">
          <p className="poppinsblack text-white text-[55px] tracking-wider">
            JOIN SHOPPING COMMUNITY TO
            <br />
            GET MONTHLY PROMO
          </p>
          <p className="text-white text-3xl tracking-wider mt-7 pb-10">Type your email down below and be young wild generation</p>

          <div className="flex flex-row mt-7">
            <input type="mail" required placeholder="Add your email here"
            className="w-[574px] h-[84px] pl-10 text-2xl rounded-md border-none outline-none"/>

            <BsSendFill className="text-[40px] cursor-pointer absolute ml-[520px] mt-5"/>
          </div>
        </div>
      </div>

      <div className="bg-[#000] flex flex-row justify-between">
        
        <div className="endPage-leftSection flex flex-col items-start mt-12 gap-y-6 h-[400px] p-32">

          <p className="poppinsblack text-start text-white text-6xl">FASHION</p>
          
          <p className="text-[#8E8E8E] poppinsRegular text-start text-[24px]">
            Complete your style with awesome
            <br />
            clothes from us.
          </p>

          <div className="flex flex-row gap-x-5">
            <div className="bg-[#EBD96B] w-[52px] h-[52px] rounded-[15px] flex justify-center items-center cursor-pointer">
              <RiTwitterXFill className="text-black text-[24px]"/>
            </div>

            <div className="bg-[#EBD96B] w-[52px] h-[52px] rounded-[15px] flex justify-center items-center cursor-pointer">
              <BsInstagram className="text-black text-[24px]"/>
            </div>

            <div className="bg-[#EBD96B] w-[52px] h-[52px] rounded-[15px] flex justify-center items-center cursor-pointer">
              <BiLogoLinkedin className="text-black text-[24px]"/>
            </div>

            <div className="bg-[#EBD96B] w-[52px] h-[52px] rounded-[15px] flex justify-center items-center cursor-pointer">
              <BiLogoFacebook className="text-black text-[24px]"/>
            </div>
          </div>
        
        </div>

        <div className="endPage-rightSection flex flex-row gap-x-24 mt-44 pr-14 h-[450px]">
            <div className="flex flex-col gap-y-8 text-start">

              <h3 className="lastDivLinks text-[#D9D9D9] text-[24px]">Company</h3>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">About</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Contact Us</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Support</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Career</NavLink>

            </div>

            <div className="flex flex-col gap-y-8 text-start">

              <h3 className="lastDivLinks text-[#D9D9D9] text-[24px]">Quick Link</h3>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Share Location</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Orders Tracking</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Size Guide</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">FAQs</NavLink>

            </div>

            <div className="flex flex-col gap-y-8 text-start">
              <h3 className="lastDivLinks text-[#D9D9D9] text-[24px]">Legal</h3>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Terms & conditions</NavLink>

              <NavLink className="lastDivLinks text-[#8E8E8E] text-[24px]">Privacy Policy</NavLink>

            </div>
        </div>
        
      </div>

      </div>
  );
};

export default Home;
