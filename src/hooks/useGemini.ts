import { useState, useCallback } from 'react';
import { geminiService, GeminiResponse } from '../services/geminiService';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askQuestion = useCallback(async (question: string, context?: any): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      let response: GeminiResponse;
      
      if (context?.type === 'project') {
        response = await geminiService.askAboutProject(context.data, question);
      } else if (context?.type === 'skills') {
        response = await geminiService.askAboutSkills(question, context.data);
      } else {
        response = await geminiService.askAboutPortfolio(question, context?.data);
      }

      if (response.success && response.data) {
        return response.data;
      } else {
        setError(response.error || 'Failed to get response from Gemini');
        return null;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    askQuestion,
    loading,
    error,
    clearError: () => setError(null)
  };
};
