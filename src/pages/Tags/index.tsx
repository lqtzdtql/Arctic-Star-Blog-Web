import React from 'react';
import s from './index.module.scss';
import { useMount, useSafeState } from 'ahooks';
import { getAllTags } from '@/src/utils/apis/tag';
import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { useNavigate } from 'react-router-dom';

interface tagDataProp {
  _id: string;
  name: string;
}

const Tags: React.FC = () => {
  const [tagsData, setTagsData] = useSafeState<tagDataProp[]>([]);
  const navigate = useNavigate();

  const getTagsData = async () => {
    const res = await getAllTags();
    if (res.status >= 200 && res.status < 300) {
      setTagsData(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  };

  useMount(() => {
    getTagsData();
  });

  return (
    <Layout title={Title.Tags} className={s.tagsBox}>
      {Boolean(tagsData.length) &&
        tagsData.map((item: tagDataProp) => (
          <span
            className={s.tagItem}
            key={item._id}
            onClick={() => {
              navigate(`/tag/${item._id}`);
            }}
            style={{ backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})` }}
          >
            {item.name}
          </span>
        ))}
    </Layout>
  );
};

export default Tags;
