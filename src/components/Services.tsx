import React from 'react';
import { FaCode, FaPaintBrush, FaMobile, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive, and scalable web applications using React, TypeScript, Python, and C#.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Responsive Design'],
      icon: <FaCode className="text-amber-400 text-4xl mb-4" />,
      price: 'From $500'
    },
    {
      title: 'App Prototyping',
      description: 'Creating interactive prototypes and MVPs to validate your ideas before full development.',
      features: ['UI/UX Prototyping', 'User Testing', 'Technical Feasibility', 'MVP Development'],
      icon: <FaMobile className="text-amber-400 text-4xl mb-4" />,
      price: 'From $300'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces for optimal user experience.',
      features: ['User Research', 'Wireframing', 'Visual Design', 'Design Systems'],
      icon: <FaPaintBrush className="text-amber-400 text-4xl mb-4" />,
      price: 'From $200'
    },
    {
      title: 'Tech Mentorship',
      description: 'Providing guidance and support for students and professionals learning web development.',
      features: ['1-on-1 Sessions', 'Code Reviews', 'Career Guidance', 'Project Support'],
      icon: <FaGraduationCap className="text-amber-400 text-4xl mb-4" />,
      price: '$50/hour'
    },
    {
      title: 'Team Training',
      description: 'Conducting workshops and training sessions for teams on modern web technologies.',
      features: ['Group Workshops', 'Technology Training', 'Best Practices', 'Team Building'],
      icon: <FaUsers className="text-amber-400 text-4xl mb-4" />,
      price: 'From $800'
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to help businesses make informed decisions.',
      features: ['Technology Strategy', 'Architecture Review', 'Process Improvement', 'Digital Transformation'],
      icon: <FaRocket className="text-amber-400 text-4xl mb-4" />,
      price: '$100/hour'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" role="region" aria-label="Services section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Services & Freelance Offerings
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional services to help you build, design, and scale your digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-amber-400"
            >
              <div className="text-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-amber-600 dark:text-amber-400 font-bold">{service.price}</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">What's Included:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="text-amber-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full px-4 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Discovery</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Understanding your needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Planning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Creating a detailed project roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Building with regular updates and feedback</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Launch</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Deployment and ongoing support</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Start Your Project?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how I can help bring your ideas to life with professional development and design services.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;