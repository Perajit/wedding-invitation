import { ScreenSize } from '@/app/_types/common.type';
import { SharedProps } from '@/app/_types/component.type';
import React, { useMemo } from 'react';
import { BaseTimelineItem, BaseTimelineItemProps } from './BaseTimelineItem';

const containerResponsiveClassNameByScreen: Record<ScreenSize, string> = {
  'sm': 'sm:max-md:flex sm:max-md:items-start',
  'md': 'md:max-lg:flex md:max-lg:items-start',
  'lg': 'lg:max-xl:flex lg:max-xl:items-start',
  'xl': 'xl:max-2xl:flex xl:max-2xl:items-start',
  '2xl': '2xl:flex 2xl:items-start',
};

type BaseTimelineItemConfig = Omit<BaseTimelineItemProps, 'nodeSize'>;

export type BaseTimelineProps = SharedProps & {
  items: BaseTimelineItemConfig[];
  horizontalScreenSizes: ScreenSize[];
  nodeSize?: string;
  nodeColor?: string;
  connectorColor?: string;
  nodeClassName?: string;
  contentclassName?: string;
  timeClassName?: string;
};

const BaseTimeline: React.FC<BaseTimelineProps> = (props) => {
  const {
    items,
    horizontalScreenSizes = [],
    nodeSize,
    nodeColor,
    connectorColor,
    className = '',
    nodeClassName = '',
    contentclassName = '',
    timeClassName = '',
  } = props;

  const containerResponsiveClassName = useMemo(() => {
    return horizontalScreenSizes.map((screen) => containerResponsiveClassNameByScreen[screen]).join(' ');
  }, [horizontalScreenSizes]);

  return (
    <ol className={`justify-center ${containerResponsiveClassName} ${className}`}>
      {items.map((item, i) => {
        const asFirstItem = i === 0;
        const asLastItem = i === items.length - 1;

        return (
          <BaseTimelineItem
            key={item.time}
            {...item}
            horizontalScreenSizes={item.horizontalScreenSizes ?? horizontalScreenSizes}
            nodeSize={nodeSize}
            nodeColor={item.nodeColor ?? nodeColor}
            hasPrevious={!asFirstItem}
            hasNext={!asLastItem}
            previousConnectorColor={item.previousConnectorColor ?? connectorColor}
            nextConnectorColor={item.nextConnectorColor ?? connectorColor}
            className={item.className}
            nodeClassName={item.nodeClassName ?? nodeClassName}
            previousConnectorClassName={asFirstItem ? 'h-0 ' : ''}
            nextConnectorClassName={asLastItem ? 'h-0' : ''}
            contentclassName={item.contentclassName ?? contentclassName}
            timeClassName={item.timeClassName ?? timeClassName}
          />
        );
      })}
    </ol>
  );
};

export default BaseTimeline;
