import Popover from '@/src/components/Popover';
import React, { ReactNode } from 'react';
import s from './index.module.scss';

interface Props {
  isLink: boolean;
  link?: string;
  content?: ReactNode;
  children: ReactNode | string;
}

const IconBtn: React.FC<Props> = props => {
  const { isLink, link, content, children } = props;
  return (
    <div className={s.iconBtn}>
      {isLink ? (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <Popover children={children} content={content} />
      )}
    </div>
  );
};

export default IconBtn;
