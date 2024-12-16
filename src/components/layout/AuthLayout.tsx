import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  alternativeLink: {
    text: string;
    to: string;
    label: string;
  };
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternativeLink,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">{title}</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {subtitle}{' '}
            <Link
              to={alternativeLink.to}
              className="text-blue-600 hover:text-blue-500"
            >
              {alternativeLink.label}
            </Link>
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};