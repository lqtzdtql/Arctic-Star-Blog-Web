import React from 'react';
import s from './index.module.scss';
import { useMount, useSafeState } from 'ahooks';
import { getView } from '@/src/utils/apis/view';
import { useRunTime } from './useRunTime';

const SiteCard: React.FC = () => {
  const [view, setView] = useSafeState(0);
  const runTime = useRunTime();
  useMount(async () => {
    const res = await getView();
    if (res.status >= 200 && res.status < 300) {
      setView(res.data.view);
    } else {
      console.log(res.data.errMsg);
    }
  });

  return (
    <div className={s.siteCard}>
      <div className={s.item}>
        <div className={s.key}>总浏览量</div>
        <div className={s.value}>{view}</div>
      </div>
      <div className={s.item}>
        <div className={s.key}>运行时间</div>
        <div className={s.value}>{`${runTime}天`}</div>
      </div>
    </div>
  );
};

export default SiteCard;
