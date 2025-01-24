import PlaceIcon from '@/app/_components/icon/PlaceIcon';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { FC } from 'react';

const lang = Language.TH;

const LocationSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  return (
    <section
      id="venue"
      className={`
        px-4 py-6
        bg-white
        lg:bg-transparent
        ${className}
      `}
    >
      <div
        className={`
          container
          h-full
          mx-auto
          flex flex-col
          lg:bg-white lg:rounded-2xl lg:shadow-sm lg:p-6 lg:text-left
        `}
      >
        <h1 className="mb-4 text-center text-3xl lg:text-4xl">
          Location
        </h1>
        <div className="flex justify-center gap-2 mx-auto my-2 text-stone-400 lg:mx-0">
          <PlaceIcon />
          <span>
            {weddingInfo.place.location[lang]}
          </span>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7571714561227!2d100.52458247600691!3d13.733146186656814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29928117c9971%3A0x5b3d44046d453aac!2sMandarin%20Hotel%20Bangkok%2C%20managed%20by%20Centre%20Point!5e0!3m2!1sen!2sth!4v1737135292653!5m2!1sen!2sth"
            className="mx-auto w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
