"use client";
import React from "react";

export default function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="h-8 w-8 cursor-pointer rounded-full ring-1 ring-gray-200 relative bg-pink-500 ">
          <div className="ring-2 h-10 w-10 ring-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="h-8 w-8 cursor-pointer rounded-full ring-1 ring-gray-200 relative bg-blue-500" />

        <li className="h-8 w-8 cursor-pointer rounded-full ring-1 ring-gray-200 relative bg-gray-400">
          <div className="h-[2px] w-10 bg-gray-500 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 py-1 px-4 rounded-md text-sm text-cart cursor-pointer">
          small
        </li>
        <li className="ring-1 py-1 px-4 bg-cart rounded-md text-sm text-white cursor-pointer">
          medium
        </li>
        <li className="ring-1 py-1 px-4 bg-pink-200 rounded-md text-sm text-white cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
}
