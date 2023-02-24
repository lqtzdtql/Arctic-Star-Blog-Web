import Layout from '@/src/components/Layout';
import { Title } from '@/src/constant';
import { getLog } from '@/src/utils/apis/log';
import { useMount, useSafeState } from 'ahooks';
import React from 'react';
import LogItem from './LogItem';
import s from './index.module.scss';

interface logDataProp {
  _id: string;
  date: number;
  logContent: string[];
}

const Log: React.FC = () => {
  const [logData, setLogData] = useSafeState<logDataProp[]>([]);

  useMount(async () => {
    const res = await getLog();
    if (res.status >= 200 && res.status < 300) {
      setLogData(res.data);
    } else {
      console.log(res.data.errMsg);
    }
  });

  return (
    <Layout title={Title.Log} className={s.card}>
      {Boolean(logData.length) &&
        logData.map((item: logDataProp) => <LogItem key={item._id} date={item.date} logContent={item.logContent} />)}
    </Layout>
  );
};

export default Log;
