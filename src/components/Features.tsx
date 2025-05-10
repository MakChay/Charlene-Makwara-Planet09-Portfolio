import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that looks great on all devices from mobile to desktop.'
    },
    {
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, and Tailwind CSS for a modern development experience.'
    },
    {
      title: 'Easy Customization',
      description: 'Simple to customize with Tailwind utility classes and component-based architecture.'
    },
    {
      title: 'Dark Mode Support',
      description: 'Seamless dark mode support for better accessibility and user preference handling.'
    }
    
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Key Features
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-400"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 bg-amber-400 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;