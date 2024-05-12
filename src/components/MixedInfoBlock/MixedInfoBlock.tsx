import cnBind from 'classnames/bind';

import { InfoBlocks } from '../InfoBlocks';
import { InfoChipsBlock } from '../InfoChipsBlock';
import { InfoList } from '../InfoList';

import styles from './MixedInfoBlock.module.scss';

import type { MixedInfoBlockProps } from './MixedInfoBlock.types';

const cx = cnBind.bind(styles);

export const MixedInfoBlock = ({ infoChips, infoList, infoBlock }: MixedInfoBlockProps) => {
  return (
    <div className={cx('mixed-block')}>
      <InfoBlocks blocks={infoBlock} />
      <div className={cx('bottom-content')}>
        <div className={cx('item')}><InfoChipsBlock title={infoChips.title} chips={infoChips.chips} /></div>
        <div className={cx('item')}><InfoList title={infoList.title} list={infoList.list} /></div>
      </div>
    </div>
  );
};
