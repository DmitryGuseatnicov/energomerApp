/* eslint-disable react/no-danger */
/* eslint-disable max-len */
// /* eslint-disable max-len */
import cnBind from 'classnames/bind';

import { appRoutes } from '@/appRoutes';
import { InfoCard } from '@/components/InfoCard';

import styles from './AmiSystemPageIndex.module.scss';
import imageAmy1 from './images/amy-1.png';
import imageAmy2 from './images/amy-2.png';
import imageAmy3 from './images/amy-3.png';
import imageAmy4 from './images/amy-4.png';

const cx = cnBind.bind(styles);

const INFO_CARDS = [
  {
    title: 'AMI system based on PLC G3 communication channel',
    image: imageAmy1,
    link: appRoutes.amiSystem('PLC-G3'),
  },
  {
    title: 'AMI system based on LoRaWAN communication channel',
    image: imageAmy2,
    link: appRoutes.amiSystem('LoRaWAN'),
  },
  {
    title: 'AMI system based on wired communication channels',
    image: imageAmy3,
    link: appRoutes.amiSystem('RS-485'),
  },
  {
    title: 'AMI system based on NB-IoT communication channel',
    image: imageAmy4,
    link: appRoutes.amiSystem('GSM-GPRS'),
  },
];

const pageTitle = 'Automated System for Commercial Electric Energy Metering (AMI System)';
// eslint-disable-next-line max-len
const description = `
  <p>
    The system provides users with accurate information on the actual electric energy consumption and can be implemented using different communication channels (PLC, GPRS, RS-485, etc.) and in any facility from a block of flats to a microdistrict. All communication channels provide well-timed and accurate transmission of information on the consumption and abnormal situations, make it possible to reveal facts of electricity theft and to disconnect defaulters remotely. 
  </p>
  <p>
    All the necessary functionality is available to the system administrator. Construction of such a system will give the opportunity not only to organize prompt and reliable collection of information, but also to change over to the multi-tariff system of payment for consumed electric energy, to reduce the cost of supervisory personnel, to minimize energy losses due to monitoring, analyzing and elimination of irrational use of electric energy in common areas, and to automate billing.
  </p>
`;

export const AmiSystemPageIndex = () => {
  return (
    <div className={cx('page')}>
      <div className={cx('info')}>
        <h1 className={cx('title')} data-aos="fade-in" data-aos-delay={100}>{pageTitle}</h1>
        <div className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} data-aos="fade-in" data-aos-delay={200} />
      </div>
      <div className={cx('info-cards')}>
        {INFO_CARDS.map((card, i) => (
          <div
            data-aos="fade-left"
            data-aos-delay={(i + 1) * 150}
            key={card.link}
          >
            <InfoCard key={card.link} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};
