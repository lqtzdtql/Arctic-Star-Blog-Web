import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import s from './index.module.scss';

interface Props {
  content: string;
  num: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SeriesBar: React.FC<Props> = prop => {
  const { content, num, onClick, className } = prop;
  return (
    <div className={classNames(s.seriesBar, className)} onClick={onClick}>
      {content}
      <div className={s.seriesNum}>{num}</div>
    </div>
  );
};

export default SeriesBar;
