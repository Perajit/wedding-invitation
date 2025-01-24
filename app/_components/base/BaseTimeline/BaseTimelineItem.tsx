import { ScreenSize } from '@/app/_types/common.type';
import { SharedProps } from '@/app/_types/component.type';
import { CSSProperties, FC, ReactNode, useMemo } from 'react';

const containerResponsiveClassNameByScreen: Record<ScreenSize, string> = {
  'sm': 'sm:max-md:flex-col sm:max-md:text-center',
  'md': 'md:max-lg:flex-col md:max-lg:text-center',
  'lg': 'lg:max-xl:flex-col lg:max-xl:text-center',
  'xl': 'xl:max-2xl:flex-col xl:max-2xl:text-center',
  '2xl': '2xl:flex-col 2xl:text-center',
};

const nodeResponsiveClassNameByScreen: Record<ScreenSize, string> = {
  'sm': 'sm:max-md:flex-row sm:max-md:w-full',
  'md': 'md:max-lg:flex-row md:max-lg:w-full',
  'lg': 'lg:max-xl:flex-row lg:max-xl:w-full',
  'xl': 'xl:max-2xl:flex-row xl:max-2xl:w-full',
  '2xl': '2xl:flex-row 2xl:w-full',
};

const leftSpaceResponsiveClassNameByScreen: Record<ScreenSize, string> = {
  'sm': 'sm:max-md:flex-1',
  'md': 'md:max-lg:flex-1',
  'lg': 'lg:max-xl:flex-1',
  'xl': 'xl:max-2xl:flex-1',
  '2xl': '2xl:flex-1',
};

const connectorResponsiveClassNameByScreen: Record<ScreenSize, string> = {
  'sm': 'sm:max-md:min-w-4 sm:max-md:min-h-0 sm:max-md:h-0.5',
  'md': 'md:max-lg:min-w-4 md:max-lg:min-h-0 md:max-lg:h-0.5',
  'lg': 'lg:max-xl:min-w-4 lg:max-xl:min-h-0 lg:max-xl:h-0.5',
  'xl': 'xl:max-2xl:min-w-4 xl:max-2xl:min-h-0 xl:max-2xl:h-0.5',
  '2xl': '2xl:min-w-4 2xl:min-h-0 2xl:h-0.5',
};

const getConnectorStyle = (connectorColor: string, visible?: boolean): CSSProperties => ({
  backgroundColor: visible ? connectorColor : undefined,
});

export type BaseTimelineItemProps = SharedProps & {
  time: string;
  detail: ReactNode;
  horizontalScreenSizes?: ScreenSize[],
  nodeSize?: string;
  customNode?: ReactNode;
  hasNext?: boolean;
  hasPrevious?: boolean;
  previousConnectorColor?: string;
  nextConnectorColor?: string;
  nodeColor?: string;
  timeColor?: string;
  nodeClassName?: string;
  previousConnectorClassName?: string;
  nextConnectorClassName?: string;
  contentclassName?: string;
  timeClassName?: string;
};

export const BaseTimelineItem: FC<BaseTimelineItemProps> = (props) => {
  const {
    time,
    detail,
    horizontalScreenSizes = [],
    nodeSize = '2rem',
    customNode,
    nodeColor = 'var(--foreground)',
    timeColor = 'var(--secondary)',
    previousConnectorColor = 'var(--foreground)',
    nextConnectorColor = 'var(--foreground)',
    hasPrevious,
    hasNext,
    className = '',
    nodeClassName = '',
    previousConnectorClassName = '',
    nextConnectorClassName = '',
    contentclassName = '',
    timeClassName = '',
  } = props;

  type ResponsiveClassNames = {
    container: string;
    node: string;
    leftSpace: string;
    connector: string;
  };

  const responsiveClassNames: ResponsiveClassNames = useMemo(() => {
    const emptyClassNames: ResponsiveClassNames = { container: '', node: '', leftSpace: '', connector: '' };

    return horizontalScreenSizes.reduce((result, screen) => ({
      container: result.container + ' ' + containerResponsiveClassNameByScreen[screen],
      node: result.node + ' ' + nodeResponsiveClassNameByScreen[screen],
      leftSpace: result.leftSpace + ' ' + leftSpaceResponsiveClassNameByScreen[screen],
      connector: result.connector + ' ' + connectorResponsiveClassNameByScreen[screen],
    }), emptyClassNames);
  }, [horizontalScreenSizes]);

  const connectorSharedClassName = `grow self-center mx-auto w-0.5 min-h-3 ${responsiveClassNames.connector}`;
  const previouseConnectorStyle = getConnectorStyle(previousConnectorColor, hasPrevious);
  const nextConnectorStyle = getConnectorStyle(nextConnectorColor, hasNext);

  return (
    <li
      className={`
        flex-1
        flex w-100
        ${responsiveClassNames.container}
        ${className}
      `}
    >
      <div className={responsiveClassNames.leftSpace} />
      <div
        className={`
          flex flex-col items-center
          mx-auto
          ${responsiveClassNames.node}
          ${nodeClassName}
        `}
        style={{ minWidth: nodeSize, minHeight: nodeSize }}
      >
        <div
          className={`${connectorSharedClassName} ${previousConnectorClassName}`}
          style={previouseConnectorStyle}
        />
        {customNode ? (
          <div
            className="flex justify-center md:w-auto"
            style={{ width: nodeSize, height: nodeSize, color: nodeColor }}
          >
            {customNode}
          </div>
        ) : (
          <div
            className="flex items-center justify-center p-2 rounded-full"
            style={{ background: nodeColor }}
          />
        )}
        <div
          className={`${connectorSharedClassName} ${nextConnectorClassName}`}
          style={nextConnectorStyle}
        />
      </div>
      <div className="flex-1 m-3">
        <div className={connectorSharedClassName} />
        <div className={`min-w-40 ${contentclassName}`}>
          <time
            className={`block text-gray-500 ${timeClassName}`}
            style={{ color: timeColor }}
          >
            {time}
          </time>
          <div>
            {detail}
          </div>
        </div>
        <div className={connectorSharedClassName} />
      </div>
    </li>
  );
};
