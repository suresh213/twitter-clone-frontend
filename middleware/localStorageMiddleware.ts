import { agent } from "@/services/request";

const TOKEN = "_token";
const USER = "user";

export const localStorageMiddleware = (user: any) => {
  window.localStorage.setItem(TOKEN, user?.token || null);
  window.localStorage.setItem(USER, JSON.stringify(user));
  agent.setToken(user.token);
};

export const setToken = () => {
  const token: any = window.localStorage.getItem(TOKEN) || null;
  agent.setToken(token);
};

export const getToken = (): string | null => {
  return window.localStorage.getItem(TOKEN) || null;
};

export const getUser = (): any => {
  return JSON.parse(window.localStorage.getItem(USER) || "");
};

export const logout = (router: any) => {
  window.localStorage.removeItem(TOKEN);
  window.localStorage.removeItem(USER);
  router.push("/");
};
