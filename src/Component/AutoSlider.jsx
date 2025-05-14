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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-screen overflow-hidden rounded-md shadow-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? "block" : "hidden"} duration-1000 transition-all ease-in-out`}
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />

            {currentIndex === index && (
              <motion.div
                key={`slide-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full bg-black/50 flex flex-col justify-center items-start px-10 text-gray-200"
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="pl-10 pt-20 text-xl font-mono md:text-3xl lg:text-5xl lg:w-[650px] font-bold"
                >
                  {sliderContent[index].slogan}
                </motion.span>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="pl-10 w-[400px] mt-2 text-base font-mono md:text-lg lg:text-xl"
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
