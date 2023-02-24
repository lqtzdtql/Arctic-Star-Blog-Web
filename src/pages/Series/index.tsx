import React from 'react';
import s from './index.module.scss';
import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { useMount, useSafeState } from 'ahooks';
import { getAllSeries } from '@/src/utils/apis/series';
import SeriesBar from './SeriesBar';
import { useNavigate } from 'react-router-dom';

interface seriesDataType {
  _id: string;
  name: string;
  article: string[];
}

const Series: React.FC = () => {
  const [seriesData, setSeriesData] = useSafeState<seriesDataType[]>([]);
  const navigate = useNavigate();
  const getSeriesData = async () => {
    const res = await getAllSeries();
    if (res.status >= 200 && res.status < 300) {
      setSeriesData(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  };
  useMount(() => {
    getSeriesData();
  });
  return (
    <Layout title={Title.Series} className={s.seriesBox}>
      {Boolean(seriesData.length) &&
        seriesData.map(i => (
          <SeriesBar
            key={i._id}
            content={i.name}
            num={i.article.length}
            className={s.seriesItem}
            onClick={() => {
              navigate(`/series/${i._id}`);
            }}
          />
        ))}
    </Layout>
  );
};

export default Series;
