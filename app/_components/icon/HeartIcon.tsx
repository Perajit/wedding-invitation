import { IconProps } from '@/app/_types/component.type';
import { FC } from 'react';

const HeartIcon: FC<IconProps> = (props) => {
  const { width, height, color = 'currentColor', className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      widths={width}
      height={height}
      viewBox="0 0 3007 3007"
      fill={color}
      className={className}
    >
      <path d="M 2866.488281 972.351562 C 2710.058594 167.71875 1729.558594 154.269531
      1487.78125 906.46875 C 1246.011719 154.28125 265.480469 167.71875 109.074219 972.351562
      C -32.855469 1702.371094 1487.78125 2854.109375 1487.78125 2854.109375 C 1487.78125
      2854.109375 3008.410156 1702.371094 2866.488281 972.351562 Z M 2866.488281 972.351562"/>
    </svg>
  );
};

export default HeartIcon;
