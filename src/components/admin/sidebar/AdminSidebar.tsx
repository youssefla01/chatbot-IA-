import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Settings, 
  MessageSquare, 
  Shield,
  X 
} from 'lucide-react';
import { ThemeToggle } from '../../ThemeToggle';
import { cn } from '../../../utils/cn';

interface AdminSidebarProps {
  onClose?: () => void;
}

const NavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors",
        isActive && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
      )
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="p-4 flex items-center justify-between border-b dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <h1 className="text-lg font-semibold">Administration</h1>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        <NavItem to="/admin/users" icon={<Users className="w-5 h-5" />}>
          Utilisateurs
        </NavItem>
        <NavItem to="/" icon={<MessageSquare className="w-5 h-5" />}>
          Conversations
        </NavItem>
        <NavItem to="/profile" icon={<Settings className="w-5 h-5" />}>
          Paramètres
        </NavItem>
      </nav>

      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Retour au chat
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};