import cnBind from 'classnames/bind';
import { useState } from 'react';

import { TabsPanel } from '@/components/TabsPanel';

import styles from './AboutPage.module.scss';

const cx = cnBind.bind(styles);

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('APPLICATION');

  return (
    <div className={cx('about-page')}>
      <TabsPanel tabsList={['APPLICATION', 'DESIGN FEATURES']} activeTab={activeTab} onClick={setActiveTab} />
    </div>
  );
};
