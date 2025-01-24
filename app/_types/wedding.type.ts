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
  };
  schedule: {
    ceremony: WeddingCeremony,
    time: Translation<string>;
    detail: Translation<string[]>;
  }[],
  contacts: {
    text: string;
    channel: string;
    href: string;
    qrUrl?: string;
  }[];
  rsvpUrl: string;
  coverImage: string;
  galleryImages: string[];
  hashtag?: string;
};

export type WeddingInfoResponse = Omit<WeddingInfo, 'datetime'> & {
  datetime: string;
};
