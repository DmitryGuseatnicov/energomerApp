import { useParams } from 'react-router-dom';

import { SmartElectricityMetersPageCurrent } from './SmartElectricityMetersPageCurrent';
import { SmartElectricityMetersPageIndex } from './SmartElectricityMetersPageIndex';

export const SmartElectricityMetersPage = () => {
  const { name } = useParams<{ name: string }>();

  if (name) {
    return <SmartElectricityMetersPageCurrent />;
  }

  return <SmartElectricityMetersPageIndex />;
};
