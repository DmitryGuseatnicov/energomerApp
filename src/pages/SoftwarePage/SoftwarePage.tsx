import cnBnd from 'classnames/bind';

import styles from './SoftwarePage.module.scss';

const cx = cnBnd.bind(styles);

export const SoftwarePage = () => {
  return (
    <div className={cx('page')}>
      SoftwarePage
    </div>
    );
};
