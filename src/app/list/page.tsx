import React from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const ListPage = () => {
  return (
    <>
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-100 sm:flex justify-between h-64 px-4">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl leading-[48px] font-semibold text-gray-700">
            Grab to 50% Off on <br></br> selected Products
          </h2>
          <button className="rounded-3xl bg-cart w-max py-3 px-5 text-white text-sm">
            Shop now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            fill
            alt="banner"
            className="object-contain"
          ></Image>
        </div>
      </div>
      {/* FILTER */}
    <Filter></Filter>
    {/* {PRODUCT-LIST} */}
    <h1 className="mt-12 text-xl font-semibold">Shoes for you</h1>
    <ProductList></ProductList>
    </div>
    </>
  );
};

export default ListPage;
