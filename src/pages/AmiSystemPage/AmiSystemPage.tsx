import { useParams } from 'react-router-dom';

import { AmiSystemPageCurrent } from './AmiSystemPageCurrent';
import { AmiSystemPageIndex } from './AmiSystemPageIndex';

export const AmiSystemPage = () => {
  const { name } = useParams<{ name: string }>();

  if (!name) {
    return <AmiSystemPageIndex />;
  }

  return <AmiSystemPageCurrent name={name} />;
};
