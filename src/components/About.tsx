import React from 'react';
import RoboHuman from '../images/RoboHuman.jpg'; // Adjust the path to your image file

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src={RoboHuman} 
            alt="About Us" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            We are a forward-thinking team of developers and innovators driven by a passion for building inclusive, tech-powered solutions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Whether it's improving student recruitment, enabling smart urban farming, or designing scalable admin dashboards, we aim to create impact where it matters most—bridging gaps and building for the future.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our vision is rooted in accessibility, community growth, and embracing the power of full-stack development to solve real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
