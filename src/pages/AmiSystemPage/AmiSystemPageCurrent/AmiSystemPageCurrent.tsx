/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import cnBind from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';

import { CriteriaList } from '@/components/CriteriaList';
import { InfoList } from '@/components/InfoList';
import { ItemsSlider } from '@/components/ItemsSlider';

import styles from './AmiSystemPageCurrent.module.scss';
import { AmyInfoCard } from './AmyInfoCard';
import GSMGPRSImageCard from './images/GSM-GPRS.png';
import image1 from './images/image-1.png';
import image10 from './images/image-10.png';
import image11 from './images/image-11.png';
import image12 from './images/image-12.png';
import image2 from './images/image-2.png';
import image3 from './images/image-3.png';
import image4 from './images/image-4.png';
import image5 from './images/image-5.png';
import image6 from './images/image-6.png';
import image7 from './images/image-7.png';
import image8 from './images/image-8.png';
import image9 from './images/image-9.png';
import LoRaWANImageCard from './images/LoRaWAN.png';
import PLCGImageCard from './images/PLCG3.png';
import RS485ImageCard from './images/RS485.png';

const cx = cnBind.bind(styles);

const PAGES_STATE = {
  'PLC-G3': {
    title: 'AMI System Based on PLC G3 Communication Channel',
    description: `
      <p>
        PLC (Power Line Communication) is a technology for data exchange directly over power lines. For the creation of its AMI systems, the “Energomera” company has chosen one of the most modern standards,G3-PLC, the development of which is carried out by the alliance of the same name, uniting the world's leading manufacturers of microelectronics and power equipment.
      </p>
      <p>
        OFDM modulation is used for data transmission, and its application significantly increases the interference immunity and bandwidth of the communication channel in comparison with competing technologies. As a result, efficient collection of data and event logs from electric energy meters is provided, even in worn-out electric networks.
      </p>
      <p>
        The use of this data collection technology is recommended at those AMI facilities where a large amount of collected data is expected and a prompt response of the equipment to operator commands is required.
      </p>
    `,
    slides: [
      {
        title: 'CE208-S7 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff active and reactive energy meter',
        image: image1,
      },
      {
        title: 'СE208-C4 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image2,
      },
      {
        title: 'CE308-S34 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image3,
      },
      {
        title: 'CE308-S31 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image4,
      },
      {
        title: 'CE308-C36 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image5,
      },
      {
        title: 'CE207-R7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image6,
      },
      {
        title: 'CE207-S7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image7,
      },
      {
        title: 'СE307-R34',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image8,
      },
      {
        title: 'СE307-S35',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image9,
      },
      {
        title: 'СЕ805М EXT1',
        subTitle: ' Data concentrator unit',
        image: image10,
      },
    ],
    infoCards: [
      {
        tabName: 'characteristics',
        title: 'PLC G3 communication channel characteristics',
        image: PLCGImageCard,
        Component: CriteriaList,
        maxHeight: '349rem',
        componentProps: {
          list: [
            { key: 'Data transmission speed', value: 'up to 45 kbps' },
            { key: 'Number of supported devices within one coordinator', value: 'up to 1000 devices' },
            { key: 'Encryption', value: 'AES-128' },
            { key: 'Operating frequency of data transmission', value: '30 – 90 kHz' },
            { key: 'Supported modulation methods', value: 'ROBO, DBPSK, DQPSK, D8PSK' },
          ],
        },
      },
      {
        tabName: 'ADVANTAGES',
        title: 'ADVANTAGES OF PLC G3',
        image: PLCGImageCard,
        Component: InfoList,
        maxHeight: '300rem',
        componentProps: {
          list: [
            { title: 'High transmissionspeedof large amounts of data' },
            { title: 'Compliance with European G3-PLC standard' },
            { title: 'Optimal for data collection via DLMS/SPODES protocol' },
            { title: 'High interference immunity ensures communication quality even in worn-out electric networks' },
          ],
        },
      },
    ],
  },

  LoRaWAN: {
    title: 'AMI System Based on LoRa WAN Communication Channel',
    description: `
      <p>
        LoRaWAN – is the implementation of a low-power wide-area network (LPWAN - low-power wide-area network) using LoRa (Long Range). Modulation.
      </p>
      <p>
        The key feature of this communication channel is a significant communication range: up to 15 kilometers in the absence of obstacles between the receiver and the transmitter. Another advantage of the technology is its low power consumption, which determines the prospects for its use in battery-powered devices.
      </p>
      <p>
        The “Energomera” company has developed electric energy meters with built-in LoRaWAN communication modules. The implementation of AMI systems is carried out in partnership with a telecommunications operator, which provides the opportunity to use an existing “cloud” infrastructure (the collected data is stored on the operator's servers) or to deploy its own closed network (the collected data is stored in the power supply organization). It provides the ability to integrate the system into various program complexes for data analysis and providing consumers with personal accounts displaying information on energy consumption.
      </p>
      <p>
        The use of this communication channel is recommended at small AMI facilities, where basic energy consumption data and basic event logs are collected.
      </p>
    `,
    slides: [
      {
        title: 'CE208-S7 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff active and reactive energy meter',
        image: image1,
      },
      {
        title: 'СE208-C4 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image2,
      },
      {
        title: 'CE308-S34 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image3,
      },
      {
        title: 'CE308-S31 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image4,
      },
      {
        title: 'CE308-C36 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image5,
      },
    ],
    infoCards: [
      {
        tabName: 'characteristics',
        title: 'PLC G3 communication channel characteristics',
        image: LoRaWANImageCard,
        Component: CriteriaList,
        maxHeight: '349rem',
        componentProps: {
          list: [
            { key: 'Communication range', value: 'up to 5 km in urban environment <br /> up to 15 kmalong the line of sight' },
            { key: 'Frequency range', value: '864 – 870 MHz' },
            { key: 'Number of frequency channels', value: '8 (channel width: 125 kHz' },
            { key: 'Transmitter power (meter)', value: '25 mW' },
            { key: 'Transmitter power (base station', value: 'up to 100 mW' },
            { key: 'Data transmission speed', value: '300 – 5120 bps' },
            { key: 'Encryption', value: 'AES-128' },
          ],
        },
      },
      {
        tabName: 'ADVANTAGES',
        title: 'ADVANTAGES OF PLC G3',
        image: LoRaWANImageCard,
        Component: InfoList,
        maxHeight: '300rem',
        componentProps: {
          list: [
            { title: 'High communication range – up to 5 km in a city and up to 15 km in rural area' },
            { title: 'Efficiency and ease of organization in urban environment' },
            { title: 'Easy integration into various software complexes' },
            { title: 'Optimal system cost due to a small number of base stations' },
          ],
        },
      },
    ],
  },

  'RS-485': {
    title: 'AMI System Based on Wired RS-485 Communication Channel',
    description: `
      <p>
        RS-485 (Recommended Standard 485 or EIA/TIA-485-A) – is a widely used communication technology via twisted paircable. The communication channel provides stability and efficiency of data collection from electric energy meters, but their connection requires the laying of a twisted pair cable and installation of branching devices. Properly designed wired networks allow implementing efficient communications in industrial applications and systems for automated control of the production process, while ensuring immunity to interference, electrostatic discharges and overvoltage.
      </p>
      <p>
        It is recommended to use RS-485 in AMI systems on the territory of industrial facilities and in apartment buildings with chambersdesignated for laying communication lines. The solution is the most cost-effective for use in apartment buildings.
      </p>
    `,
    slides: [
      {
        title: 'CE208-S7 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff active and reactive energy meter',
        image: image1,
      },
      {
        title: 'CE308-S34 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image3,
      },
      {
        title: 'CE308-S31 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image4,
      },
      {
        title: 'CE207-R7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image6,
      },
      {
        title: 'CE207-S7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image7,
      },
      {
        title: 'СE307-R34',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image8,
      },
      {
        title: 'СE307-S35',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image9,
      },
      {
        title: 'СЕ805М EXT1',
        subTitle: 'Data concentrator unit',
        image: image10,
      },
      {
        title: 'СЕ805M (B,E)',
        subTitle: 'Data concentrator unit',
        image: image11,
      },
    ],
    infoCards: [
      {
        tabName: 'ADVANTAGES',
        title: 'ADVANTAGES OF PLC G3',
        image: RS485ImageCard,
        Component: InfoList,
        maxHeight: '300rem',
        componentProps: {
          list: [
            { title: 'The best quality for a reasonable price' },
            { title: 'Effective for systems with a small number of metering points' },
            { title: 'Stability and efficiency of data collection from metering devices' },
            { title: 'Cost-effective solution for apartment buildings' },
          ],
        },
      },
    ],
  },

  'GSM-GPRS': {
    title: 'AMI System Based on GSM/GPRS/3Gand NB-IoT Communication Channels',
    description: `
      <p>
        Mobile networks can be used to collect data from separately located metering points. The product line of the Energomera company includes meters with widely used GSM/GPRS/3G technologies, as well as with the promising NB-IoT Internet of Things communication channel.
      </p>
      <p>
        NB-IoT (Narrow Band Internet of Things) – is a cellular communication standard for telemetry devices with low data exchange volumes. It was developed by the 3GPP consortium as part of work on new generation cellular network standards. The communication channel is intended to replace the aging technologies of the early generations of mobile communications, such as GPRS and EDGE.
      </p>
      <p>
        The use of the given communication channels in an AMI system is recommended for a small number of installed meters or at metering points that are significantly remote from the DCU.
      </p>
    `,
    slides: [
      {
        title: 'CE208-S7 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff active and reactive energy meter',
        image: image1,
      },
      {
        title: 'СE208-C4 SPODES / DLMS',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image2,
      },
      {
        title: 'CE308-S34 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image3,
      },
      {
        title: 'CE308-S31 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image4,
      },
      {
        title: 'CE308-C36 SPODES / DLMS',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image5,
      },
      {
        title: 'CE207-R7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image6,
      },
      {
        title: 'CE207-S7',
        subTitle: 'Single-phase multi-tariff electric energy meter',
        image: image7,
      },
      {
        title: 'СE307-R34',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image12,
      },
      {
        title: 'СE307-S35',
        subTitle: 'Three-phase multi-tariff active and reactive energy meter',
        image: image9,
      },
    ],
    infoCards: [
      {
        tabName: 'ADVANTAGES',
        title: 'ADVANTAGES OF PLC G3',
        image: GSMGPRSImageCard,
        Component: InfoList,
        maxHeight: '300rem',
        componentProps: {
          list: [
            { title: 'Effective for systems with a small number of metering devices' },
            { title: 'Optimal for communication with remote metering points' },
            { title: 'High stability of communication quality' },
            { title: 'Absence of the DCU level provides a reduction in the system cost' },
            { title: 'Potential for use as an addition to already existing AMI systems' },
          ],
        },
      },
    ],
  },
};

