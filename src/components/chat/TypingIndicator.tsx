import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => (
  <div className="px-4 py-6 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center animate-pulse">
          <Bot className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  </div>
);