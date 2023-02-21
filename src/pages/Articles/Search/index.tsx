import React, { useRef } from 'react';
import s from './index.module.scss';
import { useKeyPress, useSafeState } from 'ahooks';
import { ArrowRightOutlined, RedoOutlined } from '@ant-design/icons';

interface Props {
  searchFunction: (target: string) => void;
}

const Search: React.FC<Props> = prop => {
  const { searchFunction } = prop;
  const inputRef = useRef(null);
  const [input, setInput] = useSafeState('');

  const search = () => {
    searchFunction(input);
  };

  const reset = () => {
    setInput('');
    searchFunction('');
  };

  useKeyPress(13, search, {
    target: inputRef,
  });

  useKeyPress(27, reset, {
    target: inputRef,
  });

  return (
    <div className={s.searchBox}>
      <input
        ref={inputRef}
        type="text"
        placeholder="搜索文章标题或内容..."
        className={s.search}
        value={input}
        onChange={e => setInput?.(e.target.value)}
      />
      {/* 搜索按钮 */}
      <div className={s.btn} onClick={search}>
        <ArrowRightOutlined />
      </div>
      {/* 重置按钮 */}
      <div className={s.btn} onClick={reset}>
        <RedoOutlined />
      </div>
    </div>
  );
};

export default Search;
