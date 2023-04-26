import { request } from "./request";

const path = "/user/tweet";

const getAll = async (query = ""): Promise<any> => {
  return await request.get(`${path}${query}`);
};

const add = async (data: any): Promise<any> => {
  return await request.post(`${path}`, data);
};

const deleteById = async (id: string): Promise<any> => {
  return await request.delete(`${path}/${id}`);
};

const tweetService = {
  getAll,
  add,
  deleteById,
};

export default tweetService;
