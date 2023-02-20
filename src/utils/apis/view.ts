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
