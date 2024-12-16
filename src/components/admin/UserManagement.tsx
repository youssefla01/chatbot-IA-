import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useAdminStore } from '../../store/useAdminStore';
import { UserTable } from './UserTable';
import { UserFilters } from './UserFilters';
import { UserModal } from './UserModal';
import type { UserWithStatus } from '../../types/admin';

export const UserManagement: React.FC = () => {
  const { users, filters, setFilters, toggleUserStatus, updateUser, deleteUser, createUser } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserWithStatus | undefined>();

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filters.status && user.status !== filters.status) return false;
      if (filters.role && user.role !== filters.role) return false;
      if (filters.search) {
        const search = filters.search.toLowerCase();
        return (
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search)
        );
      }
      return true;
    });
  }, [users, filters]);

  const handleEdit = (user: UserWithStatus) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedUser(undefined);
    setIsModalOpen(true);
  };

  const handleSave = async (userData: Partial<UserWithStatus>) => {
    if (selectedUser) {
      await updateUser(selectedUser.id, userData);
    } else {
      await createUser(userData as Omit<UserWithStatus, 'id'>);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gestion des Utilisateurs</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Ajouter un utilisateur
        </button>
      </div>

      <UserFilters filters={filters} onFiltersChange={setFilters} />

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <UserTable
          users={filteredUsers}
          onToggleStatus={toggleUserStatus}
          onEdit={handleEdit}
          onDelete={deleteUser}
        />
      </div>

      <UserModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};