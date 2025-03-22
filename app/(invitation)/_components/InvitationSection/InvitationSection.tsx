'use client';

import HeartIcon from '@/app/_components/icon/HeartIcon';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { FC } from 'react';

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

const InvitationSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const schedule = weddingInfo.schedule;
  const dateTimeFormatOptions = schedule.length > 0 ? dateTimeFormatOptionsWithSchedule : dateTimeFormatOptionsWithoutSchedule;

  return (
    <section id="invitation" className={`container mx-auto text-center ${className}`}>
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
        <a href="#location" className="text-link">
          ณ {weddingInfo.place.title[lang]}
        </a>
      </p>
    </section>
  );
};

export default InvitationSection;
