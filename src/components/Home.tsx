import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      role="region"
      aria-label="Home section"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white animate-[slideIn_1s_ease-in-out]">
          Makwara's Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Developer on a journey to become a Software Engineer.<br />
          Showcasing modern, responsive, and innovative web solutions.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
          From self-taught beginnings to building full stack applications with React, Node.js, and more—I'm passionate about solving real-world problems and growing as a developer every day.
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-amber-400 text-black font-bold rounded-lg shadow-md hover:bg-amber-500 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;