import React, { Suspense, lazy } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import s from './index.module.scss';
import { Route, Routes } from 'react-router-dom';
import { useMount } from 'ahooks';
import { useAppDispatch } from '@/src/redux/hooks';
import { setTotal } from '@/src/redux/slices/totalSlice';
import { getArticleNum } from '@/src/utils/apis/article';

const Home = lazy(() => import('@/src/pages/Home'));
const Articles = lazy(() => import('@/src/pages/Articles'));

const Main = () => {
  const dispatch = useAppDispatch();

  useMount(async () => {
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
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
