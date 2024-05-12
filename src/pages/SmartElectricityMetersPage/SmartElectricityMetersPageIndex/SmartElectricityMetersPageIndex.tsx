import cnBind from 'classnames/bind';

import { appRoutes } from '@/appRoutes';
import { ModelMiniCard } from '@/components/ModelMiniCard';

import CE208S7Image from '../images/CE208S7.png';
import СЕ207R7Image from '../images/СЕ207R7.png';

import styles from './SmartElectricityMetersPageIndex.module.scss';

const cx = cnBind.bind(styles);

const title = 'Smart Electricity Meters';

const content = {
  'Single-phase multi-tariff': [
    { image: СЕ207R7Image, name: 'СЕ209 + 901', link: appRoutes.smartElectricityMeters('СЕ209+901') },
    { image: СЕ207R7Image, name: 'СЕ207 R7', link: appRoutes.smartElectricityMeters('СЕ207-R7') },
    { image: CE208S7Image, name: 'CE208 S7', link: appRoutes.smartElectricityMeters('CE208-S7') },
    { image: СЕ207R7Image, name: 'CE208 C4 + 901', link: appRoutes.smartElectricityMeters('CE208-C4+901') },
    { image: СЕ207R7Image, name: 'СЕ210', link: appRoutes.smartElectricityMeters('СЕ210') },
  ],
  'Three-phase multi-tariff': [
    { image: СЕ207R7Image, name: 'СЕ309 + 901', link: appRoutes.smartElectricityMeters('СЕ309+901') },
    { image: СЕ207R7Image, name: 'CE308 S31', link: appRoutes.smartElectricityMeters('CE308-S31') },
    { image: СЕ207R7Image, name: 'CE308 S34', link: appRoutes.smartElectricityMeters('CE308-S34') },
    { image: СЕ207R7Image, name: 'СЕ307 R34', link: appRoutes.smartElectricityMeters('СЕ307-R34') },
    { image: СЕ207R7Image, name: 'CE308 C36 + СЕ901', link: appRoutes.smartElectricityMeters('CE308-C36+СЕ901') },
    { image: СЕ207R7Image, name: '310', link: appRoutes.smartElectricityMeters('310') },
  ],
};

export const SmartElectricityMetersPageIndex = () => {
  return (
    <div className={cx('page')}>
      <h1
        className={cx('title')}
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-duration="400"
      >
        {title}
      </h1>
      <div className={cx('content')}>
        {Object.entries(content).map(([blockTitle, values], i) => (
          <div
            className={cx('block')}
            key={blockTitle}
            data-aos="fade-in"
            data-aos-delay={(i + 1) * 50}
            data-aos-duration="400"
          >
            <p className={cx('block-title')}>{blockTitle}</p>
            <div className={cx('list')}>
              {values.map((item, inx) => (
                <div
                  className={cx('card')}
                  key={inx}
                  data-aos="fade-up"
                  data-aos-delay={(inx + 1) * 50}
                  data-aos-duration="400"
                >
                  <ModelMiniCard name={item.name} link={item.link} image={item.image} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
