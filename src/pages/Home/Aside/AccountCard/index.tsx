import { useAccount } from '@/src/pages/Home/Aside/AccountCard/useAccount';
import React from 'react';
import IconBtn from './IconBtn';
import s from './index.module.scss';

const AccountCard: React.FC = () => {
  const accountData = useAccount();

  return (
    <div className={s.accountCard}>
      {accountData.map(i => (
        <IconBtn key={i.id} isLink={i.isLink} link={i.link || ''} children={i.children} content={i.content || null} />
      ))}
    </div>
  );
};

export default AccountCard;
