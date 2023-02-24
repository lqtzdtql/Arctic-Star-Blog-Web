import React, { useEffect } from 'react';
import { useSafeState } from 'ahooks';
import Pagination from '@/src/components/Pagination';
import PostCard from './PostCard';
import { getAllArticle } from '@/src/utils/apis/article';
import s from './index.module.scss';
import { useAppSelector } from '@/src/redux/hooks';
import { pageTotal } from '@/src/redux/slices/totalSlice';

interface Prop {
  setIsReady: any;
}

const Section: React.FC<Prop> = ({ setIsReady }) => {
  const [page, setPage] = useSafeState(1);
  const [articles, setArticles] = useSafeState<any[]>([]);
  const [isShow, setIsShow] = useSafeState(false);
  const total = useAppSelector(pageTotal);

  const handlePageChange = (toPage: number) => {
    setPage(toPage);
    window.scrollTo(0, document.body.clientHeight - 80);
  };

  const getArticles = async (page: number, setIsReady: any) => {
    const res = await getAllArticle({ count: 8, page });
    if (res.status >= 200 && res.status < 300) {
      setArticles(res.data.data);
      setPage(res.data.pageData.page);
      setIsReady(true);
      setIsShow(true);
    } else {
      console.log(res.data.errMsg);
    }
  };

  useEffect(() => {
    getArticles(page, setIsReady);
  }, [page]);

  return (
    <section className={s.section}>
      {Boolean(articles.length) &&
        articles.map(i => (
          <PostCard
            _id={i._id}
            title={i.title}
            series={i.series}
            tags={i.tag}
            content={i.content}
            createAt={i.create_at}
            key={i._id}
          />
        ))}
      {Boolean(total) && isShow && (
        <Pagination
          currentPage={page}
          total={total}
          onChange={toPage => {
            handlePageChange(toPage);
          }}
        />
      )}
    </section>
  );
};

export default Section;
