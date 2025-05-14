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
        const filteredProducts = data.filter((product) => Number(product.rating) === 5);
        setProducts(filteredProducts);
      })
      .catch((error) => Swal.fire('Error', error.message, 'error'));
  }, []);

  return (
    <div className="my-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-teal-50 to-purple-100 py-16 rounded-xl shadow-inner">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-800 font-mono mb-4">
             Top Rated Products
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-mono leading-relaxed">
            Dive into our most loved and highest-reviewed products — handpicked by your fellow sports lovers.
          </p>
        </div>

        {/* Swiper section */}
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
              <p className="text-center text-lg text-gray-600 w-full">No products to show.</p>
            ) : (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="bg-stone-50 p-6 rounded-xl shadow-lg border hover:shadow-2xl transition duration-300">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.photo}
                        alt={product.name}
                        className="w-[80%] h-60 object-contain rounded-lg mx-auto mb-4 hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-xl flex  justify-center font-semibold text-gray-700">{product.name}</h3>
                      <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
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
