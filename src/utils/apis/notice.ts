import { baseUrl } from '@/src/constant';
import axios from 'axios';

const noticeBaseUrl = baseUrl + '/notice';

// 获取公告
export const getNotice = () => {
  return axios({
    baseURL: noticeBaseUrl,
    url: 'get',
    method: 'get',
  });
};
