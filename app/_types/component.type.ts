import { WeddingInfo } from './wedding.type';

export type SharedProps = {
  id?: string;
  className?: string;
};

export type SharedPropsWithWeddingInfo = SharedProps & {
  weddingInfo: WeddingInfo;
};

export type IconProps = {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
  className?: string;
};
