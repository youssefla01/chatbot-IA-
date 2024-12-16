import type { UserWithStatus } from '../types/admin';

// Génération d'IDs uniques pour les utilisateurs
const generateId = () => `user_${Math.random().toString(36).substr(2, 9)}`;

export const mockUsers: UserWithStatus[] = [
  {
    id: generateId(),
    email: 'john@example.com',
    name: 'John Doe',
    role: 'user',
    status: 'active',
    createdAt: Date.now() - 15000000000,
    lastLogin: Date.now() - 100000,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: generateId(),
    email: 'jane@example.com',
    name: 'Jane Smith',
    role: 'user',
    status: 'active',
    createdAt: Date.now() - 10000000000,
    lastLogin: Date.now() - 200000,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: generateId(),
    email: 'admin@example.com',
    name: 'Admin',
    role: 'admin',
    status: 'active',
    createdAt: Date.now() - 20000000000,
    lastLogin: Date.now() - 50000,
    avatar: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=100&h=100&fit=crop',
  }
];

interface StoredCredential {
  email: string;
  password: string;
  userId: string;
}

// Mise à jour des identifiants avec les nouveaux IDs
export const mockCredentials: StoredCredential[] = mockUsers.map(user => ({
  email: user.email,
  password: 'password123',
  userId: user.id,
}));