import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, User, Shield } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export const UserMenu: React.FC = () => {
  const { user } = useAuthStore();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="border-t dark:border-gray-700">
      <Link
        to="/profile"
        className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{user?.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {user?.email}
          </p>
        </div>
        <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </Link>

      {isAdmin && (
        <Link
          to="/admin"
          className="flex items-center gap-3 p-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Administration</span>
        </Link>
      )}
    </div>
  );
};