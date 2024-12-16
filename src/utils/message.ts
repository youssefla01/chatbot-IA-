import type { Message } from '../types';

interface CreateMessageParams {
  content: string;
  role: 'user' | 'assistant';
}

export const createMessage = ({ content, role }: CreateMessageParams): Message => ({
  id: Date.now().toString(),
  content,
  role,
  timestamp: Date.now(),
});