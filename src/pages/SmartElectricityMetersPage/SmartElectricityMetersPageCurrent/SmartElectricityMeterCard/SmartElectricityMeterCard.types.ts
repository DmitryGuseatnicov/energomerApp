import type { ReactNode } from 'react';

export interface SmartElectricityMeterCardProps {
  tabsList: string[];
  activeTab: string;
  title: string;
  subTitle: string;
  children: ReactNode;
  onTabCLick: (tab: string) => void;
  maxHeight?: string;
}
