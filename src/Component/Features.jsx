const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold font-mono text-gray-900 dark:text-white mb-8">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-300 dark:bg-gray-600 rounded-lg shadow hover:shadow-lg transition hover:scale-105 ">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-cyan-600  dark:text-cyan-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5 6v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m16-4V7a2 2 0 00-2-2H6a2 2 0 00-2 2v7"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Premium Quality</h3>
            <p className="text-gray-700 dark:text-white">
              We offer only the best sports gear built to last through every game and training session.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-300 dark:bg-gray-600 rounded-lg shadow hover:shadow-lg transition hover:scale-105 ">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-cyan-600  dark:text-cyan-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3 0 .341.065.664.182.96m6.636 2.236a2.997 2.997 0 002.182-2.182m.055-3.98A6.01 6.01 0 0112 18a6.01 6.01 0 01-7.35-4.347M9 13l3 3m0-3l-3 3"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast & Reliable Shipping</h3>
            <p className="text-gray-700 dark:text-white">
              Get your sports equipment delivered quickly and safely to your doorstep.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-300 dark:bg-gray-600 rounded-lg shadow hover:shadow-lg transition hover:scale-105 ">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-cyan-600 dark:text-cyan-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Hassle-Free Returns</h3>
            <p className="text-gray-700 dark:text-white">
              Not satisfied? Return your product easily within 30 days for a full refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
