import React from 'react';
import { useTime } from '@/src/utils/hooks/useTime';
import s from './index.module.scss';

const BlogCard: React.FC = () => {
  const { timeText } = useTime();
  return (
    <div className={s.blogCard}>
      <div>{timeText}</div>
      <div>
        我是<span className={s.color}>lqt</span>
      </div>
      <div>欢迎来到</div>
      <div>
        我的<span className={s.color}>个人博客</span>
      </div>
    </div>
  );
};

export default BlogCard;
