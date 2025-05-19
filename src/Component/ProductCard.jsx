import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, rating, details, photo, price } = product;

  const capitalizedProductName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="relative group lg:w-[300px] lg:h-[424px] bg-white shadow-lg border border-gray-200 rounded-lg  dark:bg-gray-600 dark:border-gray-700 hover:scale-105 transition-transform duration-500">
      <div className="transform transition-transform duration-300 ">
        <img
          className="rounded-t-lg rounded-b-none h-[150px] md:h-[200px] w-full object-cover "
          src={photo}
          alt="product"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl md:text-2xl mt-3 font-semibold tracking-tight text-gray-700 dark:text-white h-[36px] overflow-hidden font-mono">
            {capitalizedProductName}
          </h5>
          <p className="text-gray-700 font-mono  dark:text-white text-xs md:text-sm overflow-hidden text-ellipsis whitespace-normal max-h-[2.8em] md:max-h-[4.2em] leading-snug">
            {details}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {rating}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <span className="text-xl md:text-3xl mb-2 font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/product/${_id}`}
              className="px-3 py-2 mx-auto md:m-0 md:test-sm text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg hover:scale-90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
