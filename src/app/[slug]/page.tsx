import ProductImages from "@/components/ProductImages";
import React from "react";
import CustomizeProducts from "./../../components/CustomizeProducts";
import Add from "./../../components/Add";

const SinglePage = () => {
  return (
    <div className="h-max px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 lg:h-max 2xl:h-max">
      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages></ProductImages>
      </div>
      {/* TEXT-CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
          beatae autem, asperiores amet facilis suscipit deserunt, explicabo
          totam ab laudantium earum molestias modi necessitatibus, vel omnis
          impedit pariatur molestiae.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-gray-300 line-through text-xl">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts></CustomizeProducts>
        <Add></Add>
        <div className="h-[2px] bg-gray-100">
          <div className="text-sm my-6">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maiores natus reiciendis necessitatibus beatae ipsa,
              earum cumque unde itaque quidem libero quos eius deleniti fugiat
              voluptatum at aliquam! Minima, ea.
            </p>
          </div>
          {/* <div className="text-sm my-6">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maiores natus reiciendis necessitatibus beatae ipsa,
              earum cumque unde itaque quidem libero quos eius deleniti fugiat
              voluptatum at aliquam! Minima, ea.
            </p>
          </div> */}
          {/* <div className="text-sm my-6">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maiores natus reiciendis necessitatibus beatae ipsa,
              earum cumque unde itaque quidem libero quos eius deleniti fugiat
              voluptatum at aliquam! Minima, ea.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
