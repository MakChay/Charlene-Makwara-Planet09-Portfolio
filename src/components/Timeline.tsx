import React from 'react';

const Timeline = () => (
  <section id="timeline" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" role="region" aria-label="Skills Timeline">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Skills Timeline</h2>
      <ol className="relative border-l border-amber-400">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
            <span className="text-white font-bold">1</span>
          </span>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">2022: Started with HTML & CSS</h3>
          <p className="text-gray-600 dark:text-gray-300">Built my first static web pages and learned the basics of web structure and styling.</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
            <span className="text-white font-bold">2</span>
          </span>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">2023: JavaScript & React</h3>
          <p className="text-gray-600 dark:text-gray-300">Dove into JavaScript and built interactive UIs with React. Completed several personal and collaborative projects.</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
            <span className="text-white font-bold">3</span>
          </span>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">2024: Backend & Full Stack</h3>
          <p className="text-gray-600 dark:text-gray-300">Learned Node.js, Express, and databases. Built full stack applications and deployed them online.</p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
            <span className="text-white font-bold">4</span>
          </span>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">2025: Aspiring Software Engineer</h3>
          <p className="text-gray-600 dark:text-gray-300">Currently focused on advanced software engineering concepts, best practices, and contributing to open source.</p>
        </li>
      </ol>
    </div>
  </section>
);

export default Timeline;
