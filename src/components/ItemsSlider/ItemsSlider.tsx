import cnBind from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IcArrow } from '@/assets/icons';

import styles from './ItemsSlider.module.scss';

import 'swiper/css';

import type { ItemsSliderProps } from './ItemsSlider.types';
import type { SwiperRef } from 'swiper/react';

const cx = cnBind.bind(styles);

export const ItemsSlider = ({ slides }: ItemsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>();
  const sliderRef = useRef<SwiperRef | null>(null);

  const handleNextClick = () => {
    sliderRef.current?.swiper.slideNext();
    setCurrentIndex(sliderRef.current?.swiper.activeIndex);
  };

  const handlePrevClick = () => {
    sliderRef.current?.swiper.slidePrev();
    setCurrentIndex(sliderRef.current?.swiper.activeIndex);
  };

  useEffect(() => {
    setCurrentIndex(sliderRef.current?.swiper.activeIndex);
  }, []);

  return (
    <div className={cx('items-slider')}>
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={cx('slide')}>
              <img className={cx('image')} src={slide.image} alt="" />
              <p className={cx('title')}>{slide.title}</p>
              <p className={cx('sub-title')}>{slide.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={cx('prev', { prev: true })}
        type="button"
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        <IcArrow />
      </button>
      <button
        className={cx('next', { next: true })}
        type="button"
        onClick={handleNextClick}
        disabled={currentIndex === slides.length - 4}
      >
        <IcArrow />
      </button>
    </div>

    );
};
