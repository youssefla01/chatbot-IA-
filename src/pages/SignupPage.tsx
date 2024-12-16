import React from 'react';
import { SignupForm } from '../components/auth/SignupForm';
import { AuthLayout } from '../components/layout/AuthLayout';

export const SignupPage: React.FC = () => {
  return (
    <AuthLayout
      title="Créer un compte"
      subtitle="Vous avez déjà un compte ?"
      alternativeLink={{
        text: "Se connecter",
        to: "/login",
        label: "Se connecter ici",
      }}
    >
      <SignupForm />
    </AuthLayout>
  );
};