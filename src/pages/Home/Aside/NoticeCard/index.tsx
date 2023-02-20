import React from 'react';
import s from './index.module.scss';
import { getNotice } from '@/src/utils/apis/notice';
import { useMount, useSafeState } from 'ahooks';
import dayjs from 'dayjs';

interface noticeData {
  text: string;
  create_at: number;
}

const NoticeCard: React.FC = () => {
  const [noticeData, setNoticeData] = useSafeState<noticeData>({
    text: '',
    create_at: Date.now(),
  });
  const setNotice = async () => {
    const res = await getNotice();
    if (res.status >= 200 && res.status < 300) {
      setNoticeData({
        text: res.data[0].text,
        create_at: res.data[0].create_at,
      });
      console.log('data', res.data[0]);
    } else {
      console.log(res.data.errMsg);
    }
  };
  useMount(() => {
    setNotice();
  });

  return (
    <div className={s.noticeCard}>
      <div className={s.noticeData}>
        <div className={s.notice}>{noticeData.text}</div>
        <div className={s.dateBox}>
          <div className={s.date}>{dayjs(noticeData.create_at).format('YYYY-MM-DD')}</div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
