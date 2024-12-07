import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const AllProduct = () => {
  const products = useLoaderData();
  const [sortedProducts, setSortedProducts] = useState(products);

  // Sorting function
  const handleSort = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  return (
    <div>
      <div className="my-4 w-2/3 mx-auto">
        <div className="flex justify-end">
          <button
            onClick={handleSort}
            className="mb-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
          >
            Sort by Price (Low to High)
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    {/* View More Button */}
                    <Link
                      to={`/product/${product._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        View More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
