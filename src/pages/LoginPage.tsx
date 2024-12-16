import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { AuthLayout } from '../components/layout/AuthLayout';

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      title="Bon retour"
      subtitle="Vous n'avez pas de compte ?"
      alternativeLink={{
        text: "S'inscrire",
        to: "/signup",
        label: "S'inscrire gratuitement",
      }}
    >
      <LoginForm />
    </AuthLayout>
  );
};