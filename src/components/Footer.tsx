import React from 'react';
import Logo from '../images/Chay\'s logo.jpg'; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Branding Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img 
                src={Logo} 
                alt="Chay's Logo" 
                className="w-12 h-12 object-contain" 
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors duration-300">
                C. Makwara
              </h3>
            </div>
            <p className="mb-4">
              A web developer and mentor dedicated to crafting exceptional digital experiences. Whilst mentoring aspiring developers and contributing to the tech community.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4">Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Services</a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Timeline</a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Journey</a>
                </li>
                
                <li>
                  <a href="#projects" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Projects</a>
                </li>
              
                <li>
                  <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Contact</a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#pricing" className="hover:text-amber-400 transition-all duration-300 hover:scale-110 inline-block dark:hover:text-amber-300">
                    Pricing
                  </a>
                </li>
                
                <li>
                  <a href="#blogs" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Blog</a>
                </li>
                <li>
                  <a href="#support" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Support</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <address className="not-italic space-y-2">
              <p>8 Winterton Road</p>
              <p>Ritson, Durban 4001</p>
              <p className="mt-2">makwarac@yahoo.com</p>
              <p>(078) 176-9558</p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="hover:text-amber-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()} C. Makwara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;