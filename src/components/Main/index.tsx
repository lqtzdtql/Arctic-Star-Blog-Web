import React, { Suspense, lazy } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import s from './index.module.scss';
import { Route, Routes } from 'react-router-dom';
import { useMount } from 'ahooks';
import { useAppDispatch } from '@/src/redux/hooks';
import { setTotal } from '@/src/redux/slices/totalSlice';
import { getArticleNum } from '@/src/utils/apis/article';
import { addView } from '@/src/utils/apis/view';

const Home = lazy(() => import('@/src/pages/Home'));
const Articles = lazy(() => import('@/src/pages/Articles'));
const Series = lazy(() => import('@/src/pages/Series'));
const ArticlesInSeries = lazy(() => import('@/src/pages/ArticlesInSeries'));
const Tags = lazy(() => import('@/src/pages/Tags'));
const ArticlesInTag = lazy(() => import('@/src/pages/ArticlesInTag'));
const ArticleDetail = lazy(() => import('@/src/pages/ArticleDetail'));
const Links = lazy(() => import('@/src/pages/Links'));
const Log = lazy(() => import('@/src/pages/Log'));

const Main = () => {
  const dispatch = useAppDispatch();

  useMount(async () => {
    addView();
    const res = await getArticleNum();
    if (res.status >= 200 && res.status < 300) {
      dispatch(setTotal(res.data.total));
    } else {
      console.log(res.data.errMsg);
    }
  });
  return (
    <main className={s.main}>
      <div className={s.center}>
        <ErrorBoundary>
          <Suspense fallback={'加载中，请稍等'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/series" element={<Series />} />
              <Route path="/series/:id" element={<ArticlesInSeries />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tag/:id" element={<ArticlesInTag />} />
              <Route path="/links" element={<Links />} />
              <Route path="/log" element={<Log />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
