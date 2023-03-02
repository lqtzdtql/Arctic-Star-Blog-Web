import React from 'react';
import s from './index.module.scss';
import { useToggle } from 'ahooks';
import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import Switch from './Switch';
import MarkDown from '@/src/components/MarkDown';

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const aboutMe = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈';
  const aboutSite =
    '1111111111111111111111111111111111111111111111111111111111111111111111111111111 111111111111111111111 111111111111111 111111111111';
  return (
    <Layout title={Title.About} className={s.box}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      {state && <MarkDown content={aboutMe} />}
      {!state && <MarkDown content={aboutSite} />}
    </Layout>
  );
};

export default About;
