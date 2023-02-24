import React from 'react';
import s from './index.module.scss';
import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { shuffleArray } from '@/src/utils/tools/shuffleArray';
import { useMount, useSafeState } from 'ahooks';
import { getLink } from '@/src/utils/apis/link';
import LinkItem from './LinkItem';

interface linkDataProp {
  _id: string;
  title: string;
  des: string;
  avatar: string;
  link: string;
}

const Link: React.FC = () => {
  const [linkData, setLinkData] = useSafeState<linkDataProp[]>([]);

  useMount(async () => {
    const res = await getLink();
    if (res.status >= 200 && res.status < 300) {
      setLinkData(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  });
  return (
    <Layout title={Title.Link} className={s.box}>
      {shuffleArray(linkData).map((item: linkDataProp) => (
        <LinkItem key={item._id} title={item.title} des={item.des} avatar={item.avatar} link={item.link} />
      ))}
    </Layout>
  );
};

export default Link;
