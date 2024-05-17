import cnBind from 'classnames/bind';

import styles from './InfoBlocks.module.scss';

import type { InfoBlocksProps } from './InfoBlocks.types';

const cx = cnBind.bind(styles);

export const InfoBlocks = ({ blocks }: InfoBlocksProps) => {
  return (
    <div className={cx('info-blocks')}>
      {blocks.map((block, i) => (
        <div className={cx('block')} key={block.title} data-aos="fade-in" data-aos-delay={(i + 1) * 100}>
          <p className={cx('title')}>{block.title}</p>
          <p className={cx('description')}>{block.description}</p>
        </div>
      ))}
    </div>
  );
};
