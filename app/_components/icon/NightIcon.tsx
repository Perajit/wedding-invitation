import { IconProps } from '@/app/_types/component.type';
import { FC } from 'react';

const NightIcon: FC<IconProps> = (props) => {
  const { width, height, color = 'currentColor', className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      widths={width}
      height={height}
      viewBox="0 0 18 20"
      fill={color}
      className={className}
    >
      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
    </svg>
  );
};

export default NightIcon;
