import React from 'react';
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

  return (
    <div className="w-full mx-auto my-10 px-4">
      <div className="carousel w-full">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            id={`slide${review.id}`}
            className="carousel-item relative w-full"
          >
            {/* Static Background Color */}
            <div className="w-full h-[400px] bg-gray-800 flex flex-col justify-center items-center text-white px-4 text-center">
              <Zoom>
                <blockquote className="text-2xl md:text-3xl font-semibold mb-4 max-w-2xl">
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
                  <h3 className="text-lg md:text-xl font-bold">{review.name}</h3>
                </div>
              </Fade>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${review.id === 1 ? reviews.length : review.id - 1}`}
                className="btn btn-circle bg-white hover:bg-gray-200 text-black"
              >
                ❮
              </a>
              <a
                href={`#slide${review.id === reviews.length ? 1 : review.id + 1}`}
                className="btn btn-circle bg-white hover:bg-gray-200 text-black"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
