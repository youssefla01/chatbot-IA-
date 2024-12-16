import type { User } from './index';

export interface UserWithStatus extends User {
  status: 'active' | 'inactive';
  role: 'user' | 'admin';
  lastLogin?: number;
  createdAt: number;
}

export interface UserFilters {
  status?: 'active' | 'inactive';
  role?: 'user' | 'admin';
  search?: string;
}