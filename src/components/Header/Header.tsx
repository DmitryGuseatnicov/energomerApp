import cnBind from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { appRoutes } from '@/appRoutes';
import { IcLogo } from '@/assets/icons';

import styles from './Header.module.scss';

import type { HeaderProps } from './Header.types';

const cx = cnBind.bind(styles);

export const Header: React.FC<HeaderProps> = () => {
    return (
      <header className={cx('header')}>
        <div className={cx('inner')}>
          <IcLogo className={cx('logo')} />
          <div className={cx('navigation')}>
            <NavLink className={({ isActive }) => cx('link', { isActive })} to={appRoutes.about()}>
              about
            </NavLink>
            <NavLink className={({ isActive }) => cx('link', { isActive })} to={appRoutes.amiSystem()}>
              AMI SYSTEM
            </NavLink>
            <NavLink className={({ isActive }) => cx('link', { isActive })} to={appRoutes.smartElectricityMeters()}>
              SMART ELECTRICITY METERS
            </NavLink>
            <NavLink className={({ isActive }) => cx('link', { isActive })} to={appRoutes.software()}>
              SOFTWARE
            </NavLink>
          </div>
        </div>
      </header>
    );
};
