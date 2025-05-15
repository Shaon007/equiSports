import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-stone-300 dark:bg-gray-600 font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/8c/a4/9c/8ca49c05b8e09c100ca7c895d620089e.jpg')",
        }}
      >
        <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-0"></div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-mono font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl max-w-2xl font-mono mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Passion for Sports. Dedication to Quality.
          </motion.p>
        </div>
      </section>


      {/* Story Section */}
      <section className="mt-16 relative bg-fixed bg-center bg-cover bg-no-repeat py-28 px-6" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/0f/bd/19/0fbd19703f0798a28626cd2d8d762d5a.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">Our Journey</h2>
          <p className="text-sm md:text-lg leading-relaxed font-mono max-w-3xl mx-auto">
            Founded in 2020, our mission has always been simple: to empower athletes of every level with high-quality, affordable, and reliable sports gear. From our humble beginnings in a small warehouse to serving thousands of happy customers, we've stayed committed to our values of performance, trust, and innovation.
          </p>
        </div>
      </section>


      {/* Mission Section */}
      <section className="bg-gray-100 dark:bg-gray-700 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="https://i.pinimg.com/1200x/47/fd/8e/47fd8ea0dfe65476e664beeffc2cda71.jpg" alt="Mission" className="rounded-xl shadow-md w-full h-[350px] object-cover" />
          <div>
            <h3 className="text-3xl font-bold dark:text-gray-100 font-mono mb-4">Our Mission</h3>
            <p className="text-gray-600 font-mono dark:text-gray-100 text-lg leading-relaxed">
              We aim to redefine your shopping experience by offering cutting-edge sports equipment and gear. Whether you're a beginner or a pro athlete, we believe that everyone deserves the best tools to excel, stay safe, and enjoy their sport.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section
  className="relative bg-fixed bg-center bg-cover bg-no-repeat py-28 px-6"
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/0f/bd/19/0fbd19703f0798a28626cd2d8d762d5a.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto text-center text-white z-10">
    <h2 className="text-3xl font-bold font-mono mb-10">Meet the Team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {["Alex", "Jordan", "Sam", "Taylor"].map((name, index) => (
        <div key={index} className="bg-white text-gray-800 shadow-lg rounded-lg p-4 bg-opacity-90">
          <img
            src={`https://i.pravatar.cc/150?img=${index + 10}`}
            alt={name}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h4 className="text-xl font-mono font-semibold">{name}</h4>
          <p className="text-gray-500 font-mono">Gear Specialist</p>
        </div>
      ))}
    </div>
  </div>
</section>



    </div>
  );
};

export default About;
