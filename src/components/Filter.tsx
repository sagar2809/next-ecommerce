import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          placeholder="min price"
          name="min"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-100 text-gray-300"
        />
        <input
          type="text"
          placeholder="max price"
          name="max"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-100  text-gray-300"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
        >
          <option>Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
        >
          <option>Color</option>
          <option value="color">Color</option>
        </select>
        <select
          name="Category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
        >
          <option>Category</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100"
        >
          <option>All filters</option>
          <option value="size">Size</option>
          <option value="color">Color</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort by"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="">Price (High to Low)</option>
          <option value="">Price (Low to High)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
