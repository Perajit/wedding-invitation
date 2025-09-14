import { Theme } from './theme.type';
import { Translation } from './translation.type';

export enum WeddingCeremony {
  KhanMakProcession = 'KHAN_MAK_PROCESSION',
  RingExchange = 'RING_EXCHANGE',
  WaterBlessing = 'WATER_BLESSING',
  Reception = 'RECEPTION',
};

export type WeddingInfo = {
  bride: {
    firstname: Translation<string>;
    lastname: Translation<string>;
  };
  groom: {
    firstname: Translation<string>;
    lastname: Translation<string>;
  };
  datetime: Date;
  place: {
    title: Translation<string>;
    location: Translation<string>;
    embeddedMapSrc: string;
  };
  schedule: {
    ceremony: WeddingCeremony,
    time: Translation<string>;
    detail: Translation<string[]>;
  }[],
  rsvpUrl: string;
  coverImage: Record<Theme, { src: string; position: string; }>;
  galleryImages: string[];
  donation?: {
    qrUrl: string;
    accountInfo: {
      label: Translation<string>;
      value: string;
    }[];
  },
  hashtag?: string;
};

export type WeddingInfoResponse = Omit<WeddingInfo, 'datetime'> & {
  datetime: string;
};
