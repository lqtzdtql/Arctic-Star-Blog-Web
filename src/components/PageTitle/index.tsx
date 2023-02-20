import React from 'react';
import classNames from 'classnames';

import s from './index.module.scss';

interface Props {
  title?: string;
  desc?: string;
  className?: string;
  children?: any;
}

const PageTitle: React.FC<Props> = ({ title, desc, className, children }) => {
  return (
    <div className={classNames(s.box, className)}>
      <div className={s.title}>{title}</div>
      <div className={s.desc}>{desc}</div>
      {children}
    </div>
  );
};

export default PageTitle;
