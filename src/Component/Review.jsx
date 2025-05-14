import { useEffect, useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Review = () => {
  const reviews = [
    {
      id: 1,
      quote: "This product exceeded my expectations. Highly recommended!",
      name: "Luffy D. Monkey",
      userImage: "https://i.pinimg.com/736x/95/1b/7e/951b7e1c05c3cdfc5ffd514ff4ccc23c.jpg",
    },
    {
      id: 2,
      quote: "Absolutely love it! Great quality and excellent service.",
      name: "Bart",
      userImage: "https://i.pinimg.com/736x/21/16/79/21167985309ef9075d3226e44318aa1b.jpg",
    },
    {
      id: 3,
      quote: "Fantastic experience from start to finish. Worth every penny.",
      name: "Mr. Bean",
      userImage: "https://i.pinimg.com/236x/9d/6b/2b/9d6b2b19aaa371fe3b98be04435a6300.jpg",
    },
    {
      id: 4,
      quote: "High-quality product with excellent support. Five stars!",
      name: "Perry ",
      userImage: "https://i.pinimg.com/736x/24/a6/9e/24a69e1fbd6eb4e8749a715fd1e63ef5.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full mx-auto my-10 px-4 ">

      <div className="carousel w-full">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <div className="w-full h-[400px] bg-[url('https://i.pinimg.com/1200x/de/72/53/de7253455fba99aac503e15e8830dc12.jpg')] bg-cover bg-fixed bg-center bg-no-repeat brightness-75  flex flex-col justify-center items-center text-gray-600 font-mono px-4 text-center">
              <Zoom>
                <blockquote className="text-xl md:text-3xl  font-semibold mb-4 max-w-2xl">
                  “{review.quote}”
                </blockquote>
              </Zoom>
              <Fade cascade>
                <div className="flex flex-col items-center">
                  <img
                    src={review.userImage}
                    alt={review.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white mb-2"
                  />
                  <h3 className="text-md md:text-xl font-bold font-mono">{review.name}</h3>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          href={`#slide${activeIndex === 0 ? reviews.length - 1 : activeIndex - 1}`}
          className="btn btn-circle bg-white hover:bg-gray-200 text-black"
        >
          ❮
        </a>
        <a
          href={`#slide${(activeIndex + 1) % reviews.length}`}
          className="btn btn-circle bg-white hover:bg-gray-200 text-black"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Review;
