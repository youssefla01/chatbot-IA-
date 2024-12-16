import React from 'react';
import { User, MessageSquare } from 'lucide-react';
import type { Message } from '../types';
import { cn } from '../utils/cn';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-4 p-4',
        isUser ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
      )}
    >
      <div className="flex-shrink-0">
        {isUser ? (
          <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        ) : (
          <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-900 dark:text-gray-100">{message.content}</p>
      </div>
    </div>
  );
};