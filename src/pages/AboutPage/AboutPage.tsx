import cnBind from 'classnames/bind';
import { useState } from 'react';

import image from '@/assets/images/aa2a34f2ccb5148ea4a13ccc1c04bf23.png';
import { ModelMiniCard } from '@/components/ModelMiniCard';
import { TabsPanel } from '@/components/TabsPanel';
import { appRoutes } from '@/routing';

import styles from './AboutPage.module.scss';

const cx = cnBind.bind(styles);

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('APPLICATION');

  return (
    <div className={cx('about-page')}>
      <TabsPanel tabsList={['APPLICATION', 'DESIGN FEATURES']} activeTab={activeTab} onClick={setActiveTab} />
      <ModelMiniCard
        link={appRoutes.testPage()}
        image={image}
        name="СЕ209 + 901"
      />
    </div>
  );
};
