import { baseUrl } from '@/src/constant';
import axios from 'axios';

const tagBaseUrl = baseUrl + '/tag';

// 获取标签总数
export const getTagNum = () => {
  return axios({
    baseURL: tagBaseUrl,
    url: 'get/total',
    method: 'get',
  });
};
