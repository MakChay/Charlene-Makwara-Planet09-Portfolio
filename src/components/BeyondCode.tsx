import React from 'react';

const BeyondCode = () => {
  const personalInterests = [
    {
      title: "Volunteer Basketball Management",
      description: "As a volunteer student manager for DUT Basketball Team, I've learned leadership, strategy, and team dynamics that directly apply to software development.",
      icon: "🏀",
      details: "Volunteer Team Manager since 2023, organizing practices, coordinating games, and leading team to victory."
    },
    {
      title: "Volunteer Web Development",
      description: "Contributing my technical skills as a volunteer web developer at Singawe Innovative, building solutions for community impact.",
      icon: "💻",
      details: "Volunteer developer since 2024, applying technical skills to meaningful community projects."
    },
    {
      title: "Student-Athlete Balance",
      description: "Successfully balancing academic studies, athletic commitments, and volunteer work while maintaining excellence in all areas.",
      icon: "⚖️",
      details: "Demonstrating time management, discipline, and multi-tasking abilities across diverse responsibilities."
    },
    {
      title: "Community Innovation",
      description: "Creating platforms like Hybrid Demo Monday for students to showcase innovation and collaborate across disciplines.",
      icon: "💡",
      details: "Hosted monthly innovation showcases, connecting students from different faculties and backgrounds."
    }
  ];

  const funFacts = [
    "I'm a volunteer student manager for DUT Basketball Team",
    "I volunteer as a web developer at Singawe Innovative",
    "I balance coding, basketball, and studies simultaneously",
    "I believe athletic discipline makes me a better developer",
    "I'm passionate about using tech skills for community impact"
  ];

  return (
    <section id="beyond-code" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Beyond the Code</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            When I'm not coding, I'm managing a basketball team, mentoring peers, or exploring community projects.
          </p>
        </div>

        {/* Personal Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {personalInterests.map((interest, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{interest.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{interest.description}</p>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{interest.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-center">
                <span className="text-amber-500 mr-3">✨</span>
                <p className="text-gray-700 dark:text-gray-200">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What Drives Me as a Student-Tech Athlete</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-4">🏀</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Athletic Discipline</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The discipline and teamwork I learn on the basketball court directly translates to my coding projects and volunteer work.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Volunteer Impact</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Using my technical skills to give back through volunteer work at Singawe Innovative and community initiatives.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Balanced Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Maintaining excellence in academics, athletics, and volunteer work while developing technical skills.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Whether you want to discuss technology, collaborate on a project, or just chat about basketball, I'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;