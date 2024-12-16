import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminLayout } from '../components/layout/AdminLayout';

export const AdminPage: React.FC = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};