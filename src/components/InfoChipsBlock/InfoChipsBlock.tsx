import cnBind from 'classnames/bind';

import styles from './InfoChipsBlock.module.scss';

import type { InfoChipsBlockProps } from './InfoChipsBlock.types';

const cx = cnBind.bind(styles);

export const InfoChipsBlock = ({ title, chips }: InfoChipsBlockProps) => {
  return (
    <div className={cx('info-chips-block')} data-aos="fade-in">
      {title && <p className={cx('title')}>{title}</p>}
      <div className={cx('chips')}>
        {chips.map((item) => (
          <div className={cx('chip')} key={item.text}>{item.text}</div>
        ))}
      </div>
    </div>
  );
};
