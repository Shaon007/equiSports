import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../Component/ProductCard";

const Home = () => {
  const products = useLoaderData(); // Fetch products from the loader
  const [filteredProducts, setFilteredProducts] = useState(products); // Default to all products
  const [categories, setCategories] = useState([]);

  // Extract unique categories from the products
  useState(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  // Handle filtering by category
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
      {/* <div className="flex justify-end">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex={0} className=" dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div> */}
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
