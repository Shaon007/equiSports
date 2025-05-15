import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.vivacamera.nl/wp-content/uploads/sportfotografie-gids.jpg",
    "https://www.arabianbusiness.com/cloud/2021/09/14/WDiHUscY-footballsoccer-1200x800.jpg",
    "https://www.fotovalley.com/wp-content/uploads/2020/08/sports-photography-tips-for-amazing-photos-of-sports-1-1.jpg",
  ];

  const sliderContent = [
    {
      slogan: "Ride with Confidence, Gear Up Right!",
      subheading: "Discover top-quality cycling equipment designed for performance, comfort, and durability.",
    },
    {
      slogan: "Own the Field, Play Like a Pro!",
      subheading: "Elevate your game with gear designed for champions.",
    },
    {
      slogan: "Run Faster, Go Further!",
      subheading: "Maximize your performance and enjoy every stride with premium accessories.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[250px] md:h-[400px] lg:h-screen overflow-hidden rounded-md shadow-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? "block" : "hidden"} transition-opacity duration-1000 ease-in-out`}
          >
            <img
              src={image}
              className="absolute w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />

            {currentIndex === index && (
              <motion.div
                key={`slide-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full bg-black/50 flex flex-col justify-center px-6 sm:px-10 lg:px-20 text-white"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold font-mono max-w-2xl"
                >
                  {sliderContent[index].slogan}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-mono max-w-xl"
                >
                  {sliderContent[index].subheading}
                </motion.p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
