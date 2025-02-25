'use client';

import BaseThemeSwitcher from '@/app/_components/base/BaseThemeSwitcher/BaseThemeSwitcher';
import { ThemeContext, ThemeContextProvider, ThemeContextValue } from '@/app/_contexts/ThemeContext';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Theme } from '@/app/_types/theme.type';
import { FC, useContext } from 'react';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';
import InfoSection from './InfoSection/InfoSection';
import LocationSection from './LocationSection/LocationSection';

const bgClassNameByTheme: Record<Theme, string> = {
  day: `bg-[url(/images/bg-overlay-day.webp)]`,
  night: `bg-[url(/images/bg-overlay-night.webp)]`,
};

const InvitationContainer: FC<SharedPropsWithWeddingInfo> = ({ weddingInfo }) => {
  const {theme } = useContext(ThemeContext) as ThemeContextValue;

  return weddingInfo ? (
    <div
      data-theme={theme}
      className={`bg-background text-foreground ${bgClassNameByTheme[theme]}`}
    >
      <BaseThemeSwitcher className="fixed right-0 top-0 m-4" />
      <HeroSection weddingInfo={weddingInfo} />
      <InfoSection weddingInfo={weddingInfo} className="px-5 py-12 lg:py-20" />
      <GallerySection weddingInfo={weddingInfo} className="px-5" />
      <LocationSection weddingInfo={weddingInfo} className="h-dvh px-5 py-12 mt-12" />
    </div>
  ) : null;
};

const InvitationContainerWithTheme: FC<SharedPropsWithWeddingInfo> = (props) => (
  <ThemeContextProvider>
    <InvitationContainer {...props} />
  </ThemeContextProvider>
);

export default InvitationContainerWithTheme;
