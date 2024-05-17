import cnBind from 'classnames/bind';

import { IcCheckBox } from '@/assets/icons';

import styles from './AboutPageSecondSlide.module.scss';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

const cx = cnBind.bind(styles);

const items = [
  'Еlectricity metering devices and systems',
  'Metrological equipment',
  'Energy equipment',
];

export const AboutPageSecondSlide = () => {
  return (
    <div className={cx('slide')}>
      <p className={cx('title')}>Full production cycle</p>
      {items.map((item) => (
        <div className={cx('item')} key={item}>
          <IcCheckBox />
          <span>{item}</span>
        </div>
      ))}
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100"
        className={cx('image-1')}
        src={image1}
        alt=""
      />
      <img
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="300"
        className={cx('image-2')}
        src={image2}
        alt=""
      />
      <img
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="400"
        className={cx('image-3')}
        src={image3}
        alt=""
      />
      <img
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="500"
        className={cx('image-4')}
        src={image4}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="200"
        className={cx('image-5')}
        src={image5}
        alt=""
      />
      <img
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="600"
        className={cx('image-6')}
        src={image6}
        alt=""
      />
    </div>
  );
};
