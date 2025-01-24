import { WeddingInfo, WeddingInfoResponse } from '@/app/_types/wedding.type';

export const getWeddingInfo = async (): Promise<WeddingInfo | null> => {
  const endpoint = process.env.ENDPOINT_GET_WEDDING_INFO ?? '';
  const res = await fetch(endpoint, { next: { revalidate: 0 } });

  if (res.ok) {
    const weddingInfoResponse = await res.json() as WeddingInfoResponse;

    if (weddingInfoResponse) {
      return {
        ...weddingInfoResponse,
        datetime: new Date(weddingInfoResponse.datetime),
      };
    }
  }

  return null;
};
