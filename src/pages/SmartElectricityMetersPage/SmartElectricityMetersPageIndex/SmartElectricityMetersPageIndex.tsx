import cnBind from 'classnames/bind';

import { appRoutes } from '@/appRoutes';
import { ModelMiniCard } from '@/components/ModelMiniCard';

import CE208C4901Image from '../images/CE208C4+901.png';
import CE208S7Image from '../images/CE208S7.png';
import CE308C36СЕ901Image from '../images/CE308-C36+СЕ901.png';
import CE308S31Image from '../images/CE308S31.png';
import CE602MImage from '../images/CE602M.png';
import DCU805Image from '../images/DCU805.png';
import lamp from '../images/lamps.png';
import sky1 from '../images/sky1.png';
import sky2 from '../images/sky2.png';
import СЕ207R7Image from '../images/СЕ207R7.png';
import СЕ209901Image from '../images/СЕ209+901.png';
import СЕ210Image from '../images/СЕ210.png';
import СЕ307R34Image from '../images/СЕ307R34.png';
import СЕ309Image from '../images/СЕ309.png';
import CE307Image from '../images/СЕ310.png';

import styles from './SmartElectricityMetersPageIndex.module.scss';

const cx = cnBind.bind(styles);

const title = 'Smart Electricity Meters';

const content = {
  'Single-phase multi-tariff': [
    { image: СЕ209901Image, name: 'СЕ209 + 901', link: appRoutes.smartElectricityMeters('СЕ209+901') },
    { image: СЕ207R7Image, name: 'СЕ207 R7', link: appRoutes.smartElectricityMeters('СЕ207-R7') },
    { image: CE208S7Image, name: 'CE208 S7', link: appRoutes.smartElectricityMeters('CE208-S7') },
    { image: CE208C4901Image, name: 'CE208 C4 + 901', link: appRoutes.smartElectricityMeters('CE208-C4+901') },
    { image: СЕ210Image, name: 'СЕ210', link: appRoutes.smartElectricityMeters('СЕ210') },
  ],
  'Three-phase multi-tariff': [
    { image: СЕ309Image, name: 'СЕ309', link: appRoutes.smartElectricityMeters('СЕ309') },
    { image: CE308S31Image, name: 'CE308 S31', link: appRoutes.smartElectricityMeters('CE308-S31') },
    { image: 'СЕ209901Image', name: 'CE308 S34', link: appRoutes.smartElectricityMeters('CE308-S34') },
    { image: СЕ307R34Image, name: 'СЕ307 R34', link: appRoutes.smartElectricityMeters('СЕ307-R34') },
    { image: CE308C36СЕ901Image, name: 'CE308 C36 + СЕ901', link: appRoutes.smartElectricityMeters('CE308-C36+СЕ901') },
    { image: CE307Image, name: 'СЕ310', link: appRoutes.smartElectricityMeters('СЕ310') },
  ],
  'Data acquisition and metrological equipment': [
    { image: DCU805Image, name: 'DCU 805', link: appRoutes.smartElectricityMeters('DCU805') },
    { image: CE602MImage, name: 'CE602M', link: appRoutes.smartElectricityMeters('CE602M') },
    { image: 'DCU805Image', name: 'СУ203', link: appRoutes.smartElectricityMeters('СУ203') },
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
      <img className={cx('lamp')} src={lamp} alt="" />
      <img className={cx('sky-1')} src={sky1} alt="" />
      <img className={cx('sky-2')} src={sky2} alt="" />
    </div>
  );
};
