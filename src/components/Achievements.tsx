const Achievements = () => {
  const achievements = [
    {
      title: "1st Place – USSAs Competition",
      description: "Managed my University Basketball Team to victory in the University Students Association competition                                                                                                                                                             ",
      icon: "🏆",
      date: "2025",
      category: "Competition"
    },
    {
      title: "3rd Place – JCI Hackathon",
      description: "Developed innovative solution in Junior Chamber International hackathon hosted at Dut in May",
      icon: "🥉",
      date: "2025",
      category: "Hackathon"
    },
    {
      title: "Volunteer Team Manager – DUT Basketball",
      description: "Volunteer student manager and player for the Durban University of Technology basketball team, leading team to victory",
      icon: "🏀",
      date: "2023-2025",
      category: "Volunteer Leadership"
    },
    {
      title: "Host – Hybrid Demo Monday",
      description: "Created platform for DUT students to showcase innovation and collaboration",
      icon: "🎤",
      date: "2025",
      category: "Community"
    },
    {
      title: "Volunteer Web Developer – Singawe Innovative",
      description: "Volunteer web developer contributing technical skills to innovative projects and community initiatives",
      icon: "💻",
      date: "2024-2025",
      category: "Volunteer Tech"
    },
    {
      title: "Mentor – DUT Labs",
      description: "Provided guidance on technical and academic projects for peers",
      icon: "💡",
      date: "2024-2025",
      category: "Mentorship"
    },
    {
      title: "Bachelor of ICT Student",
      description: "Pursuing Information Communication and Technology degree at DUT",
      icon: "🎓",
      date: "2023-2025",
      category: "Education"
    }
  ];


  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Achievements & Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlights from my journey in technology, leadership, and community impact
          </p>
        </div>

        {/* Timeline View */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-400"></div>
            
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                        <span className="text-sm text-amber-500 font-medium">{achievement.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{achievement.description}</p>
                    <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid View for Mobile */}
        <div className="md:hidden mt-8">
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                    <span className="text-sm text-amber-500 font-medium">{achievement.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                  {achievement.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">7+</div>
            <div className="text-gray-600 dark:text-gray-300">Major Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-300">Volunteer Roles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Volunteer Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
