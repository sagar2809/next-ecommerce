"use client";

import { useState } from "react";

export default function Add() {
  const[quantity ,setQuantity] = useState(1)
  const handleQuantity = () => {}
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-medium">Choose a quantity</h4>
      <div className="flex items-center justify-between ">
        {/* button conat */}
        <div className="flex items-center gap-4">
          <div className="flex justify-between items-center py-2 px-4 rounded-3xl bg-gray-300 w-32">
          <button className="cursor-pointer text-xl" onClick={() => handleQuantity()}>+</button>
          {quantity}
          <button className="cursor-pointer text-xl">-</button>

          </div>
        <div className="text-xs">
          Only <span className="text-orange-400">Four items</span> Left! <br />{" "}
          {"Don't"} miss it
        </div>
        </div>
      <button className="ring-1 w-36 rounded-3xl py-2 px-4 text-sm text-cart ring-cart hover:bg-cart hover:text-white disabled:cursor-not-allowed disabled:bg-pink-300 disabled:text-white disabled:ring-0">
        Add to cart
      </button>
      </div>
    </div>
  );
}
