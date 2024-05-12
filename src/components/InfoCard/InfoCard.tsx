import cnBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './InfoCard.module.scss';

import type { InfoCardProps } from './InfoCard.types';

const cx = cnBind.bind(styles);

export const InfoCard = ({ image, title, link }: InfoCardProps) => {
    return (
      <Link className={cx('info-cart')} to={link}>
        <div className={cx('image-wrapper')}>
          <img src={image} alt={title} />
        </div>
        <p className={cx('title')}>{title}</p>
      </Link>
    );
};
