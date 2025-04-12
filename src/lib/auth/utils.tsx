import { getItem, removeItem, setItem } from '@/lib';

const TOKEN = 'token';
const AUTH_USER = 'auth-user';

export type TokenType = string;
export type UserType = {
  uid: string;
  email: string;
  fullName: string;
  phone: string;
  userType: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);

export const getAuthUser = () => getItem<UserType>(AUTH_USER);
export const setAuthUser = (value: UserType) =>
  setItem<UserType>(AUTH_USER, value);
export const removeAuthUser = () => removeItem(AUTH_USER);
