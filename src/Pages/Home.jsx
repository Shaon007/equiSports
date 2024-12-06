import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../Component/ProductCard";

const Home = () => {
  const products = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  // unique categories
  useState(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  //  filter by category
  const handleFilterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered); // Show products matching the selected category
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold my-4">Home</h2>
      <p className="mb-6">Total Products: {filteredProducts.length}</p>

      {/* Category Filter Buttons */}

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => handleFilterByCategory("All")}
          className="btn btn-ghost btn-active border px-4 py-2 rounded-lg text-sm"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterByCategory(category)}
            className="btn btn-ghost btn-active border px-4 py-2 rounded-lg text-sm"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
