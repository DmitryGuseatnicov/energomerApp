/* eslint-disable max-len */
import cnBind from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Chip } from '@/components/Chip';
import { CriteriaList } from '@/components/CriteriaList';
import { InfoBlocks } from '@/components/InfoBlocks';
import { InfoList } from '@/components/InfoList';
import { MixedInfoBlock } from '@/components/MixedInfoBlock';
import { ModelBlock } from '@/components/ModelBlock';

import { SmartElectricityMeterCard } from './SmartElectricityMeterCard';
import styles from './SmartElectricityMetersPageCurrent.module.scss';

const cx = cnBind.bind(styles);

const PAGES_STATE = {
  'CE308-S31': {
    modelPath: `${window.location.origin}/models/some.fbx`,
    title: 'CE308 DLMS',
    subTitle: 'Three-phase multi-tariff active and reactive energy meter',
    scale: 4,
    chips: [
      { text: 'Optical Port', background: '#45798B' },
      { text: 'RS485', background: '#709F3E' },
      { text: 'RF433 MHz', background: '#74B1DC' },
      { text: 'PLC', background: '#C8752A' },
      { text: 'PLC + RF', background: '#F0C242' },
      { text: 'GSM/GPRS', background: '#74B1DC' },
      { text: 'ЕTHERNET', background: 'linear-gradient(90deg, #709F3E 0%, #74B1DC 100%)' },
    ],
    infoCards: [
      {
        tabName: 'APPLICATION',
        Component: InfoBlocks,
        componentProps: {
          blocks: [
            { title: 'APPLICATION', description: 'Three-phase transformer or direct connection meter is designed for active and reactive electric energy measurement and organization of single- and multi-tariff electric energy metering.' },
            { title: 'RANGE OF USE', description: 'Meter can be used as a part of AMR system for measured parameters transition to the control, metering and electric energy distribution center. · Case type is designed for the installation on the mounting surface.' },
          ],
        },
      },
      {
        tabName: 'FUNCTIONAL CAPABILITIES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'FUNCTIONAL CAPABILITIES',
          list: [
            { title: 'Multi-tariff electric energy measurement with a wide range of tariff schedule settings.' },
            { title: 'Bidirectional active and reactive energy measurement.' },
            { title: 'Support of IEC 62056-21 and DLMS / COSEM data exchange protocols (or «Smart Metering» protocol).' },
            { title: 'Data transmission with automatic switch between PLC and RF communication channels on every transmission level (for PLC + RF model only).' },
            { title: 'Flexible adjustment of reaction to the events occurring in the meter.' },
            {
              title: 'Electric energy quality measurement:',
              children: [
                { title: 'voltage deviation;' },
                { title: 'network frequency deviation;' },
                { title: 'duration and depth of power failure;' },
                { title: 'duration and maximal value of overvoltage;' },
                { title: 'blackouts.' },
              ],
            },
            { title: 'Load profile logging, with an ability to set the type of parameters to save and averaging time for registration.' },
            {
              title: 'Network parameters metering according to EN 50160:2010:',
              children: [
                { title: 'voltage frequency;' },
                { title: 'currents;' },
                { title: 'voltages;' },
                { title: 'angles between current and voltage;' },
                { title: 'power factor;' },
                { title: 'active power;' },
                { title: 'reactive power;' },
                { title: 'apparent power.' },
              ],
            },
            { title: 'Active power consumption control.' },
            { title: 'Instantaneous power» consumption control.' },
            { title: 'Active energy consumption control.' },
            { title: 'Voltage of power supply control.' },
            { title: 'Network frequency control.' },
            { title: 'Signalization relay.' },
            { title: 'Unauthorized opening protection (electronic seals).' },
            { title: 'Magnetic field sensor.' },
            {
              title: 'Data logging for:',
              children: [
                { title: 'measured data registration (total and per tariff) for active and reactive energy by day changing;' },
                { title: 'measured data registration (total and per tariff) for active and reactive energy by month changing (with programmable date when the billing period ends);' },
                { title: 'measured data registration (total and per tariff) for active and reactive energy by year changing;' },
                { title: 'measured data registration (total and per tariff) for active and reactive energy per event or command.' },
              ],
            },
            { title: 'Load control by external switching unit.' },
            { title: 'Sound alarm.' },
            { title: 'Self-testing.' },
            { title: 'LCD backlight.' },
            { title: 'Displaying of data supported by OBIS codes. ' },
          ],
        },
      },
      {
        tabName: 'SPECIFICATIONS',
        Component: CriteriaList,
        maxHeight: '450rem',
        componentProps: {
          title: 'SPECIFICATIONS',
          list: [
            { key: 'Active/reactive energy metering accuracy class', value: '0.5s/0.5; 1/1' },
            { key: 'Number of tariffs', value: '8' },
            { key: 'Network frequency', value: '50±2.5 Hz' },
            { key: 'Nominal voltage', value: '3*57.7/100; 3*230/400 V' },
            { key: 'Base (max.) current', value: '5 (10); 5 (60); 5 (100) А' },
            { key: 'Starting current:', value: ' ' },
            { key: 'for direct connection meters', value: '10 mА' },
            { key: 'for transformer connection meters', value: '5 mА' },
            { key: 'Storing depth of daily energy, collected per tariff', value: '128 days' },
            { key: 'Storing depth of monthly energy, collected per tariff', value: '40 months' },
            { key: 'Load profile averaging time', value: '1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60 minutes' },
            { key: 'Every profile storing depth', value: 'up to 256 days (depending on the averaging period time)' },
            { key: 'Operating temperature range', value: 'from – 40 to + 70 °C' },
            { key: 'Operating phase voltage range (min.-max.)', value: '34.5…66.4 V <br /> 172...264.5 V' },
            { key: 'Overall dimensions, do not exceed', value: `
              215 x 175 x 72 mm – for S31 case <br />
              280 x 175 x 85 mm – for S34 case <br />
              235 x 172,3 x 85 mm – for S35 case <br />
            ` },
          ],
        },
      },
      {
        tabName: 'RELIABILITY AND WARRANTY',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'RELIABILITY AND WARRANTY',
          list: [
            { title: 'Average time to failure — 220 000 hours' },
            { title: 'Verification interval — 16 years' },
            { title: 'Warranty period — 4 years' },
            { title: 'Average service life — 30 years' },
          ],
        },
      },
    ],
  },

  'СЕ207-R7': {
    modelPath: `${window.location.origin}/models/some.fbx`,
    title: 'СЕ207 R7',
    subTitle: 'Single-phase multi-tariff electricity meters',
    scale: 4,
    chips: [
      { text: 'Optical Port', background: '#45798B' },
      { text: 'GMS/GPRS', background: '#709F3E' },
      { text: 'RF433 MHz', background: '#74B1DC' },
      { text: 'RS-485', background: '#C8752A' },
      { text: 'PLC G3', background: '#F0C242' },
    ],
    infoCards: [
      {
        tabName: 'APPLICATION',
        Component: InfoBlocks,
        componentProps: {
          blocks: [
            { title: 'APPLICATION', description: 'Direct connected single-phase meter is intended for active and reactive energy measurement in single-phase AC circuits in residential and municipal sectors: in residential and public buildings, cottages, and garages.' },
          ],
        },
      },
      {
        tabName: 'DESIGN FEATURES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'DESIGN FEATURES',
          list: [
            { title: 'Different communication channels.' },
            { title: 'Optical interface according to IEC 62056-21 for local meter reading.' },
            { title: 'Support for DLMS data transfer protocol.' },
            { title: 'Built-in load control relay.' },
            { title: 'Terminal block cover and housing opening control.' },
            { title: 'Control of magnetic field influence.' },
            { title: 'Self-testing.' },
            { title: 'Built-in battery with ability to install an additional replaceable battery without opening the case.' },
            { title: 'Information protection.' },
            { title: 'Protection against unauthorized access (electronic seal).' },
            { title: 'Magnetic field sensor.' },
            { title: 'Event logs.' },
          ],
        },
      },
      {
        tabName: 'FUNCTIONAL CAPABILITIES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'FUNCTIONAL CAPABILITIES',
          list: [
            { title: 'Multi-tariff electricity metering.' },
            { title: 'Archive logging (readings at the end of a billing period (day/month)).' },
            { title: 'Load profile logging, with an ability to set the type of parameters and averaging time for registration.' },
            { title: 'Metering of network parameters: voltage, frequency, phase and neutral currents, power factor, active, reactive, apparent power.' },
            { title: 'Control of opposite power flow.' },
            { title: 'Time tracking.' },
          ],
        },
      },
      {
        tabName: 'SPECIFICATIONS',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'SPECIFICATIONS',
          list: [
            { title: 'Active/reactive energy accuracy class — 1/2' },
            { title: 'Rated voltage, V — 127; 220; 230' },
            { title: 'Basic (maximum) current, A — 5 (80); 5 (100)' },
            { title: 'Starting current, mA — 10' },
            { title: 'Frequency of network, Hz — 50±2,5; 60±3' },
            { title: 'Number of tariffs — up to 5' },
            { title: 'Averaging time of load profiles, min — 1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60' },
            { title: 'Load profile storing depth (Averaging time 60 min), days — 128' },
            { title: 'Number of measuring elements — with two current sensors (in phase and neutral circuit)' },
            { title: 'Operating temperature range, °C — from minus 40 up to plus 70' },
            { title: 'Overall dimensions (HxWxD), no more than, mm — 129 × 90 × 62 – for case type R7 200 × 122 × 73 – for case type S7' },
          ],
        },
      },
      {
        tabName: 'RELIABILITY',
        Component: InfoList,
        maxHeight: '',
        componentProps: {
          title: 'RELIABILITY ',
          list: [
            { title: 'Average time to failure — 220 000 hours' },
            { title: 'Average service life — 30 years' },
          ],
        },
      },
    ],
  },

  'CE208-S7': {
    modelPath: `${window.location.origin}/models/some.fbx`,
    title: 'СЕ207 R7',
    subTitle: 'Single-phase multi-tariff electricity meters',
    scale: 4,
    chips: [
      { text: 'Optical Port', background: '#45798B' },
      { text: 'RS485', background: '#709F3E' },
      { text: 'PLC', background: '#74B1DC' },
      { text: 'GSM/GPRS', background: '#C8752A' },
      { text: 'ЕTHERNET', background: '#F0C242' },
      { text: 'RF433 MHz', background: '#709F3E' },
      { text: 'PLC + RF433 MHz', background: '#C8752A' },
    ],
    infoCards: [
      {
        tabName: 'APPLICATION',
        Component: InfoBlocks,
        maxHeight: '',
        componentProps: {
          blocks: [
            { title: 'APPLICATION', description: 'Meter is designed for active and reactive bidirectional energy measurement in single-phase AC circuits and organization of multitariff electric energy metering with the maximum anti-theft protection.' },
            { title: 'RANGE OF USE', description: "Meter is designed to use it as a part of AMR system for the measured parameters transition to the control center and remote control of consumer's load." },
          ],
        },
      },
      {
        tabName: 'FUNCTIONAL CAPABILITIES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'FUNCTIONAL CAPABILITIES',
          list: [
            { title: 'Multi-tariff metering of electric energy with a wide range of tariff schedules settings.' },
            { title: 'Bidirectional active and reactive energy metering.' },
            { title: 'Models with two current sensors (in phase and neutral circuit) and residual current control support.' },
            { title: 'Support of GOST IEC 62056-21 and DLMS/COSEM data exchange protocols or «Smart Metering» protocol.' },
            { title: 'Data transmission with automatic switch between PLC and RF communication channels on every transmission level (for PLC + RF model only).' },
            { title: 'Measurement of electric energy quality parameters according to EN50160:2010' },
            { title: 'Flexible settings of reactions to the events appearing in the meter' },
            {
              title: 'Measuring and analyzing of electric energy quality parameters:',
              children: [
                { title: 'voltage deviation;' },
                { title: 'network frequency declination;' },
                { title: 'voltage failure duration and depth;' },
                { title: 'overvoltage duration and maximum value;' },
                { title: 'blackouts.' },
              ],
            },
            { title: 'Recording of load profiles, with an ability to set the type of saved parameters and averaging period.' },
            {
              title: 'Network parameters measurement:',
              children: [
                { title: 'voltage frequency;' },
                { title: 'current;' },
                { title: 'voltage;' },
                { title: 'angle between current ant voltage;' },
                { title: 'power factor;' },
                { title: 'reactive power;' },
                { title: 'apparent power' },
              ],
            },
            { title: 'Active power consumption control.' },
            { title: '«Instantaneous power» consumption control.' },
            { title: 'Active energy consumption control.' },
            { title: 'Power supply voltage control.' },
            { title: 'Network frequency control.' },
            { title: 'Signalization relay.' },
            { title: 'Protection against unauthorized case opening (electronic seals).' },
            { title: 'Magnetic field sensor.' },
            {
              title: 'Data archive logging for:',
              children: [
                { title: 'active and reactive energy measurement data registration (total and per tariff) after a change of a day;' },
                { title: 'active and reactive energy measurement data registration (total and per tariff) after a change of a month (with a programmable date of billing period end);' },
                { title: 'active and reactive energy measurement data registration (total and per tariff) after a change of a year;' },
                { title: 'active and reactive energy measurement data registration (total and per tariff) by a command or event.' },
              ],
            },
            { title: 'Sound signal.' },
            { title: 'Self-testing.' },
            { title: 'LCD backlight' },
            { title: 'Displaying of information accompanied supported by OBIS codes.' },
          ],
        },
      },
      {
        tabName: 'SPECIFICATIONS',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'SPECIFICATIONS',
          list: [
            { title: 'Active / Reactive energy accuracy class — 1/2' },
            { title: 'Number of tariffs — up to 8' },
            { title: 'Network frequency — 50±2.5 Hz' },
            { title: 'Nominal voltage — 230 V' },
            { title: 'Base (max.) current — 5 (60); 5 (100) А; 5 (80) А' },
            { title: 'Starting current — 10 mА' },
            { title: 'Storing depth of daily energy, collected per tariff — 128 days' },
            { title: 'Storing depth of monthly energy, collected per tariff — 40 months' },
            { title: 'Load profile averaging period — 1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60 minutes' },
            { title: 'Every profile storing depth — up to 256 days (depending on the averaging period time)' },
            { title: 'Operating temperature range — from – 45 to +70 °C' },
            { title: 'Operating phase voltage range Overall dimensions — (0.55…1.15) Unom' },
            { title: 'Overall dimensions — 200 × 122 × 73 mm' },
          ],
        },
      },
      {
        tabName: 'RELIABILITY AND WARRANTY',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'RELIABILITY AND WARRANTY',
          list: [
            { title: 'Average time to failure — 220 000 hours' },
            { title: 'Verification interval — 16 years' },
            { title: 'Warranty period — 5 years' },
            { title: 'Average service life — 30 years' },
          ],
        },
      },
    ],
  },

  'CE208-C4+901': {
    modelPath: `${window.location.origin}/models/some.fbx`,
    title: 'CE208 Split',
    subTitle: 'Single-phase multi-tariff active and reactive energy meter',
    scale: 4,
    chips: [
      { text: 'Optical Port', background: '#45798B' },
      { text: 'BLE', background: '#709F3E' },
      { text: 'NB-loT', background: '#74B1DC' },
      { text: 'LoRa', background: '#C8752A' },
      { text: 'ZigBee', background: '#F0C242' },
      { text: 'GMS/GPRS', background: '#709F3E' },
      { text: 'G3-PLC', background: '#C8752A' },
      { text: 'G3-PLC + RF868', background: 'linear-gradient(90deg, #709F3E 0%, #74B1DC 100%)' },
    ],
    infoCards: [
      {
        tabName: 'APPLICATION',
        Component: InfoBlocks,
        maxHeight: '',
        componentProps: {
          blocks: [
            { title: 'APPLICATION', description: 'Meter is designed for active and reactive bidirectional energy measurement in single-phase AC circuits and organization of multitariff electric energy metering with the maximum anti-theft protection.' },
            { title: 'RANGE OF USE', description: "Meter is designed to use it as a part of AMR system for the measured parameters transition to the control center and remote control of consumer's load." },
          ],
        },
      },
      {
        tabName: 'FUNCTIONAL CAPABILITIES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'FUNCTIONAL CAPABILITIES',
          list: [
            { title: 'By design the meter is divided into two parts: measuring unit and customer interface unit (CIU).' },
            { title: 'Multi-tariff metering of electric energy with a wide range of tariff schedules settings.' },
            { title: 'Bidirectional active and reactive energy metering.' },
            { title: 'Models with two current sensors (in phase and neutral circuit) and residual current control support.' },
            { title: 'Support of IEC 62056-21 and DLMS/COSEM data exchange protocols.' },
            { title: 'Data transmission with automatic switch between PLC and RF communication channels on every transmission level (for PLC + RF model only).' },
            {
              title: 'Flexible settings of reactions to the events appearing in the meter · Measuring and analyzing of electric energy quality parameters according to EN 50160:2010:',
              children: [
                { title: 'voltage deviation;' },
                { title: 'network frequency declination;' },
                { title: 'voltage failure duration and depth;' },
                { title: 'overvoltage duration and maximum value;' },
                { title: 'blackouts.' },
              ],
            },
            {
              title: 'Recording of load profiles, with an ability to set the type of saved parameters and averaging period. Network parameters measurement:',
              children: [
                { title: 'voltage frequency;' },
                { title: 'current;' },
                { title: 'voltage;' },
                { title: 'active power / reactive power / apparent power' },
              ],
            },
            { title: 'Active power consumption control.' },
            { title: '«Instantaneous power» consumption control. · Power supply voltage control.' },
            { title: 'Network frequency control.' },
            { title: 'Protection against unauthorized case and terminal cover opening (electronic seals).' },
            { title: 'Magnetic field sensor.' },
            {
              title: 'Data archive logging for active and reactive energy measurement data registration (total and per tariff):',
              children: [
                { title: 'after a change а day;' },
                { title: 'after a change а month (with a programmable date of billing period end);' },
                { title: 'after a change a change of а year;' },
                { title: 'by а command or event.' },
              ],
            },
            { title: 'Self-testing. CIU СЕ901' },
            { title: 'Indoor mounting. Plug in to any socket in home.' },
            { title: 'Communication with the measuring unit via Bluetooth Low Energy interface.' },
            {
              title: 'Two buttons for displayed information control.',
              children: [
                { title: 'Sound signal.' },
              ],
            },
            { title: 'Information LCD with backlight.' },
            {
              title: 'Display of information accompanied by OBIS codes.',
              children: [
                { title: 'Ability to operate using batteries (AA type).' },
              ],
            },
          ],
        },
      },
      {
        tabName: 'CIU СЕ901',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'CIU СЕ901',
          list: [
            { title: 'Indoor mounting. Plug in to any socket in home.' },
            { title: 'Communication with the measuring unit via Bluetooth Low Energy interface.' },
            {
              title: 'Two buttons for displayed information control.',
              children: [
                { title: 'Sound signal. · Information LCD with backlight.' },
              ],
            },
            {
              title: 'Display of information accompanied by OBIS codes.',
              children: [
                { title: 'Ability to operate using batteries (AA type).' },
              ],
            },
          ],
        },
      },
      {
        tabName: 'SPECIFICATIONS',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'SPECIFICATIONS',
          list: [
            { title: 'Active / Reactive energy accuracy class - 1/2' },
            { title: 'Number of tariffs - up to 8' },
            { title: 'Network frequency - 50±2.5 Hz' },
            { title: 'Nominal voltage Base (max.) current - 5 (60); 5 (100)' },
            { title: 'Starting current - 10 m' },
            { title: 'Storing depth of daily energy, collected per tariff - 128 days' },
            { title: 'Storing depth of monthly energy, collected per tariff - 40 months' },
            { title: 'Load profile averaging period - 1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60 minutes' },
            { title: 'Every profile storing depth - up to 128 days (depending on the averaging period time)' },
            { title: 'Operating temperature range - from - 45 to 70 C for measuring unit from - 20 to 70 C for CIU СЕ901' },
            { title: 'Operating phase voltage range - (0.55…1.15) Unom' },
            { title: 'Overall dimensions - 230 х 160 х 79 mm for measuring unit 95 х 155 х 49 mm for CIU СЕ901' },
          ],
        },
      },
      {
        tabName: 'RELIABILITY AND WARRANTY',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'RELIABILITY AND WARRANTY',
          list: [
            { title: 'Average time to failure — 220 000 hours' },
            { title: 'Verification interval — 16 years' },
            { title: 'Average service life — 30 years' },
          ],
        },
      },
    ],
  },

  'СЕ209+901': {
    modelPath: `${window.location.origin}/models/some.fbx`,
    title: 'CE209-C3',
    subTitle: 'Single-phase multi-tariff active and reactive prepayment energy meter',
    scale: 4,
    chips: [
      { text: 'Optical Port', background: '#45798B' },
      { text: 'BLE', background: '#709F3E' },
      { text: 'NB-loT', background: '#74B1DC' },
      { text: 'LoRa', background: '#C8752A' },
      { text: 'ZigBee', background: '#F0C242' },
      { text: 'GMS/GPRS', background: '#709F3E' },
      { text: 'G3-PLC', background: '#C8752A' },
      { text: 'G3-PLC + RF868', background: 'linear-gradient(90deg, #709F3E 0%, #74B1DC 100%)' },
    ],
    infoCards: [
      {
        tabName: 'DESCRIPTION',
        Component: MixedInfoBlock,
        maxHeight: '450rem',
        componentProps: {
          infoList: {
            title: 'Reliability and warranty',
            list: [
              { title: 'Average time to failure — 220 000 hours' },
              { title: 'Average service life — 30 years' },
            ],
          },
          infoBlock: [
            { title: 'DESCRIPTION', description: 'CE209 meters have wide range of measurement functions: active, reactive, total energy, network parameters, multi-tariff metering and prepaid STS systems. The meter uses an open communication standard OFDM G3 for exchange with CIU and Data concentrator (DCU). The meter can be used as an autonomous meter with separate prepayment or in an on-line installation as part of an end to end two way AMI smart metering solution.' },
          ],
          infoChips: {
            title: 'According to',
            chips: [
              { text: 'IEC 62052-11' },
              { text: 'IEC 62053-21' },
              { text: 'IEC 62053-23' },
              { text: 'IEC 62056' },
              { text: 'IEC 62055' },
              { text: 'IEC 62054-21' },
            ],
          },
        },
      },
      {
        tabName: 'FUNCTIONAL CAPABILITIES',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'FUNCTIONAL CAPABILITIES',
          list: [
            { title: 'By design the meter is divided into two parts: measuring unit and customer interface unit (CIU).' },
            { title: 'Multi-tariff metering of electric energy with a wide range of tariff schedules settings.' },
            { title: 'Bidirectional active and reactive energy metering.' },
            { title: 'Models with two current sensors (in phase and neutral circuit) and residual current control support.' },
            { title: 'Support of IEC 62056-21 and DLMS/COSEM data exchange protocols.' },
            { title: 'Data transmission with automatic switch between PLC and RF communication channels on every transmission level (for PLC + RF model only).' },
            {
              title: 'Flexible settings of reactions to the events appearing in the meter · Measuring and analyzing of electric energy quality parameters according to EN 50160:2010:',
              children: [
                { title: 'voltage deviation;' },
                { title: 'network frequency declination;' },
                { title: 'voltage failure duration and depth;' },
                { title: 'overvoltage duration and maximum value;' },
                { title: 'blackouts.' },
              ],
            },
            {
              title: 'Recording of load profiles, with an ability to set the type of saved parameters and averaging period. Network parameters measurement:',
              children: [
                { title: 'voltage frequency;' },
                { title: 'current;' },
                { title: 'voltage;' },
                { title: 'active power / reactive power / apparent power' },
              ],
            },
            { title: 'Active power consumption control.' },
            { title: '«Instantaneous power» consumption control. · Power supply voltage control.' },
            { title: 'Network frequency control.' },
            { title: 'Protection against unauthorized case and terminal cover opening (electronic seals).' },
            { title: 'Magnetic field sensor.' },
            {
              title: 'Data archive logging for active and reactive energy measurement data registration (total and per tariff):',
              children: [
                { title: 'after a change а day;' },
                { title: 'after a change а month (with a programmable date of billing period end);' },
                { title: 'after a change a change of а year;' },
                { title: 'by а command or event.' },
              ],
            },
            { title: 'Self-testing. CIU СЕ901' },
            { title: 'Indoor mounting. Plug in to any socket in home.' },
            { title: 'Communication with the measuring unit via Bluetooth Low Energy interface.' },
            {
              title: 'Two buttons for displayed information control.',
              children: [
                { title: 'Sound signal.' },
              ],
            },
            { title: 'Information LCD with backlight.' },
            {
              title: 'Information LCD with backlight.',
              children: [
                { title: 'Ability to operate using batteries (AA type).' },
              ],
            },
          ],
        },
      },
      {
        tabName: 'CIU СЕ901',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'CIU СЕ901',
          list: [
            { title: 'Indoor mounting. Plug in to any socket in home.' },
            { title: 'Communication with the measuring unit via Bluetooth Low Energy interface.' },
            {
              title: 'Two buttons for displayed information control.',
              children: [
                { title: 'Sound signal. · Information LCD with backlight.' },
              ],
            },
            {
              title: 'Display of information accompanied by OBIS codes.',
              children: [
                { title: 'Ability to operate using batteries (AA type).' },
              ],
            },
          ],
        },
      },
      {
        tabName: 'SPECIFICATIONS',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'SPECIFICATIONS',
          list: [
            { title: 'Active / Reactive energy accuracy class - 1/2' },
            { title: 'Number of tariffs - up to 8' },
            { title: 'Network frequency - 50±2.5 Hz' },
            { title: 'Nominal voltage Base (max.) current - 5 (60); 5 (100)' },
            { title: 'Starting current - 10 m' },
            { title: 'Storing depth of daily energy, collected per tariff - 128 days' },
            { title: 'Storing depth of monthly energy, collected per tariff - 40 months' },
            { title: 'Load profile averaging period - 1; 2; 3; 4; 5; 6; 10; 12; 15; 20; 30; 60 minutes' },
            { title: 'Every profile storing depth - up to 128 days (depending on the averaging period time)' },
            { title: 'Operating temperature range - from - 45 to 70 C for measuring unit from - 20 to 70 C for CIU СЕ901' },
            { title: 'Operating phase voltage range - (0.55…1.15) Unom' },
            { title: 'Overall dimensions - 230 х 160 х 79 mm for measuring unit 95 х 155 х 49 mm for CIU СЕ901' },
          ],
        },
      },
      {
        tabName: 'RELIABILITY',
        Component: InfoList,
        maxHeight: '450rem',
        componentProps: {
          title: 'RELIABILITY',
          list: [
            { title: 'Average time to failure — 220 000 hours' },
            { title: 'Verification interval — 16 years' },
            { title: 'Average service life — 30 years' },
          ],
        },
      },
    ],
  },

  // 'СЕ309+901': {
  //   modelPath: `${window.location.origin}/models/some.fbx`,
  //   title: 'CE209-C3',
  //   subTitle: 'Single-phase multi-tariff active and reactive prepayment energy meter',
  //   scale: 4,
  //   chips: [
  //     {text: ''}
  //   ],
  //   infoCards: [],
  // }
};

