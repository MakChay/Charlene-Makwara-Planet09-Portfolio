import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 }
      ],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "C#", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "Supabase", level: 65 }
      ],
      icon: "⚙️"
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Canva", level: 80 },
        { name: "Responsive Design", level: 85 }
      ],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Tech Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-amber-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Leadership', 'Mentorship', 'Team Collaboration', 'Problem-Solving', 'Communication', 'Project Management'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full font-medium hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
