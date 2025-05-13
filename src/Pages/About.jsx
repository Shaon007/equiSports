import React from "react";

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600181954569-1edaa1497c8f')" }}>
        <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Passion for Sports. Dedication to Quality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Founded in 2020, our mission has always been simple: to empower athletes of every level with high-quality, affordable, and reliable sports gear. From our humble beginnings in a small warehouse to serving thousands of happy customers, we've stayed committed to our values of performance, trust, and innovation.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1613417094445-bd47f54f08a3" alt="Mission" className="rounded-xl shadow-md w-full h-[350px] object-cover" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We aim to redefine your shopping experience by offering cutting-edge sports equipment and gear. Whether you're a beginner or a pro athlete, we believe that everyone deserves the best tools to excel, stay safe, and enjoy their sport.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Alex", "Jordan", "Sam", "Taylor"].map((name, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-gray-500">Gear Specialist</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-lg mb-6">Be part of a community that moves the world—one step, run, and lift at a time.</p>
        <button className="bg-white text-indigo-600 px-6 py-2 font-semibold rounded-full hover:bg-gray-100 transition">Shop Now</button>
      </section>
    </div>
  );
};

export default About;
