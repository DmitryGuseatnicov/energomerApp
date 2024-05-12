export interface InfoListProps {
  index?: number;
  title?: string;
  list: {
    title: string,
    children?: InfoListProps['list']
  }[]
}
