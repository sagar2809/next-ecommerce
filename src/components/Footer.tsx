import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <Link href="/">
            <div className="text-2xl tracking-wide">Earth</div>
          </Link>
          <p>
            Jaipur Building no 23, street no 7 , market bhundi infront of
            multiparking
          </p>
          <span className="font-semibold">multibrands@gmail.com</span>
          <span className="font-semibold">96914 12367</span>
          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="facebook"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/mastercard.png"
              alt="masterCard"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/paypal.png"
              alt="paypal"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            ></Image>
            <Image src="/x.png" alt="pinterest" width={16} height={16}></Image>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Homepage</Link>
              <Link href="/">shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6 capitalize">
              <Link href="/">Customer Service</Link>
              <Link href="/">my accunt</Link>
              <Link href="/">find a store</Link>
              <Link href="/">legacy and privacy</Link>
              <Link href="/">gift card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <div className="font-medium text-lg">SUBSCRIBE</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, id
            tempora.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="w-3/4 p-4"
            />
            <button className="w-1/4 bg-cart text-white ">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex justify-between">
            <Image
              src="/skrill.png"
              alt="pinterest"
              width={40}
              height={20}
            ></Image>
            <Image
              src="/discover.png"
              alt="pinterest"
              width={40}
              height={20}
            ></Image>
            <Image
              src="/paypal.png"
              alt="pinterest"
              width={40}
              height={20}
            ></Image>
            <Image
              src="/mastercard.png"
              alt="pinterest"
              width={40}
              height={20}
            ></Image>
            <Image
              src="/visa.png"
              alt="pinterest"
              width={40}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        {/* LEFT */}
        <div className=""> @ 2024 Earth shop</div>
        {/* RIGHT */}
        <div className="flex flex-col gap-8 md:flex-row items-center">
          <div className="">
            <span className="text-gray-500 mr-4">Language:</span>
            <span className="font-medium">India | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency:</span>
            <span>&#8377;</span>
            <span> Rupees</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
