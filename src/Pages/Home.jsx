import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../Component/ProductCard";
import AutoSlider from "../Component/AutoSlider";
import TopRated from "../Component/TopRated";
import Review from "../Component/Review";
import Blogs from "../Component/Blogs";
import Features from "../Component/Features";

const Home = () => {
  const products = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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
    <div className="w-full mx-auto bg-stone-200 dark:bg-gray-700">
      <div className="">
        <AutoSlider />
      </div>

      <div>
        <Features/>
      </div>

      <div className="w-full mx-auto ">
        <div className="">
          <div
            className="relative  h-72 flex flex-col items-center justify-center bg-fixed bg-center bg-cover "
            style={{
              backgroundImage: "url('https://i.pinimg.com/1200x/88/4c/3c/884c3c4285c79df0be1371b5344788da.jpg')",
            }}
          >
            <div className="bg-gray-600 bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
            <h2 className="relative z-10 text-4xl md:text-5xl text-white font-mono font-semibold">
              Explore Our Products
            </h2>

          </div>

          {/* Category Filter Buttons */}
          <div className="w-4/5 lg:w-9/12 mx-auto justify-center gap-8 my-16 flex-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            <button
              onClick={() => handleFilterByCategory("All")}
              className="btn btn-active p-2 h-36 w-36 rounded-full "
            >
              <img className="object-cover rounded-full w-32 h-32 transform transition-all duration-300 hover:scale-110" src="https://i.pinimg.com/736x/7a/d3/d5/7ad3d59842654cd81ecc3c5507b4746b.jpg" alt="All" />
              <p className="pt-2 text-lg dark:text-white">All</p>
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
                    <p className="pt-2 text-lg dark:text-white">{category}</p>
                  </button>
                );
              }
              return null;
            })}
          </div>

        </div>

        {/* Product Grid */}
        <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {filteredProducts.slice(0, 12).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/allProduct")}
            className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700  hover:scale-105 transition"
          >
            View All
          </button>
        </div>


      </div>

      <div className="w-11/12 mx-auto">
        <TopRated></TopRated>
      </div>
      <div className="my-20 mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mt-12 font-mono font-semibold">-- Some Satisfied Customers --</h2>
        <Review></Review>
      </div>
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default Home;
