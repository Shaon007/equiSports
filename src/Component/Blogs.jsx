import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Blogs = () => {
  const navigate = useNavigate();
  const handleModal = () => {
    Swal.fire({
      title: 'Not Available!',
      text: 'Comming Soon, Stay Connected',
      icon: 'error',
      confirmButtonText: 'Close',
    });
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
        {/* Main post */}
        <div className="mb-6 md:mb-0 p-4 lg:p-0 w-full md:w-2/3 relative rounded-lg shadow-lg bg-white">
          <img
            className="rounded-md object-cover w-full h-52 lg:h-64"
            src="https://i.pinimg.com/736x/14/f8/19/14f819a148fbc3a2bf75c6773c012221.jpg"
            alt=""
          />
          <div className="lg:w-11/12 mx-auto ">
            <span className="text-green-700 text-sm mt-4 block">Athletics</span>
            <h1 className="text-gray-800 text-3xl font-bold mt-2 mb-2 leading-tight ">
              Injury Prevention in Athletics
            </h1>
            <p className="md:text-sm lg:text-base text-gray-600 mb-2 lg:mb-4">
              Achieving your athletic goals requires consistent effort, dedication, and discipline. An often overlooked yet critical aspect of training is injury prevention. Injuries can set you back, disrupt your progress, and demotivate you. To keep moving forward without setbacks, here are some essential tips and...
            </p>
            <button onClick={() => navigate('/blogs')}
              className="inline-block px-6 py-3 mt-2 rounded-md bg-cyan-600 text-white font-semibold hover:bg-gray-500 transition duration-300"
            >
              Read more
            </button>
          </div>
        </div>

        {/* Sub-main posts */}
        <div className="w-full md:w-1/3 ">
          {/* Post 1 */}
          <div className="rounded bg-white w-full flex flex-col md:flex-row mb-8 shadow-md">
            <img
              src="https://i.pinimg.com/736x/4c/f1/ac/4cf1ac099da48e8cae4f3c8b10e75f19.jpg"
              className="block md:hidden object-cover lg:block rounded-md h-64 md:h-32 m-4 md:m-0 md:pl-4 py-4"
              alt=""
            />
            <div className="bg-white rounded px-4 pt-2 flex-1">
              <span className="text-green-700 text-sm">Fitness Tips</span>
              <div className="text-gray-800 font-semibold text-lg mb-2">
                Tips to Maximize Your Workout and Improve Performance
              </div>

            </div>
          </div>

          {/* Post 2 */}
          <div className="rounded bg-white w-full flex flex-col md:flex-row mb-8 shadow-md">
            <img
              src="https://i.pinimg.com/736x/c6/d6/8f/c6d68f39f3a722cf7be10a3df04d61c8.jpg"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 md:pl-4 py-4"
              alt=""
            />
            <div className="bg-white rounded px-4 pt-2  flex-1">
              <span className="text-green-700 text-sm">Sports Nutrition </span>
              <div className="text-gray-800 font-semibold text-lg mb-2">
                Fuel Your Body for Optimal Performance and Recovery
              </div>

            </div>
          </div>

          {/* Post 3 */}
          <div className="rounded bg-white w-full flex flex-col md:flex-row mb-8 shadow-md">
            <img
              src="https://i.pinimg.com/736x/db/d7/0a/dbd70aaf2a672a592d698c8f3877f3c5.jpg"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0 md:pl-4 py-4"
              alt=""
            />
            <div className="bg-white rounded px-4 pt-2 flex-1">
              <span className="text-green-700 text-sm">Game Analysis</span>
              <div className="text-gray-800 font-semibold text-lg mb-2">
                Detailed Reviews and Insights from the Latest Matches
              </div>

            </div>

          </div>
          <div>
            <button onClick={() => navigate('/blogs')} className="btn btn-active bg-cyan-600 text-white hover:bg-gray-500" >View all <FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
