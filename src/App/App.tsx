import Aos from 'aos';
import cnBind from 'classnames/bind';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

import styles from './App.module.scss';

import 'aos/dist/aos.css';

const cx = cnBind.bind(styles);

export const App = () => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

    return (
      <>
        <Header />
        <div className={cx('page')}>
          <Outlet />
        </div>
      </>

    );
};

