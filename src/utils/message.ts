import type { Message } from '../types';

interface CreateMessageParams {
  content: string;
  role: 'user' | 'assistant';
}

const CODE_BLOCK_REGEX = /```(\w+)?\n([\s\S]*?)```/g;

export const parseMessageContent = (content: string) => {
  const parts: Array<{ type: 'text' | 'code'; content: string; language?: string }> = [];
  let lastIndex = 0;

  content.replace(CODE_BLOCK_REGEX, (match, language, code, index) => {
    // Ajouter le texte avant le bloc de code
    if (index > lastIndex) {
      parts.push({
        type: 'text',
        content: content.slice(lastIndex, index),
      });
    }

    // Ajouter le bloc de code
    parts.push({
      type: 'code',
      content: code.trim(),
      language: language || 'plaintext',
    });

    lastIndex = index + match.length;
    return match;
  });

  // Ajouter le reste du texte après le dernier bloc de code
  if (lastIndex < content.length) {
    parts.push({
      type: 'text',
      content: content.slice(lastIndex),
    });
  }

  return parts.length > 0 ? parts : [{ type: 'text', content }];
};

export const createMessage = ({ content, role }: CreateMessageParams): Message => ({
  id: Date.now().toString(),
  content,
  role,
  timestamp: Date.now(),
});