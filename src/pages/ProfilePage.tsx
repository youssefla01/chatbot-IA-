import React from 'react';
import { Header } from '../components/layout/Header';
import { ProfileSettings } from '../components/profile/ProfileSettings';

export const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <ProfileSettings />
        </div>
      </main>
    </div>
  );
};