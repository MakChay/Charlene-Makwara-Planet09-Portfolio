import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Hi, I'm Charlene – Student-Tech Athlete",
      description: "Bridging the gap between athletics and technology as a basketball team manager & web developer.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1920&h=1080"
    },
    {
      title: "Volunteer Web Developer",
      description: "Building digital solutions for Singawe Innovative while managing DUT Basketball Team.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=1920&h=1080"
    },
    {
      title: "Leadership Through Service",
      description: "Combining athletic discipline with technical skills to create meaningful community impact.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920&h=1080"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            {/* Animated title with bounce effect */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white opacity-0 animate-[bounceIn_1s_ease-out_forwards]">
              {slides[currentSlide].title}
            </h1>

            {/* Animated description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-[slideUp_1s_ease-in_0.5s_forwards]">
              {slides[currentSlide].description}
            </p>

            {/* Buttons with bounce effect on hover */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="bg-amber-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-400 text-center"
                aria-label="View My Work"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-lg shadow-md hover:bg-amber-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-center"
                aria-label="Contact Me"
              >
                Contact Me
              </a>
              <a
                href="/Charlene_Makwara_Resume.pdf"
                download="Charlene_Makwara_Resume.pdf"
                className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-center"
                aria-label="Download Resume"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide
                      ? 'bg-amber-400 w-6'
                      : 'bg-gray-400 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;