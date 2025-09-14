import { getWeddingInfo } from '@/app/_services/getWeddingInfo.service';
import { Theme } from '@/app/_types/theme.type';
import { FC } from 'react';
import Container from './_components/Container';

const bgClassNameByTheme: Record<Theme, string> = {
  day: `bg-[url(/images/bg-overlay-day.webp)]`,
  night: `bg-[url(/images/bg-overlay-night.webp)]`,
};

const Invitation: FC = async () => {
  const weddingInfo = await getWeddingInfo();

  return weddingInfo ? (
    <Container weddingInfo={weddingInfo} bgClassNameByTheme={bgClassNameByTheme} />
  ) : null;
};

export default Invitation;
