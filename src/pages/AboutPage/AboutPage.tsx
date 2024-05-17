import cnBind from 'classnames/bind';
import { useState } from 'react';

import { IcArrow } from '@/assets/icons';

import styles from './AboutPage.module.scss';
import { AboutPageFirstSlide } from './AboutPageFirstSlide';
import { AboutPageLastSlide } from './AboutPageLastSlide';
import { AboutPageSecondSlide } from './AboutPageSecondSlide';

const cx = cnBind.bind(styles);

export const AboutPage = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleNextClick = () => {
    if (slideIndex === 3) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (slideIndex === 1) {
      setSlideIndex(3);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className={cx('about-page')}>
      <div className={cx('top')}>
        <h1 className={cx('title')}>About company</h1>
        <p className={cx('sub-title')}>Energomera - the largest manufacturer of AMI systems in Russia</p>
      </div>
      <div className={cx('slides')}>
        {slideIndex === 1 && <AboutPageFirstSlide />}
        {slideIndex === 2 && <AboutPageSecondSlide />}
        {slideIndex === 3 && <AboutPageLastSlide />}
        <button type="button" className={cx('button', { 'button-left': true })} onClick={handlePrevClick}>
          <IcArrow />
        </button>
        <button type="button" className={cx('button', { 'button-right': true })} onClick={handleNextClick}>
          <IcArrow />
        </button>
      </div>
    </div>
  );
};
