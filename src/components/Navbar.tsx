import React, { useState } from 'react';
// Update the path and filename below to match your actual logo image location and name
// import Logo from '../images/logo.png'; // Example: adjust as needed

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors duration-300">
            {/* <img
              src={Logo}
              alt="C. Makwara brand logo"
              className="w-12 h-12 object-contain"
              loading="lazy"
            /> */}
            C. Makwara
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:text-amber-400 dark:hover:text-amber-300 transition-colors duration-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>

            <button 
              className="md:hidden text-gray-900 dark:text-white hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {['Home', 'About', 'Services', 'Timeline', 'Journey', 'Aspirations', 'Projects', 'Reflections', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-all duration-300 hover:scale-110 inline-block dark:hover:text-amber-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>



        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <ul className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Timeline', 'Journey', 'Aspirations', 'Projects', 'Reflections', 'Features', 'Pricing', 'NewsTicker', 'Contact'].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-amber-400 transition-colors duration-300 hover:pl-2 dark:hover:text-amber-300"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="w-full text-left p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:text-amber-400 dark:hover:text-amber-300 transition-colors duration-300"
              >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
              </button>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;