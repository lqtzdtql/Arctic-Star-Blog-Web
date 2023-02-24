import React from 'react';
import s from './index.module.scss';
import { useMount, useSafeState } from 'ahooks';
import { useParams } from 'react-router-dom';
import { getArticleById } from '@/src/utils/apis/article';
import Layout from '@/src/components/Layout';
import MarkDown from '../../components/MarkDown';
import CopyRight from './CopyRight';

interface articleDetailDataProp {
  _id: string;
  title: string;
  series: { _id: string; name: string }[];
  tag: { _id: string; name: string }[];
  create_at: number;
  text: string;
  view: number;
}

const ArticleDetail: React.FC = () => {
  const params = useParams();
  const [articleDetailData, setArticleDetailData] = useSafeState<articleDetailDataProp>();

  const getArticleDetail = async (articleId: string) => {
    const res = await getArticleById({ articleId });
    if (res.status >= 200 && res.status < 300) {
      setArticleDetailData(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  };

  useMount(() => {
    const articleId = params.id;
    getArticleDetail(articleId!);
  });

  return (
    <Layout
      title={articleDetailData?.title}
      isArticleDetail={true}
      seriesData={articleDetailData?.series[0]}
      date={articleDetailData?.create_at}
      tagsData={articleDetailData?.tag}
    >
      <MarkDown content={articleDetailData?.text} className={s.md} />
      <CopyRight title={articleDetailData?.title} id={articleDetailData?._id} />
    </Layout>
  );
};

export default ArticleDetail;
