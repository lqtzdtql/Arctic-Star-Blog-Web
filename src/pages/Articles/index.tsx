import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { useMount, useSafeState } from 'ahooks';
import React from 'react';
import Search from './Search';
import { getArticleByString } from '@/src/utils/apis/article';
import ArticleList from './ArticleList';
import Pagination from '@/src/components/Pagination';
import { useAppSelector } from '@/src/redux/hooks';
import { pageTotal } from '@/src/redux/slices/totalSlice';

interface articleData {
  _id: string;
  title: string;
  create_at: number;
}

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const [articles, setArticles] = useSafeState<articleData[]>([]);
  const total = useAppSelector(pageTotal);

  const searchFunction = async (target: string) => {
    const res = await getArticleByString({ page, count: 8, target });
    if (res.status >= 200 && res.status < 300) {
      setPage(res.data.pageData.page);
      setArticles(res.data.data);
      setPage(1);
      console.log(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  };

  const handlePageChange = (toPage: number) => {
    setPage(toPage);
  };

  useMount(() => {
    searchFunction('');
  });

  return (
    <Layout title={Title.Articles}>
      <Search searchFunction={searchFunction} />
      <ArticleList articleData={articles} />
      <Pagination
        currentPage={page}
        total={total}
        onChange={toPage => {
          handlePageChange(toPage);
        }}
      />
    </Layout>
  );
};

export default Articles;
