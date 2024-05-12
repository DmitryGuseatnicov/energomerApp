import type { ReactNode } from 'react';

export interface AmyInfoCardProps {
  tabsList: string[];
  activeTab: string;
  title: string;
  children: ReactNode;
  image: string;
  onTabCLick: (tab: string) => void;
  maxHeight?: string;
}
