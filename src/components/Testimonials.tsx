import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Chay demonstrates strong leadership, initiative, and technical ability. Her work on the Hybrid Demo Monday platform has created valuable opportunities for student collaboration.",
      author: "Kwanele Mazibuko",
      role: "Founder of Singawe Innovative, KZN",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Working with Chay on the USAs competition was incredible. Her technical skills and team leadership were key to our first-place victory. She's a natural problem-solver.",
      author: "Nkosinathi Zulu",
      role: "Player, USSAs Competition Winner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Chay's mentorship at DUT Labs has been invaluable. She has a unique ability to explain complex concepts in simple terms and always encourages us to think creatively.",
      author: "Aisha Patel",
      role: "Student, DUT Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "As basketball team manager, Chay showed exceptional organizational skills and team spirit. She brings the same dedication and leadership to her tech projects.",
      author: "Ayajabula Mthethwa",
      role: "Female Basketball Team Captain, DUT",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      quote: "Chay's innovative approach to the JCI Hackathon solution impressed all the judges. She combines technical excellence with practical problem-solving skills.",
      author: "Lisa Rodriguez",
      role: "Judge, JCI Hackathon",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      quote: "Chay is not just a talented developer, but also a community builder. Her work creating platforms for student innovation has had a lasting impact on our university.",
      author: "Mr Fanie Ndlovu",
      role: "ARM Mentor, DUT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What People Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and collaborators who have worked with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300">Competition Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Work Together?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how we can collaborate on your next project or initiative.
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

export default Testimonials;
