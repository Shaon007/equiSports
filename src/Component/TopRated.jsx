import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Swal from 'sweetalert2';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TopRated = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://equi-sports-server-psi.vercel.app/product')
      .then((response) => response.json())
      .then((data) => {
        // Filter products with 5-star rating
        const filteredProducts = data.filter((product) => Number(product.rating) === 5);
        setProducts(filteredProducts);
      })
      .catch((error) => Swal.fire('Error', error.message, 'error'));
  }, []);

  return (
    <div className="my-20 px-8 md:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left section with text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-4">
            Top Rated Products
          </h2>
          <p className="text-lg lg:text-2xl text-gray-700">
            Discover the highest-rated products based on customer feedback and reviews.
          </p>
        </div>

        {/* Right section with Swiper carousel */}
        <div className="lg:w-1/2 w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.length === 0 ? (
              <p className="text-center text-lg text-gray-600 w-full">
                No products to show.
              </p>
            ) : (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="text-center bg-gray-800 p-6 rounded-md">
                    <Link to={`/product/${product._id}`} className="block">
                      <img
                        src={product.photo}
                        alt={product.name}
                        className="w-[70%] h-64 object-contain rounded-md mb-4 mx-auto"
                      />
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      <p className="text-gray-300 mt-2 mb-4">{product.description}</p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
