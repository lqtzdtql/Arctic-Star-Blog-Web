import React, { ReactNode } from 'react';
import s from './index.module.scss';
import { useSafeState } from 'ahooks';

interface Props {
  children: ReactNode;
  content: ReactNode;
}

const Popover: React.FC<Props> = props => {
  const [isShow, setIsShow] = useSafeState(false);
  return (
    <div className={s.popover}>
      {isShow && <div className={s.content}>{props.content}</div>}
      <div
        className={s.children}
        onMouseMove={() => {
          setIsShow(true);
        }}
        onMouseLeave={() => {
          setIsShow(false);
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Popover;
