import RoboHuman from '../images/Makwara.jpg'; // Adjust the path to your image file

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300" role="region" aria-label="About section">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={RoboHuman}
            alt="About Charlene Makwara, developer portrait"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Hi, I'm <strong>Charlene (Chay) Makwara</strong>, a unique <strong>Student-Tech Athlete</strong> pursuing a <strong>Bachelor of Information Communication and Technology</strong> at the Durban University of Technology. I'm not your typical developer – I'm a <strong>volunteer student manager for the DUT Basketball Team</strong> and a <strong>volunteer web developer at Singawe Innovative</strong>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            What makes me unique is my ability to <strong>bridge athletics and technology</strong>. As a basketball team manager, I've learned discipline, teamwork, and leadership under pressure – skills that directly translate to my technical work. My volunteer role at <strong>Singawe Innovative</strong> allows me to apply my technical skills in <strong>Python, C#, TypeScript, and web development</strong> to real-world problems while giving back to the community.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            This unique combination has led to remarkable achievements: <strong>1st place in the USSAs competition</strong> (managing my basketball team to victory), <strong>3rd place at the JCI Hackathon</strong>, and creating <strong>Hybrid Demo Monday</strong> – a platform for DUT students to showcase innovation. I also mentor peers at <strong>DUT Labs</strong>, sharing both my technical expertise and athletic leadership experience.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My goal is to continue leveraging this unique <strong>athlete-developer perspective</strong> to create solutions that combine technical excellence with the discipline, teamwork, and resilience learned through competitive sports.
          </p>

          {/* Unique Value Proposition */}
          <div className="bg-gradient-to-r from-amber-50 to-blue-50 dark:from-amber-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What Makes Me Unique</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏀</span>
                <span className="text-gray-700 dark:text-gray-300">Volunteer Basketball Team Manager</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💻</span>
                <span className="text-gray-700 dark:text-gray-300">Volunteer Web Developer at Singawe</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                <span className="text-gray-700 dark:text-gray-300">Student-Tech Athlete Balance</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Leadership Under Pressure</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                "The discipline and teamwork I learn on the basketball court directly translates to my coding projects. 
                Managing a team under pressure has taught me resilience and problem-solving skills that make me a better developer."
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300 text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-colors duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
