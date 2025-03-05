export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface UserState {
  profile: User | null;
  users: User[];
  selectedUser: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface UpdateUserRequest {
  name: string;
  email: string;
  avatar?: string;
}
