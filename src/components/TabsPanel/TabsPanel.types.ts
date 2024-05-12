export interface TabsPanelProps {
  tabsList: string[];
  activeTab?: string;
  onClick?: (tab: string) => void;
}
