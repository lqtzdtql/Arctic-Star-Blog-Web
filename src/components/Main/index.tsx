import React, { Suspense, lazy } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import s from './index.module.scss';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/src/pages/Home'));

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.center}>
        <ErrorBoundary>
          <Suspense fallback={'加载中，请稍等'}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
