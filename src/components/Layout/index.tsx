import React, { Fragment } from 'react';
import s from './index.module.scss';
import { useTitle } from 'ahooks';
import { siteTitle } from '@/src/constant';
import useTop from '@/src/utils/hooks/useTop';
import PageTitle from '../PageTitle';
import { setNavShow } from '@/src/redux/slices/navShowSlice';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

interface Props {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  isArticleDetail?: boolean;
  seriesData?: { _id: string; name: string };
  date?: number;
  tagsData?: { _id: string; name: string }[];
}

const Layout: React.FC<Props> = prop => {
  const { title, children, className, isArticleDetail, seriesData, date, tagsData } = prop;
  const navigate = useNavigate();
  useTitle(`${siteTitle} | ${title || ''}`);
  useTop({ setNavShow });

  return (
    <Fragment>
      <PageTitle title={title} className={classNames({ [s.articleDetail]: isArticleDetail })}>
        {Boolean(seriesData) && (
          <div className={s.content}>
            <div
              className={s.card}
              onClick={() => {
                navigate(`/series/${seriesData?._id}`);
              }}
            >
              {`所属合集：${seriesData?.name}`}
            </div>
            <div className={s.card}>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</div>
          </div>
        )}
        {Boolean(tagsData) && (
          <div className={s.content}>
            {tagsData?.map(item => (
              <div
                key={item._id}
                className={s.card}
                onClick={() => {
                  navigate(`/tag/${item._id}`);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </PageTitle>
      <div className={classNames(s.pageCard, className)}>{children}</div>
    </Fragment>
  );
};

export default Layout;
