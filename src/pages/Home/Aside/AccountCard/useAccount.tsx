import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import { githubUrl, QQ_QRCode, weChatQRCode } from '@/src/constant';
import { ReactNode } from 'react';
import s from './index.module.scss';

type accountData = {
  isLink: boolean;
  link?: string;
  content?: ReactNode;
  children: ReactNode | string;
  id: number;
};

export const useAccount: () => accountData[] = () => {
  return [
    {
      id: 0,
      isLink: true,
      link: githubUrl,
      children: <GithubOutlined />,
    },
    {
      id: 1,
      isLink: false,
      children: <WechatOutlined />,
      content: <img src={weChatQRCode} className={s.img} alt="weChatQRCode" />,
    },
    {
      id: 2,
      isLink: false,
      children: <QqOutlined />,
      content: <img src={QQ_QRCode} className={s.img} alt="QQ_QRCode" />,
    },
  ];
};
