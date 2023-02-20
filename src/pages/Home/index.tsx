import React, { Fragment } from 'react';
import { useMount, useSafeState, useTitle } from 'ahooks';

import { siteTitle } from '@/src/constant';
import { setNavShow } from '@/src/redux/slices/navShowSlice';

import PageTitle from '@/src/components/PageTitle';
import useTop from '@/src/utils/hooks/useTop';

import s from './index.module.scss';
import Section from './Section';
import Aside from './Aside';

const getPoem = require('jinrishici');

const Home: React.FC = () => {
  useTitle(siteTitle);
  useTop({ setNavShow });

  const [poem, setPoem] = useSafeState('');
  const [isReady, setIsReady] = useSafeState(false);
  useMount(() => {
    getPoem.load(
      (res: {
        status: string;
        data: {
          content: string;
        };
      }) => {
        if (res.status === 'success') {
          setPoem(res.data.content);
        } else {
          setPoem('欲买桂花同载酒，终不似，少年游。');
        }
      }
    );
  });

  return (
    <Fragment>
      <PageTitle title={siteTitle} desc={poem} className={s.homeTitle} />(
      <div className={s.body}>
        <Section setIsReady={setIsReady} />
        {isReady && <Aside />}
      </div>
      )
    </Fragment>
  );
};

export default Home;
