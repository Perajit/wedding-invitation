'use client';

import { ScreenSize } from '@/app/_types/common.type';
import { SharedProps } from '@/app/_types/component.type';
import { SlideshowLightbox } from 'lightbox.js-react';
import { FC } from 'react';

type GridConfig = {
  groupSize: number;
  containerClassName: string;
  indexToItemClassName: Map<number, string>;
};

const gridConfigByScreen: Partial<Record<ScreenSize, GridConfig>> = {
  'sm': {
    groupSize: 3,
    containerClassName: 'grid-cols-2',
    indexToItemClassName: new Map<number, string>([
      [0, 'col-span-2 row-span-2'],
      [1, 'col-span-1 row-span-1'],
      [2, 'col-span-1 row-span-1'],
      [3, 'col-span-1 row-span-1'],
      [4, 'col-span-1 row-span-2'],
      [5, 'col-span-1 row-span-1'],
    ]),
  },
  'md': {
    groupSize: 6,
    containerClassName: 'md:grid-cols-3',
    indexToItemClassName: new Map<number, string>([
      [0, 'md:col-span-2 md:row-span-2'],
      [1, 'md:col-span-1 md:row-span-1'],
      [2, 'md:col-span-1 md:row-span-1'],
      [3, 'md:col-span-1 md:row-span-1'],
      [4, 'md:col-span-2 md:row-span-2'],
      [5, 'md:col-span-1 md:row-span-1'],
    ]),
  },
  'lg': {
    groupSize: 6,
    containerClassName: 'lg:grid-cols-4',
    indexToItemClassName: new Map<number, string>([
      [0, 'lg:col-span-2 lg:row-span-3'],
      [1, 'lg:col-span-1 lg:row-span-1'],
      [2, 'lg:col-span-1 lg:row-span-1'],
      [3, 'lg:col-span-2 lg:row-span-1'],
      [4, 'lg:col-span-1 lg:row-span-1'],
      [5, 'lg:col-span-1 lg:row-span-1'],
    ]),
  },
  'xl': {
    groupSize: 6,
    containerClassName: 'xl:grid-cols-4',
    indexToItemClassName: new Map<number, string>([
      [0, 'xl:col-span-1 xl:row-span-2'],
      [1, 'xl:col-span-1 xl:row-span-1'],
      [2, 'xl:col-span-1 xl:row-span-2'],
      [3, 'xl:col-span-1 xl:row-span-1'],
      [4, 'xl:col-span-1 xl:row-span-1'],
      [5, 'xl:col-span-1 xl:row-span-1'],
    ]),
  },
};

const getContainerClassName = () => {
  const configKeys = Object.values(gridConfigByScreen) as GridConfig[];

  return configKeys.reduce((className, config) => {
    return className + ' ' + config.containerClassName;
  }, '');
};

const getItemClassName = (i: number) => {
  const configKeys = Object.values(gridConfigByScreen) as GridConfig[];

  return configKeys.reduce((className, config) => {
    return className + ' ' + config.indexToItemClassName.get(i % config.groupSize);
  }, '');
};

export type BaseImageCollectionProps = SharedProps & {
  items: {
    src: string;
    className?: string;
  }[];
  itemMaxHeight?: string;
  itemMaxWidth?: string;
};

const BaseImageCollection: FC<BaseImageCollectionProps> = (props) => {
  const {
    items,
    className = '',
  } = props;

  return (
    <SlideshowLightbox
      className={`
        grid gap-3.5
        ${getContainerClassName()}
        ${className}
      `}
    >
      {items.map((item, i) => {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.src}
            src={item.src}
            alt=""
            className={`block w-full h-full object-cover rounded-lg ${getItemClassName(i)}`}
          />
        );
      })}
    </SlideshowLightbox>
  );
};

export default BaseImageCollection;
