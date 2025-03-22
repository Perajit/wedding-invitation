'use client';

import BaseTimeline, { BaseTimelineProps } from '@/app/_components/base/BaseTimeline/BaseTimeline';
import WeddingKhanMakProcessionIcon from '@/app/_components/icon/WeddingKhanMakProcessionIcon';
import WeddingReceptionIcon from '@/app/_components/icon/WeddingReceptionIcon';
import WeddingRingExchangeIcon from '@/app/_components/icon/WeddingRingExchangeIcon';
import WeddingWaterBlessingIcon from '@/app/_components/icon/WeddingWaterBlessingIcon';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { WeddingCeremony } from '@/app/_types/wedding.type';
import { FC, ReactNode, useMemo } from 'react';

const lang = Language.TH;

const timelineCustomNodeByCeremony: Record<WeddingCeremony, ReactNode> = {
  [WeddingCeremony.KhanMakProcession]: <WeddingKhanMakProcessionIcon className="h-[90px] px-2" />,
  [WeddingCeremony.RingExchange]: <WeddingRingExchangeIcon className="h-[90px] px-2" />,
  [WeddingCeremony.WaterBlessing]: <WeddingWaterBlessingIcon className="h-[90px] px-2" />,
  [WeddingCeremony.Reception]: <WeddingReceptionIcon className="h-[90px] px-2" />,
};

const ScheduleSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const schedule = weddingInfo.schedule;

  const timelineItems: BaseTimelineProps['items'] = useMemo(() => {
    return schedule.map((scheduleItem) => ({
      time: scheduleItem.time[lang],
      detail: (
        <>
          {scheduleItem.detail[lang].map((text) => <div key={text}>{text}</div>)}
        </>
      ),
      customNode: timelineCustomNodeByCeremony[scheduleItem.ceremony],
    }));
  }, [schedule]);

  return (
    <section id="schedule" className={`container mx-auto ${className}`}>
      <h1 className="md:mb-4 lg:mb-6 text-center text-2xl lg:text-3xl">
        กำหนดการ
      </h1>
      <BaseTimeline
        items={timelineItems}
        horizontalScreenSizes={['md', 'lg', 'xl', '2xl']}
        nodeSize="90px"
        className="max-w-96 md:max-w-full lg:max-w-[80%] xl:max-w-[75%] mx-auto -mb-3 pl-12 md:pl-0"
        nodeClassName="opacity-75"
        timeClassName="mb-1 font-bold"
      />
    </section>
  );
};

export default ScheduleSection;
