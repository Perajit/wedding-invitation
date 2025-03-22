'use client';

import BaseImageCollection from '@/app/_components/base/BaseImageCollection/BaseImageCollection';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { FC, useMemo } from 'react';

const GallerySection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const items = useMemo(() => {
    return weddingInfo.galleryImages.map(src => ({ src }));
  }, [weddingInfo]);

  return (
    <section id="gallery" className={className}>
      {weddingInfo.hashtag ? (
        <h1 className="mb-6 lg:mb-8 text-center text-2xl lg:text-3xl">
          {weddingInfo.hashtag}
        </h1>
      ) : null}
      <div className="container mx-auto">
        <BaseImageCollection items={items}/>
      </div>
    </section>
  );
};

export default GallerySection;
