import { baseUrl } from '@/src/constant';
import axios from 'axios';

const viewBaseUrl = baseUrl + '/view';

// 获取浏览量
export const getView = () => {
  return axios({
    baseURL: viewBaseUrl,
    url: 'get',
    method: 'get',
  });
};

// 增加浏览量
export const addView = () => {
  return axios({
    baseURL: viewBaseUrl,
    url: 'add',
    method: 'get',
  });
};
