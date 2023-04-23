import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.timeout = 100 * 1000;

type Token = string;

export const agent = {
  setToken: (token: Token) => {
    axios.defaults.headers.common = { token };
  },
  getToken: () => axios.defaults.headers.common,
};

const responseBody = <T>(response: AxiosResponse<T>) => response;

export const request = {
  delete: <T>(url: string, data?: any) =>
    axios.delete<T>(`${url}`, { data }).then(responseBody),
  get: <T>(url: string, props?: AxiosRequestConfig) =>
    axios.get<T>(`${url}`, props).then(responseBody),
  getPaginated: <T>(url: string, pageNum: number) =>
    axios
      .get<T>(`${url}`, { params: { page_num: pageNum } })
      .then(responseBody),
  put: <T>(url: string, body: any) =>
    axios.put<T>(`${url}`, body).then(responseBody),
  post: <T>(url: string, body: any) =>
    axios.post<T>(`${url}`, body).then(responseBody),
};
