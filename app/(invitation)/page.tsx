import { getWeddingInfo } from '@/app/_services/getWeddingInfo.service';
import { FC } from 'react';
import Container from './_components/Container';

const Invitation: FC = async () => {
  const weddingInfo = await getWeddingInfo();

  return weddingInfo ? (
    <Container weddingInfo={weddingInfo} />
  ) : null;
};

export default Invitation;
