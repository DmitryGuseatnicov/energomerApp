/* eslint-disable react/no-danger */
import cnBind from 'classnames/bind';

import styles from './CriteriaList.module.scss';

import type { CriteriaListProps } from './CriteriaList.types';

const cx = cnBind.bind(styles);

export const CriteriaList = ({ list, title }: CriteriaListProps) => {
    return (
      <>
        {title && <p className={cx('title')}>{title}</p>}
        <div className={cx('criteria-list', { 'criteria-list-anchor': true })}>
          {list.map((item, i) => (
            <div
              className={cx('item')}
              key={item.key}
              data-aos="fade-in"
              data-aos-offset="0"
              data-aos-delay={(i + 1) * 50}
              data-aos-duration="400"
              data-aos-anchor=".criteria-list-anchor"
            >
              <div className={cx('key')}>{item.key}</div>
              <div className={cx('value')} dangerouslySetInnerHTML={{ __html: item.value }} />
            </div>
        ))}
        </div>
      </>

    );
};
