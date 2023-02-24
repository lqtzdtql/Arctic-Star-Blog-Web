import React from 'react';
import s from './index.module.scss';
import SimpleTitleBar from '@/src/components/SimpleTitleBar';
import { useNavigate } from 'react-router-dom';

interface articleType {
  _id: string;
  title: string;
  create_at: number;
}

interface Props {
  articleData: articleType[];
}

const ArticleList: React.FC<Props> = prop => {
  const { articleData } = prop;
  const navigate = useNavigate();

  const goToArticle = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className={s.box}>
      {articleData.length ? (
        articleData.map((item: articleType) => (
          <SimpleTitleBar
            key={item._id}
            content={item.title}
            date={item.create_at}
            onClick={() => {
              goToArticle(item._id);
            }}
          />
        ))
      ) : (
        <div className={s.none}>暂无相应文章</div>
      )}
    </div>
  );
};

export default ArticleList;
