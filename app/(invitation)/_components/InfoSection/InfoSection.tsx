import BaseTimeline, { BaseTimelineProps } from '@/app/_components/base/BaseTimeline/BaseTimeline';
import HeartIcon from '@/app/_components/icon/HeartIcon';
import WeddingKhanMakProcessionIcon from '@/app/_components/icon/WeddingKhanMakProcessionIcon';
import WeddingReceptionIcon from '@/app/_components/icon/WeddingReceptionIcon';
import WeddingRingExchangeIcon from '@/app/_components/icon/WeddingRingExchangeIcon';
import WeddingWaterBlessingIcon from '@/app/_components/icon/WeddingWaterBlessingIcon';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { WeddingCeremony } from '@/app/_types/wedding.type';
import { FC, ReactNode, useMemo } from 'react';

const lang = Language.TH;

const dateTimeFormatOptionsWithSchedule: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const dateTimeFormatOptionsWithoutSchedule: Intl.DateTimeFormatOptions =  {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const timelineCustomNodeByCeremony: Record<WeddingCeremony, ReactNode> = {
  [WeddingCeremony.KhanMakProcession]: <WeddingKhanMakProcessionIcon className="h-[90px] px-2" />,
  [WeddingCeremony.RingExchange]: <WeddingRingExchangeIcon className="h-[90px] px-2" />,
  [WeddingCeremony.WaterBlessing]: <WeddingWaterBlessingIcon className="h-[90px] px-2" />,
  [WeddingCeremony.Reception]: <WeddingReceptionIcon className="h-[90px] px-2" />,
};

const InfoSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const schedule = weddingInfo.schedule;
  const dateTimeFormatOptions = schedule.length > 0 ? dateTimeFormatOptionsWithSchedule : dateTimeFormatOptionsWithoutSchedule;

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
    <section
      id="info"
      className={`
        px-4 py-6
        ${className}
      `}
    >
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-14">
          <p>
            ขอเรียนเชิญเพื่อเป็นเกียรติเนื่องในพิธีมงคลสมรสระหว่าง
          </p>
          <div className="my-8 font-bold text-3xl lg:text-4xl text-primary">
            <p>
              {weddingInfo.bride.firstname[lang]} {weddingInfo.bride.lastname[lang]}
            </p>
            <p>
              <HeartIcon height={18} className="mx-auto my-2" />
            </p>
            <p>
              {weddingInfo.groom.firstname[lang]} {weddingInfo.groom.lastname[lang]}
            </p>
          </div>
          <p>
            {weddingInfo.datetime.toLocaleDateString('th-TH', dateTimeFormatOptions)}
          </p>
          <p>
            <a href="#venue" className="text-link">
              ณ {weddingInfo.place.title[lang]}
            </a>
          </p>
        </div>
        <BaseTimeline
          items={timelineItems}
          horizontalScreenSizes={['md', 'lg', 'xl', '2xl']}
          nodeSize="90px"
          className={`
            mx-auto pl-12
            max-w-96
            md:max-w-full
            lg:max-w-[80%]
            xl:max-w-[75%]
          `}
          nodeClassName="opacity-75"
          timeClassName="font-bold"
        />
        <p className="mt-8 text-center italic text-stone-400 text-2xl">
          {weddingInfo.hashtag}
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
