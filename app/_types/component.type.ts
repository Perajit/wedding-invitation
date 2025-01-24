import { WeddingInfo } from './wedding.type';

export type SharedProps = {
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
