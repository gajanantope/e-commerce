import React, { useRef, useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { count } from "../store/productcountSlice";
import { change } from "../store/searchSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const productNumber = useSelector((state) => state.productCount.value);
  const cartProducts = useSelector((state) => state.cartProduct.value);

  const inputValue = useRef("");
  const handleChange = () => {
    const searchText = String(inputValue.current.value);
    dispatch(change(searchText));
    inputValue.current.value = "";
  };

  useEffect(() => {
    dispatch(count(cartProducts.length));
  }, [cartProducts]);
  return (
    <>
      <div className="flex justify-between items-center pl-6 h-16 pr-4 w-100% main shadow-md shadow-slate-800 sm:pr-20 sm:justify-around">
        <div className="text-3xl font-medium hidden sm:block ">E-Commerce</div>
        <div className=" text-6xl sm:hidden">
          <AiFillCodeSandboxCircle />
        </div>
        <div className=" flex">
          <input
            className="text-black font-medium  pl-4 pt-1 pb-1 border-2 border-black bg-opacity-30 w-72 rounded-l-lg"
            type="text"
            placeholder="Search"
            ref={inputValue}
            // onChange={handleChange}
          />
          <div className="pl-2 pt-2 pb-1 pr-2 border-t-2 border-r-2 border-b-2 border-black bg-white rounded-r-lg">
            <button onClick={handleChange}>
              <IoSearch />
            </button>
          </div>
        </div>
        <Link to="/cart">
          <div className="flex flex-row">
            <IoMdCart className="w-8 h-8 " />
            <sup className="text-base bg-black text-white pl-2 h-6 w-6 rounded-full">
              {productNumber}
            </sup>
          </div>
        </Link>
      </div>
      <hr className="bg-gray-950 h-1px" />
    </>
  );
}
