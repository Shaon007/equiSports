import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEye, FaHouseChimney } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const AllProduct = () => {
  const navigate = useNavigate()
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
    <div className="pt-20 bg-stone-100 min-h-screen">
      <div className="my-4 w-11/12 lg:w-9/12 mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">

          <button
            onClick={() => navigate("/")}
            className=" bg-cyan-600 h-8 gap-2 flex items-center justify-center text-gray-100 p-3 font-semibold  rounded-lg hover:bg-gray-500 transition"
          > <FaArrowLeft/>
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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-300 font-semibold text-gray-600">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr
                  key={product._id}
                  className="bg-white border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded border"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <Link to={`/product/${product._id}`}>
                      <button className="flex items-center justify-center gap-2 px-3 py-2 bg-cyan-600 text-white rounded-lg hover:scale-105 transition">
                        <FaEye />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {sortedProducts.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
