import { mockUsers, mockCredentials } from '../data/mockUsers';

export const authenticateUser = (email: string, password: string) => {
  const credential = mockCredentials.find(
    (cred) => cred.email === email && cred.password === password
  );

  if (!credential) {
    throw new Error('Invalid credentials');
  }

  const user = mockUsers.find((user) => user.id === credential.userId);
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const registerUser = (email: string, password: string, name: string) => {
  // Check if user already exists
  const existingCredential = mockCredentials.find((cred) => cred.email === email);
  if (existingCredential) {
    throw new Error('Email already registered');
  }

  // Create new user
  const newUser: typeof mockUsers[0] = {
    id: (mockUsers.length + 1).toString(),
    email,
    name,
    avatar: `https://images.unsplash.com/photo-${Date.now()}?w=100&h=100&fit=crop`,
  };

  // In a real app, we would save this to a database
  mockUsers.push(newUser);
  mockCredentials.push({
    email,
    password,
    userId: newUser.id,
  });

  return newUser;
};