import React from 'react';
import classNames from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { navList, secondArticlesNavList } from './config';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setNavShow, navShow } from '@/src/redux/slices/navShowSlice';
import { useEventListener } from 'ahooks';
import s from './index.module.scss';

const Nav: React.FC<any> = () => {
  const navigate = useNavigate();
  const navIsShow = useAppSelector(navShow);
  const dispatch = useAppDispatch();

  useEventListener(
    'wheel',
    event => {
      event = event || window.event;
      dispatch(setNavShow(event.deltaY < 0));
    },
    { target: document.body }
  );

  return (
    <nav className={classNames(s.nav, { [s.hiddenNav]: !navIsShow })}>
      <div className={s.navContent}>
        {/* 首页 */}
        <div
          className={s.homeBtn}
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeOutlined />
        </div>
        {/* 文章 */}
        <div className={s.articlesBtn}>
          文章
          <div className={s.secondArticlesNav}>
            {secondArticlesNavList.map(item => (
              <NavLink
                className={({ isActive }) =>
                  classNames(s.secondArticlesNavBtn, { [s.activeSecondArticlesNavBtn]: isActive })
                }
                to={item.to}
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        {/* 其他导航 */}
        {navList.map(item => (
          <NavLink
            className={({ isActive }) => classNames(s.navBtn, { [s.activeNavBtn]: isActive })}
            to={item.to}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
        {/* 个人后台 */}
        <div
          className={s.userBtn}
          onClick={() => {
            navigate('/user');
          }}
        >
          <UserOutlined />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
