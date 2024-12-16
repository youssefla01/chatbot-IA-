import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatStore } from '../../store/chat/useChatStore';
import type { Conversation } from '../../types';
import { cn } from '../../utils/cn';

interface ConversationItemProps {
  conversation: Conversation;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({ conversation }) => {
  const { currentConversation, setCurrentConversation } = useChatStore();
  
  const isActive = currentConversation?.id === conversation.id;
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  
  return (
    <button
      onClick={() => setCurrentConversation(conversation.id)}
      className={cn(
        'w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        isActive && 'bg-gray-100 dark:bg-gray-800 shadow-sm'
      )}
    >
      <div className={cn(
        'w-10 h-10 rounded-lg flex items-center justify-center',
        isActive 
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
      )}>
        <MessageSquare className="w-5 h-5" />
      </div>
      <div className="flex-1 text-left min-w-0">
        <p className="font-medium truncate">{conversation.title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {lastMessage?.content || 'No messages yet'}
        </p>
      </div>
    </button>
  );
};