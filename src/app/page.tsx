// "use client"
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Categories from './../components/Categories';
import NewProductList from './../components/NewProductList';
import { Suspense, useContext, useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {

  // const wixClient = await wixClientServer();

  // const response = await wixClient.products.queryProducts().find();
  //          console.log("resp")
  //          console.log(response)

  //   useEffect(() => {

  //       const getProduct = async () => {
  //         try {
  //           const response = await wixClient.products.queryProducts().find();
  //           console.log("resp")
  //           console.log(response)

  //         } catch (error) {
  //           console.log(error)

  //         }
  //     }

  // getProduct();
  //   }, [wixClient])


  return (
    <div className="">
      <Slider></Slider>
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <Suspense fallback={"loading"}>

          <ProductList
            categoryId={process.env.FEATURE_PRODUCT_CATEGORY_ID}
            limit={4}></ProductList>
        </Suspense>
      </div>
      <div className="mt-24">
        <h2 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h2>
        <Categories></Categories>
      </div>
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">New Products</h2>
        <NewProductList></NewProductList>
      </div>
    </div>
  );
};

export default HomePage;
