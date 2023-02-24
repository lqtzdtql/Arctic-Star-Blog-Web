import React from 'react';
import s from './index.module.scss';
import dayjs from 'dayjs';

interface Props {
  date: number;
  logContent: string[];
}

const LogItem: React.FC<Props> = prop => {
  const { date, logContent } = prop;
  return (
    <div className={s.item}>
      <div className={s.time}>
        <div className={s.dot}>
          <div className={s.dotIn} />
        </div>
        {dayjs(date).format('YYYY-MM-DD')}
      </div>

      <ul className={s.content}>
        {logContent.map((log, index) => (
          <li key={index} className={s.timeLi}>
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogItem;
