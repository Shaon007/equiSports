import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProductCard from "../Component/ProductCard";

const AllProduct = () => {
  const navigate = useNavigate();
  const products = useLoaderData();
  const [sortedProducts, setSortedProducts] = useState(products);
  const [priceAsc, setPriceAsc] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
      priceAsc ? a.price - b.price : b.price - a.price
    );
    setSortedProducts(sorted);
    setPriceAsc(!priceAsc);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    setSortedProducts(filtered);
  };

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <div className="pt-20 bg-stone-100 dark:bg-gray-700 min-h-screen">
      <div className="py-4 w-11/12 md:w-10/12 mx-auto">

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-cyan-600 h-8 gap-2 flex items-center justify-center text-gray-100 p-3 font-semibold rounded-lg hover:bg-gray-500 transition"
          >
            <FaArrowLeft />
            Home
          </button>

          <button
            onClick={handleSortByPrice}
            className="px-4 py-2 font-semibold bg-cyan-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Sort by Price {priceAsc ? "↑" : "↓"}
          </button>

          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 shadow-sm focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Product Cards */}
        {sortedProducts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 py-10">
            No products found.
          </p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 pb-10">
            {sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
