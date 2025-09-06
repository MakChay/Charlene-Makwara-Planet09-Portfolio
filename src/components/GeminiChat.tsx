import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaComments } from 'react-icons/fa';
import { useGemini } from '../hooks/useGemini';

interface GeminiChatProps {
  projectData?: unknown;
  contextType?: 'project' | 'skills' | 'portfolio';
}

const GeminiChat: React.FC<GeminiChatProps> = ({ projectData, contextType = 'portfolio' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const { askQuestion, loading, error, clearError } = useGemini();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;
  setChatHistory((prev: { role: 'user' | 'bot'; text: string }[]) => [...prev, { role: 'user', text: question }]);
    const context = contextType === 'project' && projectData 
      ? { type: 'project', data: projectData }
      : contextType === 'skills'
      ? { type: 'skills', data: projectData }
      : { type: 'portfolio', data: projectData };
    const answer = await askQuestion(question, context);
    if (answer) {
  setChatHistory((prev: { role: 'user' | 'bot'; text: string }[]) => [...prev, { role: 'bot', text: answer }]);
    }
    setQuestion('');
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

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
          <div className="p-4 max-h-80 overflow-y-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col h-72 max-h-72">
              <div className="flex-1 overflow-y-auto mb-2 pr-1">
                {chatHistory.length === 0 && (
                  <div className="text-gray-400 text-center mt-8">Start the conversation by asking a question!</div>
                )}
                {chatHistory.map((msg: { role: 'user' | 'bot'; text: string }, idx: number) => (
                  <div key={idx} className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-amber-100 dark:bg-amber-600 text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              {error && (
                <div className="mb-2 p-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  <p className="text-sm">{error}</p>
                  <button
                    onClick={clearError}
                    className="mt-2 text-xs underline hover:no-underline"
                  >
                    Clear Error
                  </button>
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={`Ask about ${contextType === 'project' ? 'this project' : 'my work, skills, or experience'}...`}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                  className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {loading ? '...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;
