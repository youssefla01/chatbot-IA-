import React from 'react';
import { User, Bot } from 'lucide-react';
import type { Message } from '../../types';
import { cn } from '../../utils/cn';
import { parseMessageContent } from '../../utils/message';
import { CodeBlock } from './CodeBlock';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const contentParts = parseMessageContent(message.content);

  return (
    <div
      className={cn(
        'px-2 py-4 sm:px-4 sm:py-6 transition-colors',
        isUser ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
      )}
    >
      <div className="max-w-4xl mx-auto flex gap-3 sm:gap-6">
        <div className="flex-shrink-0">
          <div className={cn(
            'w-8 h-8 rounded-lg flex items-center justify-center',
            isUser 
              ? 'bg-gray-200 dark:bg-gray-700' 
              : 'bg-blue-600'
          )}>
            {isUser ? (
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
          </div>
        </div>
        <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {isUser ? 'Vous' : 'Assistant'}
          </p>
          <div className="prose dark:prose-invert max-w-none text-sm sm:text-base space-y-4">
            {contentParts.map((part, index) => (
              part.type === 'code' ? (
                <CodeBlock
                  key={index}
                  code={part.content}
                  language={part.language}
                />
              ) : (
                <p key={index}>{part.content}</p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};