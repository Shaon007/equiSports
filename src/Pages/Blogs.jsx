import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Blogs = () => {
  const handleModal = () => {
    Swal.fire({
      title: 'Not Available!',
      text: 'Coming Soon, Stay Connected',
      icon: 'error',
      confirmButtonText: 'Close',
    });
  };

  const blogData = [
    {
      id: 1,
      category: "Athletics",
      title: "Injury Prevention in Athletics",
      description:
        "Achieving your athletic goals requires consistent effort, dedication, and discipline. Here's how to prevent injuries and stay motivated...",
      img: "https://i.pinimg.com/736x/14/f8/19/14f819a148fbc3a2bf75c6773c012221.jpg",
    },
    {
      id: 2,
      category: "Fitness Tips",
      title: "Maximize Your Workout",
      description:
        "Discover essential tips to improve your workout routine and boost your performance in the gym or on the field.",
      img: "https://i.pinimg.com/736x/4c/f1/ac/4cf1ac099da48e8cae4f3c8b10e75f19.jpg",
    },
    {
      id: 3,
      category: "Sports Nutrition",
      title: "Fueling Your Body Right",
      description:
        "Learn what to eat and when to recover faster, train harder, and perform better.",
      img: "https://i.pinimg.com/736x/c6/d6/8f/c6d68f39f3a722cf7be10a3df04d61c8.jpg",
    },
    {
      id: 4,
      category: "Game Analysis",
      title: "Match Reviews & Insights",
      description:
        "Deep dive into recent match tactics, player performance breakdowns, and more.",
      img: "https://i.pinimg.com/736x/db/d7/0a/dbd70aaf2a672a592d698c8f3877f3c5.jpg",
    },
  ];

  return (
    <div className="w-full bg-stone-300">
      <div className="w-3/4 mx-auto p-6 pt-20 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <Link
            to="/"
            className=" bg-cyan-600 h-8 gap-2 flex items-center justify-center text-gray-100 p-3 font-semibold  rounded-lg hover:bg-gray-500 transition"
          >
            <FaArrowLeft />
            Home
          </Link>
          <h1 className="text-3xl font-mono font-bold text-gray-800 mb-4 md:mb-0">
            Explore Our Blog Articles
          </h1>

        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-green-600">{blog.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {blog.description}
                </p>
                <button
                  onClick={handleModal}
                  className="mt-2 inline-block px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Placeholder */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleModal}
            className="btn btn-active bg-gray-400 hover:bg-gray-500 text-white"
          >
            View All Blogs <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
