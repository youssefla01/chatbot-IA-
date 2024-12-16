import React from 'react';
import { Check, X, Edit2, Trash2 } from 'lucide-react';
import type { UserWithStatus } from '../../types/admin';
import { formatDate } from '../../utils/date';
import { cn } from '../../utils/cn';

interface UserTableRowProps {
  user: UserWithStatus;
  onToggleStatus: (userId: string) => void;
  onEdit: (user: UserWithStatus) => void;
  onDelete: (userId: string) => void;
}

export const UserTableRow: React.FC<UserTableRowProps> = ({
  user,
  onToggleStatus,
  onEdit,
  onDelete,
}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            {user.avatar ? (
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={user.avatar}
                alt={user.name}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          user.role === 'admin'
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
        )}>
          {user.role === 'admin' ? 'Admin' : 'Utilisateur'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          user.status === 'active'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        )}>
          {user.status === 'active' ? 'Actif' : 'Inactif'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {user.lastLogin ? formatDate(user.lastLogin) : 'Jamais'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {formatDate(user.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end space-x-2">
          <button
            onClick={() => onToggleStatus(user.id)}
            className={cn(
              'p-1 rounded-full',
              user.status === 'active'
                ? 'text-green-600 hover:bg-green-100 dark:hover:bg-green-900'
                : 'text-red-600 hover:bg-red-100 dark:hover:bg-red-900'
            )}
          >
            {user.status === 'active' ? (
              <Check className="w-4 h-4" />
            ) : (
              <X className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => onEdit(user)}
            className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-full"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};