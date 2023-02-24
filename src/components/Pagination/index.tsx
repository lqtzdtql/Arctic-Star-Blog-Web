import React from 'react';

import s from './index.module.scss';
import { useSafeState } from 'ahooks';
import classNames from 'classnames';

interface Props {
  currentPage: number;
  total: number;
  onChange?: (toPage: number) => void;
}

const Pagination: React.FC<Props> = props => {
  const { currentPage, total, onChange } = props;
  const pageNum = Math.ceil(total / 8);
  const pageBtnDataArr: number[] = [];
  const [preEllipsis, setPreEllipsis] = useSafeState('•••');
  const [nextEllipsis, setNextEllipsis] = useSafeState('•••');
  if (pageNum <= 10) {
    for (let i = 1; i <= pageNum; i++) {
      pageBtnDataArr.push(i);
    }
  } else {
    for (let i = currentPage - 2; i < currentPage + 3; i++) {
      pageBtnDataArr.push(i);
    }
  }

  const handlePageChange: (toPage: number) => void = toPage => {
    let toRealPage = toPage;
    toRealPage = Math.max(toRealPage, 1);
    toRealPage = Math.min(toRealPage, pageNum);
    if (toRealPage === currentPage) return;
    if (onChange) {
      onChange(toRealPage);
    }
  };

  return (
    <div className={s.pagination}>
      {pageNum > 0 && (
        <div
          className={classNames(s.pageBtn, { [s.translucent]: currentPage === 1 })}
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
        >
          {'<'}
        </div>
      )}
      {pageNum > 10 && currentPage > 3 && (
        <div
          className={classNames(s.pageBtn, { [s.isActive]: currentPage === 1 })}
          onClick={() => {
            handlePageChange(1);
          }}
        >
          1
        </div>
      )}
      {pageNum > 10 && currentPage > 4 && (
        <div
          className={classNames(s.pageBtn)}
          onMouseMove={() => {
            setPreEllipsis('<<');
          }}
          onMouseLeave={() => {
            setPreEllipsis('•••');
          }}
          onClick={() => {
            handlePageChange(currentPage - 5);
          }}
        >
          {preEllipsis}
        </div>
      )}
      {pageBtnDataArr.map(
        i =>
          Boolean(i >= 1) &&
          Boolean(i <= pageNum) && (
            <div
              key={i}
              className={classNames(s.pageBtn, { [s.isActive]: currentPage === i })}
              onClick={() => {
                handlePageChange(i);
              }}
            >
              {i}
            </div>
          )
      )}
      {pageNum > 10 && currentPage < pageNum - 3 && (
        <div
          className={classNames(s.pageBtn)}
          onMouseMove={() => {
            setNextEllipsis('>>');
          }}
          onMouseLeave={() => {
            setNextEllipsis('•••');
          }}
          onClick={() => {
            handlePageChange(currentPage + 5);
          }}
        >
          {nextEllipsis}
        </div>
      )}
      {pageNum > 10 && currentPage < pageNum - 2 && (
        <div
          className={classNames(s.pageBtn, { [s.isActive]: currentPage === pageNum })}
          onClick={() => {
            handlePageChange(pageNum);
          }}
        >{`${pageNum}`}</div>
      )}
      {pageNum > 0 && (
        <div
          className={classNames(s.pageBtn, { [s.translucent]: currentPage === pageNum })}
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
        >
          {'>'}
        </div>
      )}
    </div>
  );
};

export default Pagination;
