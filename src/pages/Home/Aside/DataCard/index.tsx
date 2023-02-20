import React from 'react';
import s from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { useMount, useSafeState } from 'ahooks';
import { getArticleNum } from '@/src/utils/apis/article';
import { getSeriesNum } from '@/src/utils/apis/series';
import { getTagNum } from '@/src/utils/apis/tag';

interface blogData {
  name: string;
  num: number;
  route: string;
}

const DataCard: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useSafeState<blogData[]>([]);

  const Init = async () => {
    const temp: blogData[] = [];
    const res1 = await getArticleNum();
    if (res1.status >= 200 && res1.status < 300) {
      temp.push({
        name: '文章',
        num: res1.data.total,
        route: '/articles',
      });
    } else {
      console.log(res1.data.errMsg);
    }
    const res2 = await getSeriesNum();
    if (res2.status >= 200 && res2.status < 300) {
      temp.push({
        name: '合集',
        num: res2.data.total,
        route: '/series',
      });
    } else {
      console.log(res2.data.errMsg);
    }
    const res3 = await getTagNum();
    if (res3.status >= 200 && res3.status < 300) {
      temp.push({
        name: '标签',
        num: res3.data.total,
        route: '/tags',
      });
    } else {
      console.log(res3.data.errMsg);
    }
    setData(temp);
  };

  useMount(() => {
    Init();
  });
  return (
    <div className={s.dataCard}>
      {Boolean(data.length) &&
        data.map(i => (
          <div
            key={i.name}
            className={s.dataBtn}
            onClick={() => {
              navigate(i.route);
            }}
          >
            <div className={s.name}>{i.name}</div>
            <div className={s.num}>{i.num}</div>
          </div>
        ))}
    </div>
  );
};
export default DataCard;
