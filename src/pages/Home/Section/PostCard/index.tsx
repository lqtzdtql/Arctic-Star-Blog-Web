import React from 'react';
import dayjs from 'dayjs';
import s from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  _id: string;
  title: string;
  series?: {
    _id: string;
    name: string;
  }[];
  tags?: {
    _id: string;
    name: string;
  }[];
  content: string;
  createAt: string;
}

const PostCard: React.FC<Props> = prop => {
  const { _id, title, series, tags, content, createAt } = prop;
  const navigate = useNavigate();

  const jumpToArticle = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };
  const jumpToSeries = (seriesId: string) => {
    navigate(`/series/${seriesId}`);
  };
  const jumpToTag = (tagId: string) => {
    navigate(`/tag/${tagId}`);
  };

  return (
    <div
      className={s.postCard}
      onClick={() => {
        jumpToArticle(_id);
      }}
    >
      <div className={s.head}>
        <div className={s.date}>{dayjs(createAt).format('YYYY-MM-DD')}</div>
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.content}>{content}</div>
      <div className={s.bottom}>
        {Boolean(series?.length) && (
          <div
            className={s.series}
            onClick={e => {
              e.stopPropagation();
              jumpToSeries(series![0]._id);
            }}
          >{`合集：${series![0].name}`}</div>
        )}
        {Boolean(tags?.length) && (
          <div className={s.tags}>
            {tags?.map(i => (
              <div
                className={s.tag}
                key={i._id}
                onClick={e => {
                  e.stopPropagation();
                  jumpToTag(i._id);
                }}
              >
                {i.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
