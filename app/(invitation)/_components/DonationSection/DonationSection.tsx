'use client';

import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import Image from 'next/image';
import { FC } from 'react';

const lang = Language.TH;
const qrSize = 150;

const DonationSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const donation = weddingInfo.donation;

  return donation ? (
    <section id="donation" className={`container mx-auto ${className}`}>
      <h1 className="mb-6 lg:mb-8 text-center text-2xl lg:text-3xl">
        มอบของขวัญให้บ่าวสาว
      </h1>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 justify-center items-center">
        <div>
          <Image src={donation.qrUrl} alt="" width={qrSize} height={qrSize} />
        </div>
        <div>
          {
            donation.accountInfo.map((item, index) => (
              <div
                key={item.label.EN}
                className={`flex flex-col lg:flex-row ${index > 0 ? 'mt-4' : ''}`}
              >
                <span className="mr-2 text-caption">
                  {item.label[lang]}
                </span>
                <span>
                  {item.value}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  ) : null;
};

export default DonationSection;
