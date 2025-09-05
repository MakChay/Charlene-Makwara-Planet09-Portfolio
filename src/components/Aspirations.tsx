import React from 'react';

const Aspirations = () => (
  <section id="aspirations" className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" role="region" aria-label="Aspirations">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Aspirations</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        My journey as a full stack developer has been driven by curiosity and a passion for building solutions that make a difference. Looking ahead, I aspire to:
      </p>
      <ul className="list-disc list-inside text-left mx-auto max-w-xl text-gray-700 dark:text-gray-300 space-y-2">
        <li>Become a software engineer at a leading tech company</li>
        <li>Contribute to open source projects and the developer community</li>
        <li>Mentor and inspire others starting their tech journey</li>
        <li>Continuously learn new technologies and best practices</li>
        <li>Build products that have a positive impact on society</li>
      </ul>
    </div>
  </section>
);

export default Aspirations;
