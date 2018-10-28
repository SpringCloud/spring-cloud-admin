import axios, { AxiosPromise } from 'axios';
const tag = '/api';

// 获取服务列表
export const getServList = (): AxiosPromise<any> => {
  return axios.get(`${tag}/journal`);
};
