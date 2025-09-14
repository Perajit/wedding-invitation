'use client';

import BaseCardSection from '@/app/_components/base/BaseCardSection/BaseCardSection';
import PlaceIcon from '@/app/_components/icon/PlaceIcon';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { FC } from 'react';

const lang = Language.TH;

const LocationSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo: { place }, className = '' } = props;

  return (
    <BaseCardSection id="location" className={className}>
      <h1 className="mb-6 text-center text-2xl lg:text-3xl">
        สถานที่จัดงาน
      </h1>
      <div className="flex justify-center gap-2 mx-auto mb-4 text-caption lg:mx-0">
        <PlaceIcon />
        <span>
          {place.location[lang]}
        </span>
      </div>
      <div className="flex-1">
        <iframe src={place.embeddedMapSrc} className="mx-auto w-full h-full" />
      </div>
    </BaseCardSection>
  );
};

export default LocationSection;
