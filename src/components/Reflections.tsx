import React from 'react';

const Reflections = () => (
  <section id="reflections" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300" role="region" aria-label="Reflections and Blog">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Reflections & Blog</h2>
      <article className="mb-8 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 border border-amber-200 dark:border-amber-700">
        <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Overcoming Imposter Syndrome</h3>
        <p className="text-gray-700 dark:text-gray-300">Starting out, I often doubted my abilities. By building projects, seeking feedback, and learning from mistakes, I grew more confident in my skills as a developer.</p>
      </article>
      <article className="mb-8 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 border border-amber-200 dark:border-amber-700">
        <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Lessons from Collaboration</h3>
        <p className="text-gray-700 dark:text-gray-300">Working with others taught me the value of communication, code reviews, and embracing different perspectives to solve problems more effectively.</p>
      </article>
      <article className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 border border-amber-200 dark:border-amber-700">
        <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Looking Ahead</h3>
        <p className="text-gray-700 dark:text-gray-300">I aspire to contribute to impactful projects, mentor others, and continuously improve as a software engineer. Every challenge is an opportunity to grow.</p>
      </article>
    </div>
  </section>
);

export default Reflections;
