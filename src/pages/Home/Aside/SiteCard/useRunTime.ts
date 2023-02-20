import { useMount, useSafeState } from 'ahooks';
import dayjs from 'dayjs';

import { startTime } from '@/src/constant';

export const useRunTime = () => {
  const [runTime, setRunTime] = useSafeState(0);

  useMount(() => {
    const nowTime = new Date().getTime();
    const newStartTime = new Date(startTime).getTime();
    const runTime = dayjs(nowTime).diff(dayjs(newStartTime), 'days');
    console.log('time', runTime);
    setRunTime(runTime);
  });

  return runTime;
};
