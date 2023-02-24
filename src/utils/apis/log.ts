import { baseUrl } from '@/src/constant';
import axios from 'axios';

const logBaseUrl = baseUrl + '/log';

// 获取友链
export const getLog = () => {
  return axios({
    baseURL: logBaseUrl,
    url: 'get',
    method: 'get',
  });
};
