import classNames from 'classnames';
import React from 'react';

import s from './index.module.scss';

interface Props {
  state: boolean;
  toggle: () => void;
  setLeft: () => void;
  setRight: () => void;
}

const Switch: React.FC<Props> = prop => {
  const { state, toggle, setLeft, setRight } = prop;
  return (
    <div className={s.switch}>
      <div className={classNames(s.site, { [s.titleOff]: state })} onClick={() => setLeft()}>
        关于本站
      </div>
      <div className={s.box} onClick={() => toggle()}>
        <div className={classNames(s.btn, { [s.isMe]: state })} />
      </div>
      <div className={classNames(s.me, { [s.titleOff]: !state })} onClick={() => setRight()}>
        关于我
      </div>
    </div>
  );
};

export default Switch;
