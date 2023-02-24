import Layout from '@/src/components/Layout';
import { useSafeState } from 'ahooks';
import React, { useEffect } from 'react';
import Pagination from '@/src/components/Pagination';
import { getArticlesInSeries } from '@/src/utils/apis/series';
import ArticleList from '../Articles/ArticleList';
import { useParams } from 'react-router-dom';

interface articleData {
  _id: string;
  title: string;
  create_at: number;
}

const ArticlesInSeries: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const [total, setTotal] = useSafeState(1);
  const [name, setName] = useSafeState('');
  const [articles, setArticles] = useSafeState<articleData[]>([]);
  const params = useParams();
  const getArticleDataInSeries = async (seriesId: string) => {
    const res = await getArticlesInSeries({ seriesId });
    if (res.status >= 200 && res.status < 300) {
      setArticles(res.data.article.slice((page - 1) * 8, page * 8));
      setName(res.data.name);
      setTotal(res.data.article.length);
    } else {
      console.log(res.data.errMsg);
    }
  };
  const handlePageChange = (toPage: number) => {
    setPage(toPage);
  };
  useEffect(() => {
    const seriesId = params.id;
    getArticleDataInSeries(seriesId!);
  }, [page]);
  return (
    <Layout title={name}>
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

export default ArticlesInSeries;
