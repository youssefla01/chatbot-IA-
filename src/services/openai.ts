import { env } from '../config/env';
import { OpenAI } from 'openai';
import type { Message } from '../types';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class OpenAIService {
  private static instance: OpenAIService;
  private readonly apiKey: string;
  private readonly model: string;
  private readonly maxTokens: number;
  private openai: OpenAI;

  private constructor() {
    this.apiKey = env.OPENAI_API_KEY;
    this.model = env.OPENAI_MODEL || 'gpt-3.5-turbo';  // Remplace si besoin par le modèle que tu veux utiliser
    this.maxTokens = env.MAX_TOKENS || 1000;  // Utilise une valeur par défaut si non défini

    // Initialisation de l'instance OpenAI
    this.openai = new OpenAI({
      dangerouslyAllowBrowser: true,
      apiKey: this.apiKey,
      organization: env.OPENAI_ORG || '',
    });
  }

  public static getInstance(): OpenAIService {
    if (!OpenAIService.instance) {
      OpenAIService.instance = new OpenAIService();
    }
    return OpenAIService.instance;
  }

  private formatMessages(messages: Message[]): OpenAIMessage[] {
    return [
      {
        role: 'system',
        content: 'Tu es un assistant virtuel serviable et amical.',
      },
      ...messages.map(({ content, role }) => ({
        role,
        content,
      })),
    ];
  }

  public async sendMessage(messages: Message[]): Promise<string> {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const maxRetries = 3;
    let attempts = 0;
  
    while (attempts < maxRetries) {
      try {
        const response = await this.openai.chat.completions.create({
          model: this.model,
          messages: this.formatMessages(messages),
          max_tokens: this.maxTokens,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
  
        if (response.choices && response.choices.length > 0) {
          return response.choices[0].message.content ?? "";
        }
  
        throw new Error('No response choices returned from OpenAI API');
      } catch (error: any) {
        if (error.code === 429 && attempts < maxRetries) {
          // Attendre avant de réessayer
          console.log("Rate limit exceeded, retrying...");
          await delay(1000 * (attempts + 1));  // Attendre de plus en plus longtemps avant chaque tentative
          attempts++;
        } else {
          console.error('Error calling OpenAI API:', error);
          throw new Error("Échec de la communication avec l'API OpenAI");
        }
      }
    }
  
    throw new Error("Échec après plusieurs tentatives");
  }
  
}