"use client";

import Image from "next/image";

export default function CartModel() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md top-10 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20] flex flex-col gap-6">
      {!cartItems ? (
        <div>Cart Item is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex items-center gap-4">
              <Image
                src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                height={96}
                width={72}
                className="object-cover rounded-md"
              ></Image>
              {/* TEXT-CONTAINER */}
              <div className="flex flex-col justify-between w-full gap-6">
                {/* TOP */}
                <div className="flex flex-col">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">ProductName</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$48</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-400">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                height={96}
                width={72}
                className="object-cover rounded-md"
              ></Image>
              {/* TEXT-CONTAINER */}
              <div className="flex flex-col justify-between w-full gap-6">
                {/* TOP */}
                <div className="flex flex-col">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">ProductName</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$48</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-400">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">SubTotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Shipping and Taxes Calculated at Checkout
            </p>
            <div className="flex justify-between items-center">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md px-4 py-3 text-white bg-black rin">checkOut</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
