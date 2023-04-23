import { request } from "./request";

const path = "/user/feed";

const getAll = async (): Promise<any> => {
  return await request.get(`${path}`);
};

const add = async (data: any): Promise<any> => {
  return await request.post(`${path}`, data);
};

const deleteById = async (id: string): Promise<any> => {
  return await request.delete(`${path}/${id}`);
};

const feedService = {
  getAll,
  add,
  deleteById,
};

export default feedService;
