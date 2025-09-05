import React from 'react';

const UniqueValue = () => {
  const uniqueAspects = [
    {
      title: "Athletic Discipline",
      description: "Basketball has taught me discipline, time management, and the ability to perform under pressure – skills that directly enhance my coding performance.",
      icon: "🏀",
      benefits: ["Time Management", "Pressure Performance", "Team Collaboration", "Goal Setting"]
    },
    {
      title: "Volunteer Leadership",
      description: "Managing a basketball team while volunteering as a web developer has developed my leadership, communication, and project management skills.",
      icon: "🤝",
      benefits: ["Team Management", "Communication", "Project Leadership", "Community Impact"]
    },
    {
      title: "Technical Excellence",
      description: "My volunteer work at Singawe Innovative allows me to apply cutting-edge technologies while contributing to meaningful community projects.",
      icon: "💻",
      benefits: ["Real-world Experience", "Community Impact", "Technical Innovation", "Problem Solving"]
    },
    {
      title: "Student Perspective",
      description: "As a current student, I bring fresh perspectives, up-to-date knowledge, and the energy to tackle complex challenges with innovative solutions.",
      icon: "🎓",
      benefits: ["Fresh Perspectives", "Current Knowledge", "Innovation", "Adaptability"]
    }
  ];

  const competitiveAdvantages = [
    "Unique combination of athletic leadership and technical skills",
    "Proven ability to manage multiple responsibilities effectively",
    "Volunteer experience shows genuine passion for community impact",
    "Student-athlete discipline translates to professional excellence",
    "Fresh perspective from current academic and athletic involvement"
  ];

  return (
    <section id="unique-value" className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 dark:from-blue-900/20 dark:to-amber-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Makes Me Stand Out</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm not just another developer – I'm a <strong>Student-Tech Athlete</strong> who brings a unique combination of 
            athletic discipline, volunteer leadership, and technical excellence to every project.
          </p>
        </div>

        {/* Unique Aspects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {uniqueAspects.map((aspect, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">{aspect.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{aspect.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{aspect.description}</p>
              <div className="space-y-2">
                {aspect.benefits.map((benefit, benefitIndex) => (
                  <span key={benefitIndex} className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium mr-1 mb-1">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Competitive Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why Choose a Student-Tech Athlete?</h4>
              <ul className="space-y-3">
                {competitiveAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-blue-50 dark:from-amber-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The Athlete-Developer Advantage</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The same discipline that helps me excel on the basketball court drives my commitment to code quality, 
                project deadlines, and team collaboration. I bring the resilience and teamwork of an athlete to every 
                technical challenge."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                - Charlene Makwara, Student-Tech Athlete
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-500 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-300">Volunteer Roles</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Basketball + Singawe</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Commitment</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Volunteer & Academic</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-500 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Balance</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Athletics & Tech</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-500 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-300">Potential</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Unique Perspective</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Work with a Student-Tech Athlete?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how my unique combination of athletic discipline, volunteer experience, and technical skills can benefit your project.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniqueValue;
