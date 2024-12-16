import React from 'react';
import { Plus, MessageSquare } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { ThemeToggle } from './ThemeToggle';

export const Sidebar: React.FC = () => {
  const { conversations, createNewChat, currentConversation, setCurrentConversation } = useChatStore();

  return (
    <div className="w-64 h-screen flex flex-col bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-700">
      <div className="p-4">
        <button
          onClick={createNewChat}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => setCurrentConversation(conversation.id)}
            className={`w-full flex items-center gap-2 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
              currentConversation?.id === conversation.id
                ? 'bg-gray-200 dark:bg-gray-700'
                : ''
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="truncate">{conversation.title}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border-t dark:border-gray-700">
        <ThemeToggle />
      </div>
    </div>
  );
};