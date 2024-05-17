import cnBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import { IcArrowInput } from '@/assets/icons';

import styles from './ModelMiniCard.module.scss';

import type { ModelMiniCardProps } from './ModelMiniCard.types';

const cx = cnBind.bind(styles);

export const ModelMiniCard = ({ name, link, image }: ModelMiniCardProps) => {
  return (
    <Link className={cx('model-mini-card')} to={link}>
      <div className={cx('image')}>
        <img className={cx('image-img')} src={image} alt="model" />
      </div>
      <p className={cx('name')}>
        <span>{name}</span>
        <IcArrowInput />
      </p>
    </Link>
  );
};
