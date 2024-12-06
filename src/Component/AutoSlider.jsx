import React, { useEffect, useState } from "react";

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images array
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
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative mt-[-70px] h-56 overflow-hidden rounded-lg md:h-[650px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? "block" : "hidden"
              } duration-1000 transition-all ease-in-out`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />

            {/* Slogan  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-start px-4 text-white">
              <span className="pl-10 pt-20 text-5xl w-[460px] font-bold">{sliderContent[index].slogan}</span>
              <p className="pl-10 w-[400px] mt-2 text-xl">{sliderContent[index].subheading}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={currentIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % images.length
          )
        }
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default AutoSlider;
