'use client';

import { AppThemeContext, AppThemeContextValue } from '@/app/_contexts/AppThemeContext';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Language } from '@/app/_types/translation.type';
import { FC, useContext } from 'react';

const lang = Language.EN;

const Hero: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const { theme } = useContext(AppThemeContext) as AppThemeContextValue;

  // TODO: remove support for old type (string)
  const coverImage = typeof weddingInfo.coverImage === 'object' && weddingInfo.coverImage[theme] ? weddingInfo.coverImage[theme] : {
    src: weddingInfo.coverImage,
    position: 'center',
  };

  return (
    <div
      id="hero"
      className={`
        bg-no-repeat bg-cover
        flex flex-col justify-end
        h-dvh overflow-hidden
        md:h-auto
        ${className}
      `}
      style={{ backgroundImage: `url(${coverImage.src})`, backgroundPosition: coverImage.position }}
      data-theme={theme}
    >
      <div
        className={`
          bg-no-repeat bg-contain bg-left-top
          min-w-[360px]
          text-neutral-200
          m-[0.5rem] px-[4.5rem] pt-[4.5rem] pb-[3rem]
          md:text-2xl md:m-[1.5rem] md:mt-[10rem] md:px-[6rem] md:pt-[6rem] md:pb-[5rem]
          lg:text-2xl lg:m-[2rem] lg:mt-[12rem] lg:px-[6rem] lg:pt-[6rem] lg:pb-[5rem]
          xl:text-3xl xl:m-[2.5rem] xl:mt-[6em] xl:px-[7.5rem] xl:pt-[8rem] xl:pb-[6rem]
        `}
        style={{ backgroundImage: `url(images/bg-rsvp-${theme}.svg)` }}
      >
        <p>
          Together with their families
        </p>
        <p
          className={`
            my-2
            font-bold
            text-primary
            text-4xl
            md:text-5xl
            lg:text-5xl
            xl:text-6xl
          `}
        >
          {weddingInfo.bride.firstname[lang]}<br />& {weddingInfo.groom.firstname[lang]}
        </p>
        <p>
          Invite you to join them
        </p>
        <p>
          {weddingInfo.datetime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p>
          <a
            href={weddingInfo.rsvpUrl}
            target="_blank"
            className={`
              inline-block rounded-xl font-bold
              bg-secondary
              text-foreground
              px-6 py-2 mt-5
              text-2xl
              md:text-3xl
              lg:text-2xl lg:mt-6
              xl:text-3xl xl:mt-8
            `}
          >
            RSVP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;


