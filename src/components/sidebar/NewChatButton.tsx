import React from 'react';
import { Plus } from 'lucide-react';
import { useChatStore } from '../../store/chat/useChatStore';

export const NewChatButton: React.FC = () => {
  const { createNewChat } = useChatStore();

  return (
    <button
      onClick={createNewChat}
      className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      <Plus className="w-5 h-5" />
      <span className="font-medium">Nouvelle Conversation</span>
    </button>
  );
};