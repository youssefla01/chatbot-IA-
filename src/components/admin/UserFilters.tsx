import React from 'react';
import { Search } from 'lucide-react';
import type { UserFilters } from '../../types/admin';

interface UserFiltersProps {
  filters: UserFilters;
  onFiltersChange: (filters: UserFilters) => void;
}

export const UserFilters: React.FC<UserFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            value={filters.search || ''}
            onChange={(e) =>
              onFiltersChange({ ...filters, search: e.target.value })
            }
            className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <select
          value={filters.status || ''}
          onChange={(e) =>
            onFiltersChange({
              ...filters,
              status: e.target.value as 'active' | 'inactive' | undefined,
            })
          }
          className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="">Tous les statuts</option>
          <option value="active">Actif</option>
          <option value="inactive">Inactif</option>
        </select>
        <select
          value={filters.role || ''}
          onChange={(e) =>
            onFiltersChange({
              ...filters,
              role: e.target.value as 'user' | 'admin' | undefined,
            })
          }
          className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="">Tous les rôles</option>
          <option value="user">Utilisateur</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};