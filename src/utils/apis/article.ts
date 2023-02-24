import { baseUrl } from '@/src/constant';
import axios from 'axios';

const articleBaseUrl = baseUrl + '/article';

interface getAllArticleProp {
  count: number;
  page: number;
}

interface getArticleByStringProp {
  count: number;
  page: number;
  target: string;
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

// 模糊查询
export const getArticleByString = (params: getArticleByStringProp) => {
  return axios({
    baseURL: articleBaseUrl,
    url: '/get/articleByString',
    method: 'get',
    params,
  });
};

// 根据id获取文章详细信息
export const getArticleById = (params: { articleId: string }) => {
  return axios({
    baseURL: articleBaseUrl,
    url: '/get/articleById',
    method: 'get',
    params,
  });
};
