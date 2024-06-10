import React from 'react'
import  Link from 'next/link';
import Image  from 'next/image';

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 "
          ></Image>
          <Image
            src="https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-gray-400">description of product</div>
        <button className="w-max rounded-2xl ring-1 ring-cart text-sm py-2 px-4 hover:text-white hover:bg-cart">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 "
          ></Image>
          <Image
            src="https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-gray-400">description of product</div>
        <button className="w-max rounded-2xl ring-1 ring-cart text-sm py-2 px-4 hover:text-white hover:bg-cart">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 "
          ></Image>
          <Image
            src="https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-gray-400">description of product</div>
        <button className="w-max rounded-2xl ring-1 ring-cart text-sm py-2 px-4 hover:text-white hover:bg-cart">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 "
          ></Image>
          <Image
            src="https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-gray-400">description of product</div>
        <button className="w-max rounded-2xl ring-1 ring-cart text-sm py-2 px-4 hover:text-white hover:bg-cart">
          Add To Cart
        </button>
      </Link>
    </div>
  );
}

export default ProductList
