import { GEMINI_CONFIG, createProjectPrompt, createPortfolioPrompt, createSkillsPrompt } from '../geminiPrompt';

export interface GeminiResponse {
  success: boolean;
  data?: string;
  error?: string;
}

export class GeminiService {
  private apiKey: string;
  private model: string;

  constructor() {
    this.apiKey = GEMINI_CONFIG.apiKey;
    this.model = GEMINI_CONFIG.model;
  }

  async generateResponse(prompt: string): Promise<GeminiResponse> {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: GEMINI_CONFIG.temperature,
            maxOutputTokens: GEMINI_CONFIG.maxTokens,
            topP: GEMINI_CONFIG.topP,
            topK: GEMINI_CONFIG.topK,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return {
          success: true,
          data: data.candidates[0].content.parts[0].text
        };
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async askAboutProject(projectData: any, question: string): Promise<GeminiResponse> {
    const prompt = createProjectPrompt(projectData, question);
    return this.generateResponse(prompt);
  }

  async askAboutPortfolio(question: string, portfolioData?: any): Promise<GeminiResponse> {
    const prompt = createPortfolioPrompt(question, portfolioData);
    return this.generateResponse(prompt);
  }

  async askAboutSkills(question: string, skillsData?: any): Promise<GeminiResponse> {
    const prompt = createSkillsPrompt(question, skillsData);
    return this.generateResponse(prompt);
  }
}

export const geminiService = new GeminiService();
