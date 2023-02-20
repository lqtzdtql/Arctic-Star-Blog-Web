import React from 'react';
import s from './index.module.scss';
import BlogCard from './BlogCard';
import AccountCard from './AccountCard';
import DataCard from './DataCard';
import NoticeCard from './NoticeCard';
import ClockCard from './ClockCard';
import SiteCard from './SiteCard';

const Aside: React.FC = () => {
  return (
    <div className={s.aside}>
      <BlogCard />
      <AccountCard />
      <DataCard />
      <NoticeCard />
      <ClockCard />
      <SiteCard />
    </div>
  );
};

export default Aside;
