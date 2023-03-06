import React from 'react';
import s from './index.module.scss';
import { useToggle } from 'ahooks';
import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import Switch from './Switch';
import MarkDown from '@/src/components/MarkDown';

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const aboutMe = `Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  `;
  const aboutSite = `Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  `;

  return (
    <Layout title={Title.About} className={s.box}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      {state && <MarkDown content={aboutMe} />}
      {!state && <MarkDown content={aboutSite} />}
    </Layout>
  );
};

export default About;
