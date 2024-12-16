import React from 'react';
import { UserManagement } from '../../components/admin/UserManagement';

export const UsersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <UserManagement />
    </div>
  );
};