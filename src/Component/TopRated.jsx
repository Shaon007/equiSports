import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const TopRated = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const filteredProducts = data.filter((product) => Number(product.rating) === 5);
        setProducts(filteredProducts);
      })
      .catch((error) => Swal.fire('Error', error.message, 'error'));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="my-10 mx-auto px-4 border p-12 w-11/12">
      <div className="grid grid-cols-4 gap-3">
        {/* Left section with banner title (2/5) */}
        <div className="col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Top Rated Products </h2>
          <p className="text-lg text-gray-600">Explore the best products based on user ratings.</p>
        </div>

        {/* Right section with carousel (3/5) */}
        <div className="col-span-2 flex items-center justify-center border">
          <div className="carousel rounded-box w-full relative">
            {products.length === 0 ? (
              <p className="text-center w-full">No products to Show</p>
            ) : (
              <>
                {/* Carousel items */}
                <div className="carousel-items w-full flex justify-center transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {products.map((product) => (
                    <Fade key={product._id} duration={1000}>
                      <div className="carousel-item border flex flex-col h-[380px] w-[280px] mx-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <img
                          src={product.photo}
                          alt={product.name}
                          className="w-full h-[200px] object-contain rounded-lg"
                        />
                        <div className="p-4">
                          <div className="flex items-center space-x-2 my-2">
                            <span className="font-bold text-lg">${product.price}</span>
                          </div>
                          <Link to={`/product/${product._id}`} className="text-blue-500 hover:text-blue-700">View More</Link>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>

                {/* Slide Next Button */}
                <button
                  onClick={handleNextSlide}
                  className="absolute top-1/2  left-0 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-all duration-300">
                  <FaArrowRight />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
