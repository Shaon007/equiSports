import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";

// Assuming you have a context or props to get the user's email
const MyProduct = ({ userEmail }) => {
  const products = useLoaderData();

  // Filter products to only include those matching the user's email
  const filteredProducts = products.filter(
    (product) => product.host?.email === userEmail
  );

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            My Added Products
          </h1>
          <p className="text-lg text-gray-700">
            {filteredProducts.length > 0
              ? "Here are the products you added:"
              : "No products found."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => {
            const { name, rating, details, photo, price } = product;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="h-56 w-full object-cover"
                  src={photo}
                  alt={name}
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-900">{name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {details}
                  </p>
                  <p className="text-gray-900 font-semibold mt-2">
                    Price: ${price}
                  </p>
                  <p className="text-yellow-500 text-sm">
                    Rating: {rating}/5
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
