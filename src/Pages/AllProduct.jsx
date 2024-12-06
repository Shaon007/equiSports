import { useLoaderData, Link } from "react-router-dom";

const AllProduct = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md my-4 w-2/3 mx-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Action</th> {/* New Action Column */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">
                  {/* View More Button */}
                  <Link
                    to={`/product/${product._id}`} // Assuming this is the route to the product details page
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
  );
};

export default AllProduct;
