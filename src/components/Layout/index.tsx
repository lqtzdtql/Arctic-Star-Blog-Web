import React, { Fragment } from 'react';
import s from './index.module.scss';
import { useTitle } from 'ahooks';
import { siteTitle } from '@/src/constant';
import useTop from '@/src/utils/hooks/useTop';
import PageTitle from '../PageTitle';
import { setNavShow } from '@/src/redux/slices/navShowSlice';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = prop => {
  const { title, children } = prop;
  useTitle(`${siteTitle} | ${title || ''}`);
  useTop({ setNavShow });

  return (
    <Fragment>
      <PageTitle title={title}></PageTitle>
      <div className={s.pageCard}>{children}</div>
    </Fragment>
  );
};

export default Layout;
