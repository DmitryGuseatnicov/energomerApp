import Aos from 'aos';
import cnBind from 'classnames/bind';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { appRoutes } from '@/appRoutes';
import { Header } from '@/components/Header';

import styles from './App.module.scss';

import 'aos/dist/aos.css';

const cx = cnBind.bind(styles);

export const App = () => {
  const l = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 400, offset: 0 });
  }, []);

  useEffect(() => {
    if (l.pathname === '/') {
      navigate(appRoutes.about());
    }
  }, [l, navigate]);

    return (
      <>
        <Header />
        <div className={cx('page')}>
          <Outlet />
        </div>
      </>

    );
};

