import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '../sidebar/Sidebar';
import { ChatContainer } from '../chat/ChatContainer';
import { cn } from '../../utils/cn';

export const ChatLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Overlay pour mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-72 transform transition-transform duration-200 ease-in-out lg:relative lg:transform-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-10 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md"
        >
          <Menu className="w-5 h-5" />
        </button>
        <ChatContainer />
      </div>
    </div>
  );
};