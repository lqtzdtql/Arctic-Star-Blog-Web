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

// 获取所有标签
export const getAllTags = () => {
  return axios({
    baseURL: tagBaseUrl,
    url: 'get/allTags',
    method: 'get',
  });
};

// 查询标签下文章
export const getArticlesInTag = (params: { tagId: string }) => {
  return axios({
    baseURL: tagBaseUrl,
    url: 'get/articlesInTag',
    method: 'get',
    params,
  });
};
