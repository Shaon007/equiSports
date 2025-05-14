import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../Component/ProductCard";
import AutoSlider from "../Component/AutoSlider";
import TopRated from "../Component/TopRated";
import Review from "../Component/Review";
import Blogs from "../Component/Blogs";

const Home = () => {
  const products = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  // unique categories
  useState(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const handleFilterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const categoryImages = {
    All: "https://i.pinimg.com/736x/7a/d3/d5/7ad3d59842654cd81ecc3c5507b4746b.jpg",
    Cricket: "https://i.pinimg.com/736x/c7/20/3c/c7203ce1302419a5d768d66cb4c97fb5.jpg",
    Football: "https://i.pinimg.com/736x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg",
    Cycling: "https://i.pinimg.com/736x/d3/f6/43/d3f6435e91b5f5e16beb9413c1682308.jpg",
    Running: "https://i.pinimg.com/736x/b9/ca/ab/b9caab07dab6ed5b5078556b0a6b0204.jpg",
    Accessories: "https://i.pinimg.com/736x/f9/bd/26/f9bd264beab7cc4d0954fa40d5603654.jpg"
  };

  return (
    <div className="w-full mx-auto ">
      <div className="">
        <AutoSlider />
      </div>

      <div className="w-11/12 mx-auto ">
        <div className="bg-red-200">
          <div className="text-3xl text-center font-mono mt-12 font-semibold">
            <h2>Explore Our Products</h2>
          </div>
          {/* Category Filter Buttons */}
          <div className="lg:w-9/12 mx-auto justify-center gap-8 my-16 flex-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            <button
              onClick={() => handleFilterByCategory("All")}
              className="btn btn-active p-2 h-36 w-36 rounded-full "
            >
              <img className="object-cover rounded-full w-32 h-32 transform transition-all duration-300 hover:scale-110" src="https://i.pinimg.com/736x/7a/d3/d5/7ad3d59842654cd81ecc3c5507b4746b.jpg" alt="All" />
              <p className="pt-2 ">All</p>
            </button>

            {categories.map((category) => {
              if (categoryImages[category]) {
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterByCategory(category)}
                    className="btn  btn-active  p-2 h-36 w-36 rounded-full"
                  >
                    {/* Category Image */}
                    <img className="object-cover rounded-full w-32 h-32 transform transition-all duration-300 hover:scale-110" src={categoryImages[category]} alt={category} />
                    <p className="pt-2 ">{category}</p>
                  </button>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className=" lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <TopRated></TopRated>
      </div>
      <div className="my-20 ">
        <h2 className="text-3xl text-center mt-12 font-mono font-semibold">Some Satisfied Customers</h2>
        <Review></Review>
      </div>
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default Home;