export const SmartElectricityMetersPageCurrent = () => {
  const { name } = useParams<{ name: string }>();

  const [currentTab, setCurrentTab] = useState<string>('');

  const currentInfo = useMemo(() => PAGES_STATE[name as keyof typeof PAGES_STATE], [name]);
  const currentCardInfo = useMemo(() => currentInfo.infoCards.find((card) => card.tabName === currentTab), [currentInfo.infoCards, currentTab]);
  const tabsList = useMemo(() => currentInfo.infoCards.map((item) => item.tabName), [currentInfo.infoCards]);

  useEffect(() => {
    if (!currentTab) {
      setCurrentTab(currentInfo?.infoCards[0]?.tabName);
    }
  }, [currentInfo?.infoCards, currentTab]);

  return (
    <div className={cx('page')}>
      <div className={cx('left-block')}>
        <ModelBlock modelPath={currentInfo.modelPath} scale={currentInfo.scale} className={cx('model-block')} />
        <div className={cx('chips-list')}>
          {currentInfo.chips.map((item, i) => (
            <div
              className={cx('chip')}
              key={i}
              data-aos="fade-up"
              data-aos-offset="-1000"
              data-aos-duration="400"
            >
              <Chip {...item} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={cx('information')}
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-duration="400"
      >
        <SmartElectricityMeterCard
          title={currentInfo.title}
          subTitle={currentInfo.subTitle}
          tabsList={tabsList}
          activeTab={currentTab}
          onTabCLick={setCurrentTab}
          maxHeight={currentCardInfo?.maxHeight}
        >
          {currentCardInfo?.Component?.(currentCardInfo.componentProps as any)}
        </SmartElectricityMeterCard>
      </div>
    </div>
  );
};
