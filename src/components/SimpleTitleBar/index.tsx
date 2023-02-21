import React, { MouseEventHandler } from 'react';
import s from './index.module.scss';
import dayjs from 'dayjs';

interface Props {
  content: string;
  date?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SimpleTitleBar: React.FC<Props> = prop => {
  const { content, date, onClick } = prop;
  return (
    <div className={s.simpleTitleBar} onClick={onClick}>
      <div className={s.content}>{content}</div>
      <div className={s.rightContent}>
        <div className={s.date}>{dayjs(date).format('YYYY-MM-DD')}</div>
      </div>
    </div>
  );
};

export default SimpleTitleBar;
