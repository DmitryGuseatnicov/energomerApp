import cnBind from 'classnames/bind';

import styles from './Chip.module.scss';

import type { ChipProps } from './Chip.types';

const cx = cnBind.bind(styles);

export const Chip = ({ text, background }: ChipProps) => {
  return (
    <div className={cx('chip')} style={{ background }}>
      {text}
    </div>
  );
};
