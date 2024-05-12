import cnBind from 'classnames/bind';

import { IcBullet } from '@/assets/icons';

import styles from './InfoList.module.scss';

import type { InfoListProps } from './InfoList.types';

const cx = cnBind.bind(styles);

export const InfoList = ({ list, index = 0, title }: InfoListProps) => {
  return (
    <>
      {title && <p className={cx('title-list')}>{title}</p>}
      <ul
        className={cx('info-list', { 'info-list-anchor': true })}
      >
        {list.map((item, i) => (
          <li
            className={cx('list-item')}
            key={item.title}
            data-aos="fade-in"
            data-aos-offset="0"
            data-aos-delay={(i + 1) * 50}
            data-aos-duration="400"
            data-aos-anchor=".info-list-anchor"
            style={index ? { paddingLeft: `${100 + index * 25}rem` } : undefined}
          >
            <span className={cx('title', { withChildren: index })}>
              <IcBullet />
              {item.title}
            </span>
            {item.children?.length && item.children.length > 0 && (
              <InfoList list={item.children} index={index + 1} />
            )}
          </li>
      ))}
      </ul>
    </>
  );
};
