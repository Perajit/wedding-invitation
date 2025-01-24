import { Metadata } from 'next';

export const getMetadata = async (): Promise<Metadata> => {
  const endpoint = process.env.ENDPOINT_GET_METADATA ?? '';
  const res = await fetch(endpoint, { next: { revalidate: 0 } });
  const metadata: Metadata = {};

  if (res.ok) {
    const metadataResponse = await res.json() as Metadata;

    if (metadataResponse) {
      metadata.title = metadataResponse.title ?? '';
      metadata.description = metadataResponse.description ?? '';
    }
  }

  return metadata;
};
