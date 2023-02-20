import { baseUrl } from '@/src/constant';
import axios from 'axios';

const seriesBaseUrl = baseUrl + '/series';

// 获取合集总数
export const getSeriesNum = () => {
  return axios({
    baseURL: seriesBaseUrl,
    url: 'get/total',
    method: 'get',
  });
};
