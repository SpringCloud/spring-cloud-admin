import axios, { AxiosPromise } from 'axios';
const tag = '/api';

// 获取服务列表
export const getServList = (): AxiosPromise<any> => {
  return axios.get(`${tag}/applications`);
};
// 获取服务 detail
export const getApplication = (appId): AxiosPromise<any> => {
  return axios.get(`${tag}/applications/${appId}/`);
};
// 获取服务info
export const getInfo = (appId): AxiosPromise<any> => {
  return axios.get(`${tag}/applications/${appId}/info`);
};
