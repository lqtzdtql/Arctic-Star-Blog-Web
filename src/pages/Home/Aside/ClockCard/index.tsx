import React from 'react';
import { getClock } from '@/src/pages/Home/Aside/ClockCard/getClock';
import s from './index.module.scss';
import { useRafInterval, useSafeState } from 'ahooks';

interface clockData {
  hour: number;
  minute: number;
  second: number;
}

const ClockCard: React.FC = () => {
  const [clockData, setClockData] = useSafeState<clockData>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useRafInterval(
    () => {
      const temp = getClock();
      setClockData(temp);
    },
    1000,
    { immediate: true }
  );

  return (
    <div className={s.clockCard}>
      <div className={s.dial}>
        <div className={s.zero} />
        <div className={s.six} />
        <div className={s.three} />
        <div className={s.nine} />
      </div>
      <div className={s.container}>
        <div className={s.dot} />
        <div className={s.clockMinuteLine} style={{ transform: `rotateZ(${clockData.minute}deg)` }} />
        <div className={s.clockHourLine} style={{ transform: `rotateZ(${clockData.hour}deg)` }} />
        <div className={s.clockSecondLine} style={{ transform: `rotateZ(${clockData.second}deg)` }} />
      </div>
    </div>
  );
};

export default ClockCard;
