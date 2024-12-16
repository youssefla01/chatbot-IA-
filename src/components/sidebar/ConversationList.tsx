import React from 'react';
import { useChatStore } from '../../store/chat/useChatStore';
import { ConversationItem } from './ConversationItem';

export const ConversationList: React.FC = () => {
  const { conversations } = useChatStore();

  return (
    <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
        />
      ))}
      {conversations.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4">
          No conversations yet
        </div>
      )}
    </div>
  );
};