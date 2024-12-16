import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';
import { authenticateUser, registerUser } from '../utils/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  updateProfile: (data: { name: string; avatar?: string }) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        try {
          const user = authenticateUser(email, password);
          set({ user, isAuthenticated: true });
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      signup: async (email, password, name) => {
        try {
          const user = registerUser(email, password, name);
          set({ user, isAuthenticated: true });
        } catch (error) {
          throw new Error('Registration failed');
        }
      },
      updateProfile: async (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);