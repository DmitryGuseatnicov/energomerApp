import cnBind from 'classnames/bind';

import { TabsPanel } from '@/components/TabsPanel';

import styles from './AmyInfoCard.module.scss';

import type { AmyInfoCardProps } from './AmyInfoCard.types';

const cx = cnBind.bind(styles);

export const AmyInfoCard = ({
  tabsList, activeTab, title, onTabCLick, children, image, maxHeight,
}: AmyInfoCardProps) => {
  return (
    <div className={cx('amy-info-card')}>
      <TabsPanel tabsList={tabsList} activeTab={activeTab} onClick={onTabCLick} />
      <h1
        className={cx('title')}
        data-aos="fade-in"
        data-aos-offset="200"
      >{title}
      </h1>
      <div className={cx('component-wrapper')} style={{ maxHeight }}>{children}</div>
      <div className={cx('image-wrapper')}>
        <img
          src={image}
          alt="schema"
        />
      </div>
    </div>
  );
};
