import cnBind from 'classnames/bind';

import { TabsPanel } from '@/components/TabsPanel';

import styles from './SmartElectricityMeterCard.module.scss';

import type { SmartElectricityMeterCardProps } from './SmartElectricityMeterCard.types';

const cx = cnBind.bind(styles);

export const SmartElectricityMeterCard = ({
  title, subTitle, tabsList, activeTab, children, maxHeight, onTabCLick,
}: SmartElectricityMeterCardProps) => {
  return (
    <div className={cx('card')}>
      <p className={cx('name')}>Smart Electricity Meters</p>
      <h1 className={cx('title')}>{title}</h1>
      <p className={cx('sub-title')}>{subTitle}</p>
      <div className={cx('tabs')}>
        <TabsPanel tabsList={tabsList} activeTab={activeTab} onClick={onTabCLick} />
      </div>
      <div className={cx('component-wrapper')} style={{ maxHeight }}>
        {children}
      </div>
    </div>
  );
};
