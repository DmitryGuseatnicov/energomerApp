import cnBind from 'classnames/bind';

import styles from './AboutPageLastSlide.module.scss';
import image1 from './images/image1.png';
import image10 from './images/image10.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import image9 from './images/image9.png';

const cx = cnBind.bind(styles);

export const AboutPageLastSlide = () => {
  return (
    <div className={cx('slide')}>
      <h1 className={cx('title')}>3,5 mln metering devices every year produces over</h1>
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100"
        className={cx('image-1')}
        src={image1}
        alt=""
      />
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="150"
        className={cx('image-2')}
        src={image2}
        alt=""
      />
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="200"
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
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="500"
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
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="250"
        className={cx('image-7')}
        src={image7}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="300"
        className={cx('image-8')}
        src={image8}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="350"
        className={cx('image-9')}
        src={image9}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="400"
        className={cx('image-10')}
        src={image10}
        alt=""
      />
    </div>
  );
};
