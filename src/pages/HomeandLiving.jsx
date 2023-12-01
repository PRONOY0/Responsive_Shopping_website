import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../resources/Colorful_Illustrative_Online_Shop_Logo-removebg-preview.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import HomeandLivingCard from "../components/HomeandLivingCard";
import filter from "../resources/filter.png";
import { IoIosArrowDown } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import Slider from "react-slider";
import sadmg from "../SadMagnifyingGlass.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {RiTwitterXFill} from 'react-icons/ri'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'

const HomeandLiving = ({ Products }) => {
  const { cart } = useSelector((state) => state);

  const Min = 0;

  const Max = 300000;

  const totalItemsPerPage = 5;

  const [i, setI] = useState(0);

  const [j, setJ] = useState(totalItemsPerPage);

  const [visibleProducts, setVisibleProducts] = useState(Products.filter(item => item.type === 'furnitures').slice(i, j));

  function nextPageHandler() {
    const newI = i + totalItemsPerPage;
    const newJ = j + totalItemsPerPage;
    const itemsPerPage = Products.filter(item => item.type === 'furnitures').slice(newI, newJ);
    setI(newI);
    setJ(newJ);
    setVisibleProducts(itemsPerPage);
  }

  const [pageNo, setPageNo] = useState(1);

  function pageNumberDisplay() {
    const pageNoDisplay = j / totalItemsPerPage;
    setPageNo(pageNoDisplay);
  }

  useEffect(() => {
    pageNumberDisplay();
  });

  function backHandler() {
    const oldI = i - totalItemsPerPage;
    const oldJ = j - totalItemsPerPage;
    const previousBtnItemsPerPage = Products.filter(item => item.type === 'furnitures').slice(oldI, oldJ);
    setI(oldI);
    setJ(oldJ);
    setVisibleProducts(previousBtnItemsPerPage);
  }

  const [values, setValues] = useState([Min, Max]);

  function categoryChangeHandler() {
    setCategoryClicked((prev) => !prev);
  }

  function homeAndLivingHandler(e) {
    sethomeAndLivingClicked((prev) => !prev);
    e.stopPropagation();
  }

  function filterHandler() {
    setfilterDivShow((prev) => !prev);
  }

  function doneHandler() {
    setfilterDivShow(false);
    setFormData(false);
  }

  const [singleClick, setSingleClick] = useState([]);

  const ApplyHandler = () => {
    setfilterDivShow(false);

    const newSingleClick = [];

    for (let x in formData) {
      if (formData[x] === true) {
        newSingleClick.push(x);
      }
      setSingleClick(newSingleClick);
    }

    console.log(Products.Price);
    console.log("Min", values[0]);
    console.log("Max", values[1]);
  };

  function ClearHandler() {
    const resetPrice = [0, 300000];
    setfilterDivShow(false);
    setSingleClick([]);
    setPriceFilter(false);
    setValues(resetPrice);
    setCategoryClicked(false);
    sethomeAndLivingClicked(false);

    for (let x in formData) {
      formData[x] = false;
    }
  }

  const [formData, setFormData] = useState({
    bed: false,
    sofa: false,
    table: false,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [filterDivShow, setfilterDivShow] = useState(false);

  const [homeAndLiving, sethomeAndLivingClicked] = useState(false);

  const [categoryClicked, setCategoryClicked] = useState(false);

  const [priceFilter, setPriceFilter] = useState(false);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div>
        <nav className="bg-white w-screen h-[87px]">
          <NavLink to="/" className="w-[150px] absolute">
            <img src={logo} className="absolute -top-[25px] -left-[960px]" />
          </NavLink>

          <NavLink
            to="/men"
            className="text-2xl text-[#000000] absolute left-[200px] pt-7 hover:border-b-2  border-blue-500"
          >
            Men
          </NavLink>

          <NavLink
            to="/Women"
            className="text-2xl text-[#000000] absolute left-[310px] top-7 hover:border-b-2  border-pink-500"
          >
            Women
          </NavLink>

          <NavLink
            to="/electronics"
            className="text-2xl text-[#000000] absolute left-[470px] top-7 hover:border-b-2  border-[#E6C744]"
          >
            Electronics
          </NavLink>

          <NavLink
            to="/homeandliving"
            className="text-2xl text-[#000000] absolute left-[660px] top-7 hover:border-b-2  border-orange-500"
          >
            Home & Living
          </NavLink>
        </nav>
      </div>

      <div>
        <NavLink to="/Cart">
          <FaShoppingCart className="text-5xl absolute left-[1650px] text-[#00000] top-[26px]" />
          {cart.length > 0 && (
            <span
              className="absolute top-[34px] left-[1674px] text-[14px] flex 
                    justify-center items-center rounded-full text-[#E6C744] font-bold"
            >
              {cart.length}
            </span>
          )}
        </NavLink>

        <NavLink
          to="/login"
          className="text-2xl w-[120px] text-black bg-[#E6C744] h-[44px] pt-1 rounded-lg  font-semibold absolute left-[1720px] top-[28px]"
        >
          Login
        </NavLink>
      </div>

      <div
        className="ml-7 mt-14 absolute flex flex-row"
        onClick={filterHandler}
      >
        <div className="flex flex-row pr-[70px] cursor-pointer">
          <img src={filter} className="w-[30px] pt-2" />
          <p className="mt-3 ml-3 text-xl font-bold ">All Filters</p>
        </div>
      </div>
      {/*//! FILTER SECTION */}
      <div className="absolute left-0 ml-14 mt-4">
        {/* //!!! FILTER  SECTION */}
        <div className="fixed">
          {filterDivShow ? (
            <div className="absolute overflow-y-auto z-10 h-screen w-[400px] pt- z-15 bg-slate-300 -top-[103px] -ml-14">
              {/* //!!!  FILTER & DIV STYLE */}
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h2 className="text-start ml-5 text-xl font-bold pt-5">
                    Filters
                  </h2>
                  <button
                    className="ml-[200px] text-xl  pt-5 font-semibold text-orange-500"
                    onClick={doneHandler}
                  >
                    Done
                  </button>
                </div>
                <div className="bg-[#99999954] w-[365px] h-[2px] mt-5"></div>
              </div>

              {/* //!!! CATEGORY FILTER */}
              <span onClick={categoryChangeHandler} className="relative top-5">
                {categoryClicked ? (
                  <div>
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between">
                        <p className="text-xl ml-5 select-none">Category</p>
                        <IoIosArrowDown className="mr-10 text-3xl rotate-180" />
                      </div>

                      <div className="flex flex-row gap-x-2 mt-4 bg-gray-400">
                        <PiSquaresFour className="text-3xl ml-[18px]" />
                        <p className="text-xl font-semibold">All Categories</p>
                      </div>

                      <div
                        className="flex flex-col"
                        onClick={homeAndLivingHandler}
                      >
                        {homeAndLiving ? (
                          <div>
                            <div className="flex flex-row mt-5 ml-5">
                              <IoIosArrowDown className="rotate-180 text-2xl mt-1" />
                              <p className="text-xl ml-4 select-none">
                                Home and Living
                              </p>
                            </div>

                            <ul
                              onClick={(e) => e.stopPropagation()}
                              className="text-start ml-20"
                            >
                              <li>
                                <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                  <input
                                    type="checkbox"
                                    id="a8-13"
                                    name="table"
                                    value={formData.table}
                                    checked={formData.table}
                                    onChange={changeHandler}
                                  />

                                  <label
                                    htmlFor="a8-13"
                                    className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                  >
                                    Table
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                  <input
                                    type="checkbox"
                                    id="a9-13"
                                    name="bed"
                                    value={formData.bed}
                                    checked={formData.bed}
                                    onChange={changeHandler}
                                  />

                                  <label
                                    htmlFor="a9-13"
                                    className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                  >
                                    Bed
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                  <input
                                    type="checkbox"
                                    id="a10-13"
                                    name="sofa"
                                    value={formData.sofa}
                                    checked={formData.sofa}
                                    onChange={changeHandler}
                                  />

                                  <label
                                    htmlFor="a10-13"
                                    className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                  >
                                    Sofa
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <div className="flex flex-row mt-5 ml-5">
                            <IoIosArrowDown className="text-2xl mt-1" />
                            <p className="text-xl ml-4 select-none">
                              Home and Living
                            </p>
                          </div>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row justify-between">
                    <p className="text-xl ml-5 select-none">Category</p>
                    <IoIosArrowDown className="mr-10 text-3xl" />
                  </div>
                )}{" "}
              </span>

              {/* //!!! PRICE FILTER */}
              <div
                onClick={(e) => {
                  setPriceFilter((prev) => !prev);
                  e.stopPropagation();
                }}
              >
                {priceFilter ? (
                  <div>
                    <div className="flex flex-row ml-5 mt-11 justify-between">
                      <p className="text-xl select-none">Price</p>
                      <IoIosArrowDown className="rotate-180 text-3xl mr-10 select-none" />
                    </div>
                    <div onClick={(e) => e.stopPropagation()} className="mt-5">
                      <div className="ml-5 w-[330px] h-[220px] pt-[36px] pr-[32px] bg-white rounded-xl">
                        <h3 className="text-[32px] font-bold text-[#3f4656] select-none">
                          Price<span className="font-bold">Range</span>
                        </h3>
                        <div className="m-0 font-medium text-[#275efe]">
                          ₹{values[0]} - ₹{values[1]}
                        </div>
                        <small className="text-[17px] mt-2 block font-semibold text-[#1f1f1f]">
                          Current Range: ₹{values[1] - values[0]}
                        </small>
                        <Slider
                          className="w-[300px] h-[5px] bg-[#cdd9ed] slider mt-[25px] ml-4"
                          value={values}
                          step={1000}
                          max={Max}
                          min={Min}
                          onChange={setValues}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row justify-between ml-5 mt-11">
                    <p className="text-xl select-none">Price</p>
                    <IoIosArrowDown className="text-3xl mr-10 select-none" />
                  </div>
                )}{" "}
              </div>

              <div className="flex flex-row ml-5 mt-10 gap-x-32">
                <button
                  className="w-[130px] h-[60px] bg-[#c0c0c06e] hover:bg-[#c0c0c0a3]  text-2xl font-semibold text-white rounded-lg"
                  onClick={ClearHandler}
                >
                  Clear All
                </button>
                <button
                  className="w-[130px] h-[60px] bg-[#e6c844] hover:bg-[#FFC000] text-2xl font-semibold rounded-lg -ml-10"
                  onClick={ApplyHandler}
                >
                  Apply
                </button>
              </div>
            </div>
          ) : null}{" "}
        </div>
      </div>

      <div>
      {
        singleClick.length > 0

        ?
          
        (
        Products.filter((item) =>
         singleClick.includes(item.category))
           .filter((item) => {
                const price = parseFloat(item.Price.replace(/[^0-9.-]+/g, ""));
                if (priceFilter === true) {
                  return price >= values[0] && price <= values[1];
                }
                return true; // Include all items when the price filter is off
           })
           .map((item) => <HomeandLivingCard item={item} key={item.id}/>)
        )


        :

        visibleProducts.map((item) => <HomeandLivingCard item={item} key={item.id} />)}

        {singleClick.length > 0 &&
          (singleClick.every((category) =>
            Products.some(
              (item) =>
                singleClick.includes(item.category) &&
                (!priceFilter ||
                  (priceFilter &&
                    parseFloat(item.Price.replace(/[^0-9.-]+/g, "")) >=
                      values[0] &&
                    parseFloat(item.Price.replace(/[^0-9.-]+/g, "")) <=
                      values[1]))
            )
          ) || (
            <div className="w-screen h-[800px] mt-24 flex overflow-hidden flex-row justify-center items-center">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">
                  Oops! We couldn't find any items that match your filter
                  criteria.
                </h1>
                <Lottie animationData={sadmg} />
              </div>
            </div>
          ))}
      </div>

      <div
        className={`${
          singleClick.length > 0 ? "hidden" : "block"
        } flex flex-row ml-44  justify-center items-center  gap-x-56`}
      >
        {/* //! Previous button logic*/}
        <div className="">
          {i > 0 && pageNo < 4 && (
            <button
              onClick={backHandler}
              className="text-2xl font-bold tracking-wider h-[70px]"
            >
              {`< Back`}
            </button>
          )}
        </div>

        {/* //! Page Count logic*/}
        <div
          className={`${
            pageNo < 4 ? "opacity-100" : "opacity-0"
          } text-2xl font-bold tracking-wider`}
        >
          {`Page ${pageNo} of 3`}
        </div>

        {/* //! Next Page and no items left logic */}
        <div>
          {i >= 0 && j < 15 && (
            <button
              onClick={nextPageHandler}
              className="text-2xl font-bold tracking-wider h-[70px]"
            >
              {`Next >`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeandLiving;