export const AmiSystemPageCurrent = ({ name }: { name: string }) => {
  const currentInfo = useMemo(() => PAGES_STATE[name as keyof typeof PAGES_STATE], [name]);

  const [currentTab, setCurrentTab] = useState('');

  const tabsList = useMemo(() => currentInfo.infoCards.map((item) => item.tabName), [currentInfo.infoCards]);
  const currentTabInfo = useMemo(() => currentInfo.infoCards.find((item) => item.tabName === currentTab), [currentInfo.infoCards, currentTab]);

  useEffect(() => {
    if (!currentTab) {
      setCurrentTab(tabsList[0]);
    }
  }, [currentTab, tabsList]);

  return (
    <div className={cx('page')}>
      <div className={cx('left-block')}>
        <h1 className={cx('title')} data-aos="fade-in">{currentInfo.title}</h1>
        <div className={cx('description')} dangerouslySetInnerHTML={{ __html: currentInfo.description }} data-aos="fade-in" />
        <div
          className={cx('slider')}
          data-aos="fade-up"
        >
          <ItemsSlider slides={currentInfo.slides ?? []} />
        </div>
      </div>
      <div
        className={cx('right-block')}
        data-aos="fade-left"
      >
        <AmyInfoCard
          title={currentTabInfo?.title ?? ''}
          tabsList={tabsList}
          activeTab={currentTab}
          image={currentTabInfo?.image ?? ''}
          onTabCLick={setCurrentTab}
          maxHeight={currentTabInfo?.maxHeight}
        >
          {currentTabInfo?.Component?.(currentTabInfo.componentProps as any)}
        </AmyInfoCard>
      </div>
    </div>
  );
};
