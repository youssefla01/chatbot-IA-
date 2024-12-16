import React from 'react';
import { X } from 'lucide-react';
import { ConversationList } from './ConversationList';
import { NewChatButton } from './NewChatButton';
import { ThemeToggle } from '../ThemeToggle';
import { UserMenu } from './UserMenu';

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-700">
      <div className="p-4 flex items-center justify-between">
        <NewChatButton />
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <ConversationList />

      <div className="mt-auto border-t dark:border-gray-700">
        <UserMenu />
        <div className="p-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};