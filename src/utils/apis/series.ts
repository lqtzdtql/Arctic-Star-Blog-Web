import { baseUrl } from '@/src/constant';
import axios from 'axios';

const seriesBaseUrl = baseUrl + '/series';

interface getArticlesInSeriesProp {
  seriesId: string;
}

// 获取合集总数
export const getSeriesNum = () => {
  return axios({
    baseURL: seriesBaseUrl,
    url: 'get/total',
    method: 'get',
  });
};

// 获取所有合集名称
export const getAllSeries = () => {
  return axios({
    baseURL: seriesBaseUrl,
    url: 'get/allSeries',
    method: 'get',
  });
};

// 获取合集内文章
export const getArticlesInSeries = (params: getArticlesInSeriesProp) => {
  return axios({
    baseURL: seriesBaseUrl,
    url: 'get/articlesInSeries',
    method: 'get',
    params,
  });
};
