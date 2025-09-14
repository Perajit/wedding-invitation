import Container from '@/app/(invitation)/_components/Container';
import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import { Theme } from '@/app/_types/theme.type';
import { FC } from 'react';

const bgClassNameByTheme: Record<Theme, string> = {
  day: `bg-[url(/images/bg-overlay-day-mock.webp)]`,
  night: `bg-[url(/images/bg-overlay-night.webp)]`,
};

const Invitation: FC = async () => {
  return (
    <Container weddingInfo={mockWeddingInfo} bgClassNameByTheme={bgClassNameByTheme} />
  );
};

export default Invitation;
