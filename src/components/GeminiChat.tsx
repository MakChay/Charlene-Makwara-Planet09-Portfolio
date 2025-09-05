import React, { useState } from 'react';
import { useGemini } from '../hooks/useGemini';

interface GeminiChatProps {
  projectData?: any;
  contextType?: 'project' | 'skills' | 'portfolio';
}

const GeminiChat: React.FC<GeminiChatProps> = ({ projectData, contextType = 'portfolio' }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const { askQuestion, loading, error, clearError } = useGemini();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const context = contextType === 'project' && projectData 
      ? { type: 'project', data: projectData }
      : contextType === 'skills'
      ? { type: 'skills', data: projectData }
      : { type: 'portfolio', data: projectData };

    const answer = await askQuestion(question, context);
    if (answer) {
      setResponse(answer);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Ask About {contextType === 'project' ? 'This Project' : 'My Portfolio'}
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
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
            {loading ? 'Asking...' : 'Ask'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
          <p className="text-sm">{error}</p>
          <button
            onClick={clearError}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Clear Error
          </button>
        </div>
      )}

      {response && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response:</h4>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
