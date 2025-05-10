import React from 'react';
import { FaCode, FaPaintBrush, FaSearch } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive, and scalable web applications tailored to your needs.',
      icon: <FaCode className="text-amber-400 text-4xl mb-4" />
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces for a seamless experience.',
      icon: <FaPaintBrush className="text-amber-400 text-4xl mb-4" />
    },
    {
      title: 'SEO Optimization',
      description: 'Improving your website’s visibility and ranking on search engines.',
      icon: <FaSearch className="text-amber-400 text-4xl mb-4" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;