import React from 'react';
import { ChatMessageList } from './ChatMessageList';
import { ChatInput } from './ChatInput';
import { useChatStore } from '../../store/chat/useChatStore';
import { WelcomeScreen } from './WelcomeScreen';
import { Bot } from 'lucide-react';

export const ChatContainer: React.FC = () => {
  const { currentConversation, error } = useChatStore();

  if (!currentConversation) {
    return <WelcomeScreen />;
  }

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="border-b dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold">{currentConversation.title}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currentConversation.messages.length} messages
            </p>
          </div>
        </div>
      </div>
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 text-center">
          {error}
        </div>
      )}
      <ChatMessageList />
      <ChatInput />
    </div>
  );
};