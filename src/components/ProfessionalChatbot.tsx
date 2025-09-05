// src/components/ProfessionalChatbot.tsx
import React, { useState } from 'react';
import { FaRobot, FaTimes, FaComments } from 'react-icons/fa';
import GeminiChat from './GeminiChat';

const ProfessionalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-300 group"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaRobot className="w-6 h-6" />
        )}
        
        {/* Hover effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-t-lg">
            <div className="flex items-center space-x-2">
              <FaComments className="w-5 h-5" />
              <h3 className="text-lg font-semibold">
                Ask About My Work
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4">
            <GeminiChat contextType="portfolio" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalChatbot;