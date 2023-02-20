import { baseUrl } from '@/src/constant';
import axios from 'axios';

const articleBaseUrl = baseUrl + '/article';

interface getAllArticleProp {
  count: number;
  page: number;
}

// 获取文章总数
export const getArticleNum = () => {
  return axios({
    baseURL: articleBaseUrl,
    url: 'get/total',
    method: 'get',
  });
};

// 分页获取文章信息（不含正文）
export const getAllArticle = (params: getAllArticleProp) => {
  return axios({
    baseURL: articleBaseUrl,
    url: '/get/allArticles',
    method: 'get',
    params,
  });
};
