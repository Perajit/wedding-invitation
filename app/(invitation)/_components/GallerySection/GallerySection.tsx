'use client';

import BaseImageCollection from '@/app/_components/base/BaseImageCollection/BaseImageCollection';
import { AppThemeContext, AppThemeContextValue } from '@/app/_contexts/AppThemeContext';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { FC, useContext, useMemo } from 'react';

const GallerySection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const { theme } = useContext(AppThemeContext) as AppThemeContextValue;

  const items = useMemo(() => {
    return weddingInfo.galleryImages.map(src => ({ src }));
  }, [weddingInfo]);

  return (
    <section
      id="gallery"
      className={`px-4 py-6 ${className}`}
      data-theme={theme}
    >
      <div className="container mx-auto">
        <BaseImageCollection items={items}/>
      </div>
    </section>
  );
};

export default GallerySection;
