import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType, UserType } from './utils';
import {
  getAuthUser,
  getToken,
  removeAuthUser,
  removeToken,
  setAuthUser,
  setToken,
} from './utils';

interface AuthState {
  token: TokenType | null;
  authUser: UserType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: { token: TokenType; user: UserType }) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  authUser: null,
  signIn: ({ token, user }) => {
    setToken(token);
    setAuthUser(user);
    set({ status: 'signIn', token, authUser: user });
  },
  signOut: () => {
    removeToken();
    removeAuthUser();
    set({ status: 'signOut', token: null, authUser: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      const user = getAuthUser();

      if (userToken !== null && user !== null) {
        get().signIn({ token: userToken, user });
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType, user: UserType) =>
  _useAuth.getState().signIn({ token, user });
export const hydrateAuth = () => _useAuth.getState().hydrate();
