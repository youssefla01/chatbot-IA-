import { useState } from 'react';
import { OpenAIService } from '../services/openai';
import type { Message } from '../types';

export const useOpenAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (messages: Message[]): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const openai = OpenAIService.getInstance();
      const response = await openai.sendMessage(messages);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading,
    error,
  };
};