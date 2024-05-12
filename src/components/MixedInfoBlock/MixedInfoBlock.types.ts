import type { InfoBlocksProps } from '../InfoBlocks/InfoBlocks.types';
import type { InfoChipsBlockProps } from '../InfoChipsBlock/InfoChipsBlock.types';
import type { InfoListProps } from '../InfoList/InfoList.types';

export interface MixedInfoBlockProps {
  infoList: InfoListProps;
  infoBlock: InfoBlocksProps['blocks']
  infoChips: InfoChipsBlockProps;
}
