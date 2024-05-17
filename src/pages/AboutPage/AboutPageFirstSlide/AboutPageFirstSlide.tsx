/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import cnBind from 'classnames/bind';

import styles from './AboutPageFirstSlide.module.scss';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';

const cx = cnBind.bind(styles);

export const AboutPageFirstSlide = () => {
  return (
    <div className={cx('slide')}>
      <div className={cx('info')}>
        <div className={cx('text-block-1')}>
          <p>The company's production facilities comprise three factories in Russia and Belarus. The use of the world's best R&D technologies, as well as the integration of world achievements into the company's production processes, is carried out by its own digital competence center - Corporate institute of electrotechnical engineering. The company realizing the implementation and support of its own projects, providing a full range of engineering services in the territory of the Russian Federation, CIS countries and abroad.</p>
          <p>The company is a pioneer in the segment of electronic electricity metering devices in Russia and today holds one of the leading positions in the industry. The enterprises of JSC Energomera producing over 3 million metering devices per year. Every third electric energy meter and every second telecommunication cabinet in Russia are branded as Energomera. The company's products comply with current international market standards, including products which meets the standards for STS prepaid accounting systems.</p>
        </div>
        <div className={cx('text-block-2')}>
          <p>Among the technological solutions: a wide range of smart metering devices with a variety of interfaces and communication protocols, including hybrids, which are necessary for building electricity metering systems, as well as energy equipment – a telemechanic cabinet, transformer substations, vacuum circuit breaker, switchgear, ACR’s and other equipment.</p>
          <p>The scope of activity of «Energomera» also includes the development and implementation of software products for monitoring and management of a local electrotechnical complex and also the integration of proprietary equipment into software solutions which are used in the industry. The company permanently improves applying technologies. The systems which built on the basis of «Energomera» products are distinguished by the highest percentage of collection, simplicity of implementation and the lowest cost of the metering point in the industry.
          </p>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="100"
        className={cx('image-1')}
        src={image1}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="150"
        className={cx('image-2')}
        src={image2}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="100"
        className={cx('image-3')}
        src={image3}
        alt=""
      />
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="300"
        className={cx('image-4')}
        src={image4}
        alt=""
      />
      <img
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="300"
        className={cx('image-5')}
        src={image5}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="400"
        className={cx('image-6')}
        src={image6}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="400"
        className={cx('image-7')}
        src={image7}
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="400"
        className={cx('image-8')}
        src={image8}
        alt=""
      />
    </div>
  );
};
