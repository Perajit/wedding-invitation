import { getWeddingInfo } from '@/app/_services/getWeddingInfo.service';
import { FC } from 'react';
import GallerySection from './_components/GallerySection/GallerySection';
import Hero from './_components/Hero/Hero';
import InfoSection from './_components/InfoSection/InfoSection';
import LocationSection from './_components/LocationSection/LocationSection';

const Invitation: FC = async () => {
  const weddingInfo = await getWeddingInfo();

  return weddingInfo ? (
    <>
      <Hero weddingInfo={weddingInfo} />
      <InfoSection weddingInfo={weddingInfo} className="mt-6 md:mt-8" />
      <GallerySection weddingInfo={weddingInfo} className="mt-1 mb-6 md:mt-3 md:mb-8" />
      <LocationSection weddingInfo={weddingInfo} className="h-dvh" />
    </>
  ) : null;
};

export default Invitation;
