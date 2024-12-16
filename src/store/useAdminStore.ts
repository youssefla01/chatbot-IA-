import { create } from 'zustand';
import type { UserWithStatus, UserFilters } from '../types/admin';
import { mockUsers } from '../data/mockUsers';

interface AdminState {
  users: UserWithStatus[];
  filters: UserFilters;
  isLoading: boolean;
  setFilters: (filters: UserFilters) => void;
  toggleUserStatus: (userId: string) => Promise<void>;
  updateUser: (userId: string, data: Partial<UserWithStatus>) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  createUser: (user: Omit<UserWithStatus, 'id'>) => Promise<void>;
}

const generateId = () => `user_${Math.random().toString(36).substr(2, 9)}`;

export const useAdminStore = create<AdminState>((set) => ({
  users: mockUsers,
  filters: {},
  isLoading: false,

  setFilters: (filters) => {
    set({ filters });
  },

  toggleUserStatus: async (userId) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId
            ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
            : user
        ),
      }));
    } finally {
      set({ isLoading: false });
    }
  },

  updateUser: async (userId, data) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, ...data } : user
        ),
      }));
    } finally {
      set({ isLoading: false });
    }
  },

  deleteUser: async (userId) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        users: state.users.filter((user) => user.id !== userId),
      }));
    } finally {
      set({ isLoading: false });
    }
  },

  createUser: async (userData) => {
    set({ isLoading: true });
    try {
      const newUser: UserWithStatus = {
        ...userData,
        id: generateId(),
        createdAt: Date.now(),
        lastLogin: null,
      };
      set((state) => ({
        users: [newUser, ...state.users],
      }));
    } finally {
      set({ isLoading: false });
    }
  },
}));