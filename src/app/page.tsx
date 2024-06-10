import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Categories from './../components/Categories';
import NewProductList from './../components/NewProductList';

const HomePage = () => {
  return (
    <div className="">
      <Slider></Slider>
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <ProductList></ProductList>
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
