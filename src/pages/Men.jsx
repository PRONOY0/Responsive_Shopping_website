import React from "react";
import MenCard from "../components/MenCard";
import { NavLink } from "react-router-dom";
import logo from "../resources/Colorful_Illustrative_Online_Shop_Logo-removebg-preview.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import { useState } from "react";
import "./slider.css";
import Slider from "react-slider";
import filter from "../resources/filter.png";
import sadmg from "../SadMagnifyingGlass.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {RiTwitterXFill} from 'react-icons/ri'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'

const Men = ({ Products }) => {
  const { cart } = useSelector((state) => state);
  const [priceFilter, setPriceFilter] = useState(false);

  const Min = 0;

  const [shoes, setShoes] = useState(false);

  const Max = 300000;

  const totalItemsPerPage = 6;

  const [i, setI] = useState(0);

  const [j, setJ] = useState(totalItemsPerPage);

  const [visibleProducts, setVisibleProducts] = useState(Products.filter(item => item.type === 'men').slice(i, j));

  function nextPageHandler() {
    const newI = i + totalItemsPerPage;
    const newJ = j + totalItemsPerPage;
    const itemsPerPage = Products.filter(item => item.type === 'men').slice(newI, newJ);
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
    const previousBtnItemsPerPage = Products.filter(item => item.type === 'men').slice(oldI, oldJ);
    setI(oldI);
    setJ(oldJ);
    setVisibleProducts(previousBtnItemsPerPage);
  }

  const [singleClick, setSingleClick] = useState([]);

  const [filterDivShow, setfilterDivShow] = useState(false);

  const [categoryClicked, setCategoryClicked] = useState(false);

  const [menClicked, setMenClicked] = useState(false);

  const [bottomWear, setBottomWear] = useState(false);

  const [MenButton, setMenButton] = useState(false);

  const [values, setValues] = useState([Min, Max]);

  function menHandler(e) {
    setMenClicked((prev) => !prev);
    e.stopPropagation();
  }

  function categoryChangeHandler() {
    setCategoryClicked((prev) => !prev);
  }

  function doneHandler() {
    setfilterDivShow(false);
    setPriceFilter(false);
    setFormData(false);
  }

  const ApplyHandler = () => {
    setfilterDivShow(false);

    const newSingleClick = [];

    for (let x in formData) {
      if (formData[x] === true) {
        newSingleClick.push(x);
      }
      setSingleClick(newSingleClick);
    }

    console.log(formData);
  };

  console.log("this is singleClick array ",singleClick);

  function menButtonHandler() {
    setMenButton((prev) => !prev);
  }

  function ClearHandler() {
    const resetPrice = [0, 300000];
    setfilterDivShow(false);
    setSingleClick([]);
    setPriceFilter(false);
    setValues(resetPrice);
    setMenClicked(false);
    setMenButton(false);
    setBottomWear(false);
    setShoes(false);
    setCategoryClicked(false);

    for (let x in formData) {
      formData[x] = false;
    }
  }

  const [formData, setFormData] = useState({
    shirt: false,
    tshirt: false,
    jeans: false,
    cargoPants: false,
    brogues: false,
    sneakers: false,
    jordans: false,
    boots: false,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function shoesHandler() {
    setShoes((prev) => !prev);
  }

  function bottomWearHandler() {
    setBottomWear((prev) => !prev);
  }

  function filterHandler() {
    setfilterDivShow((prev) => !prev);
  }

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div>
        <nav className="bg-white w-screen h-[87px]">
          <NavLink to="/" className="w-[150px] absolute">
            <img src={logo} className=" absolute -top-[25px] -left-[960px]" />
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
          className="text-2xl text-black bg-[#E6C744] w-[120px] h-[44px] pt-1 rounded-lg  font-semibold absolute left-[1720px] top-[28px]"
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

                      <div className="flex flex-col" onClick={menHandler}>
                        {menClicked ? (
                          <div>
                            <div className="flex flex-row mt-5 ml-5">
                              <IoIosArrowDown className="rotate-180 text-2xl mt-1" />
                              <p className="text-xl ml-4 select-none">Men</p>
                            </div>

                            <ul
                              onClick={(e) => e.stopPropagation()}
                              className="text-start ml-20"
                            >
                              <div onClick={menButtonHandler} className="mt-5">
                                {MenButton ? (
                                  <div>
                                    <div className="flex flex-row gap-x-4">
                                      <p className="text-lg text-[#413839] font-semibold select-none">
                                        Top Wear
                                      </p>
                                      <IoIosArrowDown className="text-2xl rotate-180 mt-[3px]" />
                                    </div>

                                    <ul
                                      onClick={(e) => e.stopPropagation()}
                                      className="ml-6"
                                    >
                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c2-17"
                                            name="tshirt"
                                            value={formData.tshirt}
                                            checked={formData.tshirt}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c2-17"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            T-Shirts
                                          </label>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c2-18"
                                            name="shirt"
                                            value={formData.shirt}
                                            checked={formData.shirt}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c2-18"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Shirts
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                ) : (
                                  <div>
                                    <div className="flex flex-row gap-x-4">
                                      <p className="text-lg text-[#413839] font-semibold select-none">
                                        Top Wear
                                      </p>
                                      <IoIosArrowDown className="text-2xl mt-[3px]" />
                                    </div>
                                  </div>
                                )}{" "}
                              </div>

                              <div onClick={bottomWearHandler} className="mt-5">
                                {bottomWear ? (
                                  <div>
                                    <div className="flex flex-row gap-x-4">
                                      <p className="text-lg text-[#413839] font-semibold select-none ml-[3px]">
                                        Bottom Wear
                                      </p>
                                      <IoIosArrowDown className="text-2xl rotate-180 mt-[3px]" />
                                    </div>

                                    <ul
                                      onClick={(e) => e.stopPropagation()}
                                      className="ml-8"
                                    >
                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c2-19"
                                            name="jeans"
                                            value={formData.jeans}
                                            checked={formData.jeans}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c2-19"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Jeans
                                          </label>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c2-20"
                                            name="cargoPants"
                                            value={formData.cargoPants}
                                            checked={formData.cargoPants}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c2-20"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Cargo Pants
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                ) : (
                                  <div className="flex flex-row gap-x-4">
                                    <p className="text-lg text-[#413839] font-semibold select-none ml-[3px]">
                                      Bottom Wear
                                    </p>
                                    <IoIosArrowDown className="text-2xl mt-[3px]" />
                                  </div>
                                )}{" "}
                              </div>

                              <div onClick={shoesHandler} className="mt-5">
                                {shoes ? (
                                  <div>
                                    <div className="flex flex-row gap-x-4">
                                      <p className="text-lg text-[#413839] font-semibold select-none ml-[3px]">
                                        Shoes
                                      </p>
                                      <IoIosArrowDown className="text-2xl rotate-180 mt-[3px]" />
                                    </div>

                                    <ul
                                      onClick={(e) => e.stopPropagation()}
                                      className="ml-9"
                                    >
                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c2-29"
                                            name="jordans"
                                            value={formData.jordans}
                                            checked={formData.jordans}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c2-29"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Jordans
                                          </label>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c3-29"
                                            name="boots"
                                            value={formData.boots}
                                            checked={formData.boots}
                                            onChange={changeHandler}
                                          />
                                          <label
                                            htmlFor="c3-29"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Boots
                                          </label>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c4-29"
                                            name="sneakers"
                                            value={formData.sneakers}
                                            checked={formData.sneakers}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c4-29"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Sneakers
                                          </label>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="checkbox-wrapper-13 gap-x-5 mt-5 flex">
                                          <input
                                            type="checkbox"
                                            id="c5-29"
                                            name="brogues"
                                            value={formData.brogues}
                                            checked={formData.brogues}
                                            onChange={changeHandler}
                                          />

                                          <label
                                            htmlFor="c5-29"
                                            className="-mt-[3px] text-[#413839] font-semibold text-lg select-none"
                                          >
                                            Brogues
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                ) : (
                                  <div className="flex flex-row gap-x-4">
                                    <p className="text-lg text-[#413839] font-semibold select-none ml-[3px]">
                                      Shoes
                                    </p>
                                    <IoIosArrowDown className="text-2xl mt-[3px]" />
                                  </div>
                                )}{" "}
                              </div>
                            </ul>
                          </div>
                        ) : (
                          <div className="flex flex-row mt-5 ml-5">
                            <IoIosArrowDown className="text-2xl mt-1" />
                            <p className="text-xl ml-4 select-none">Men</p>
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
                          Price <span className="font-bold">Range</span>
                        </h3>
                        <div className="m-0 font-medium text-[#275efe]">
                          ₹{values[0]}- ₹{values[1]}
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
                  className="w-[130px] h-[60px] bg-[#c0c0c06e] hover:bg-[#c0c0c0a3]  text-2xl font-semibold text-[#E5E4E2] rounded-lg"
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
           .map((item) => <MenCard item={item} key={item.id}/>)
        )


        :

        visibleProducts.map((item) => <MenCard item={item} key={item.id} />)}

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
          {i > 0 && pageNo < 9 && (
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
            pageNo < 9 ? "opacity-100" : "opacity-0"
          } text-2xl font-bold tracking-wider`}
        >
          {`Page ${pageNo} of 8`}
        </div>

        {/* //! Next Page and no items left logic */}
        <div>
          {i >= 0 && j < 47 && (
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

export default Men;
