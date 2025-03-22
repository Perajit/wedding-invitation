'use client';

import { SharedProps } from '@/app/_types/component.type';
import { FC, PropsWithChildren } from 'react';

export type BaseCardSectionProps = PropsWithChildren & SharedProps;

const BaseCardSection: FC<BaseCardSectionProps> = (props) => {
  const { id, className = '', children } = props;

  return (
    <section
      id={id}
      className={`
        bg-card-background text-foreground
        lg:bg-transparent
        ${className}
      `}
    >
      <div
        className={`
          container h-full mx-auto flex flex-col
          lg:bg-card-background lg:rounded-2xl lg:shadow-sm lg:p-10 lg:text-left
          xl:p-12
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default BaseCardSection;
