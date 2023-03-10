import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { useSafeState } from 'ahooks';
import React, { useEffect } from 'react';
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
  const [input, setInput] = useSafeState('');
  const total = useAppSelector(pageTotal);

  const searchFunction = async (target: string, needToOne = false) => {
    const res = await getArticleByString({ page, count: 8, target });
    if (res.status >= 200 && res.status < 300) {
      console.log(res.data);
      needToOne && setPage(1);
      setArticles(res.data.data);
    } else {
      console.log(res.data.errMsg);
    }
  };

  const handlePageChange = (toPage: number) => {
    setPage(toPage);
  };

  useEffect(() => {
    searchFunction(input);
  }, [page]);

  return (
    <Layout title={Title.Articles}>
      <Search searchFunction={searchFunction} input={input} setInput={setInput} />
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
