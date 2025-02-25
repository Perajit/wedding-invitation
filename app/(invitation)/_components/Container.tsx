'use client';

import BaseThemeSwitcher from '@/app/_components/base/BaseThemeSwitcher/BaseThemeSwitcher';
import { AppThemeContextProvider } from '@/app/_contexts/AppThemeContext';
import { WeddingInfo } from '@/app/_types/wedding.type';
import { FC } from 'react';
import GallerySection from './GallerySection/GallerySection';
import Hero from './Hero/Hero';
import InfoSection from './InfoSection/InfoSection';
import LocationSection from './LocationSection/LocationSection';

export type ContainerProps = {
  weddingInfo: WeddingInfo;
};

const Container: FC<ContainerProps> = ({ weddingInfo }) => {
  return weddingInfo ? (
    <AppThemeContextProvider>
      <Hero weddingInfo={weddingInfo} />
      <InfoSection weddingInfo={weddingInfo} className="mt-6 md:mt-8" />
      <GallerySection weddingInfo={weddingInfo} className="mt-1 mb-6 md:mt-3 md:mb-8" />
      <LocationSection weddingInfo={weddingInfo} className="h-dvh" />
      <BaseThemeSwitcher className="absolute right-0 top-0 m-4" />
    </AppThemeContextProvider>
  ) : null;
};

export default Container;
