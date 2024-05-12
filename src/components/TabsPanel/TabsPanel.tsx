import cnBind from 'classnames/bind';

import styles from './TabsPanel.module.scss';

import type { TabsPanelProps } from './TabsPanel.types';

const cx = cnBind.bind(styles);

export const TabsPanel = ({ tabsList, activeTab, onClick }: TabsPanelProps) => {
    return (
      <div className={cx('tabs-panel')}>
        {tabsList.map((tab) => (
          <button
            key={tab}
            type="button"
            className={cx('tab', { isActive: tab === activeTab })}
            onClick={() => onClick?.(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
};
