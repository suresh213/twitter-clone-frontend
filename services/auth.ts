import { request } from "./request";

const path = "/auth";

const register = async (data: Record<string, any>): Promise<any> => {
  return await request.post(`${path}/register`, data);
};

const login = async (data: Record<string, any>): Promise<any> => {
  return await request.post(`${path}/login`, data);
};

const authenticateWithGoogle = async (
  data: Record<string, any>
): Promise<any> => {
  return await request.post(`${path}/google/login`, data);
};

const getUser = async (): Promise<any> => {
  return await request.get(`/user`);
};

const authService = {
  login,
  register,
  getUser,
  authenticateWithGoogle,
};

export default authService;
