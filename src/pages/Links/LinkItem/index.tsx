import React from 'react';
import { useLazyImg } from '@/src/utils/hooks/useLazyImg';
import { smallLoadingUrl } from '@/src/constant';
import s from './index.module.scss';
import classNames from 'classnames';

interface Props {
  title: string;
  des: string;
  avatar: string;
  link: string;
}

const LinkItem: React.FC<Props> = prop => {
  const { title, des, avatar, link } = prop;
  const { imgRef, imgUrl } = useLazyImg(avatar, smallLoadingUrl);
  return (
    <div className={s.item}>
      <a href={link} rel="noreferrer" target="_blank" className={s.link}>
        <div ref={imgRef} className={s.left}>
          <img
            src={imgUrl}
            alt="avatar"
            className={classNames({
              [s.avatar]: imgUrl !== smallLoadingUrl,
              [s.loading]: imgUrl === smallLoadingUrl,
            })}
          />
        </div>
        <div className={s.right}>
          <div className={s.title}>{title}</div>
          <div className={s.des}>{des}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
