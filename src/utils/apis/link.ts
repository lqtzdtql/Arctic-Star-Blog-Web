import { baseUrl } from '@/src/constant';
import axios from 'axios';

const linkBaseUrl = baseUrl + '/link';

// 获取友链
export const getLink = () => {
  return axios({
    baseURL: linkBaseUrl,
    url: 'get',
    method: 'get',
  });
};
