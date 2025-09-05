import React from 'react';
import RoboHuman from '../images/Makwara.jpg'; // Adjust the path to your image file

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300" role="region" aria-label="About section">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={RoboHuman}
            alt="About Charlene Makwara, developer portrait"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Charlene Makwara (Chay)
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          A passionate Web & Software Developer with a love for creating clean, functional, and engaging digital experiences. My journey in tech blends frontend creativity with a growing mastery of backend development, allowing me to build projects that are both visually appealing and technically sound.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I’m driven by curiosity and the belief that technology can be a powerful tool for empowerment and problem-solving. Beyond coding, I’m an active community volunteer and 4IR enthusiast, dedicated to sharing knowledge, uplifting others, and driving positive change.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          When I’m not immersed in code, you’ll find me working on personal projects, contributing to community initiatives, or learning new tools and technologies to sharpen my craft. I aim to grow into a full-stack developer who builds solutions that matter not just for today, but for the future.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
