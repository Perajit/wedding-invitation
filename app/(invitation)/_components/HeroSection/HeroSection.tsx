'use client';

import { ThemeContext, ThemeContextValue } from '@/app/_contexts/ThemeContext';
import { SharedPropsWithWeddingInfo } from '@/app/_types/component.type';
import { Theme } from '@/app/_types/theme.type';
import { Language } from '@/app/_types/translation.type';
import { FC, useContext } from 'react';

const lang = Language.EN;

type rsvpColor = 'bg' | 'defaultText' | 'highlightText' | 'buttonText';

const rsvpColorClassNamesByTheme: Record<Theme, Record<rsvpColor, string>> = {
  day: {
    bg: 'bg-[url(/images/bg-rsvp-day.svg)]',
    defaultText: 'text-neutral-200',
    highlightText: 'text-primary',
    buttonText: 'text-foreground',
  },
  night: {
    bg: 'bg-[url(/images/bg-rsvp-night.svg)]',
    defaultText: 'text-neutral-200',
    highlightText: 'text-primary',
    buttonText: 'text-background',
  },
};

const HeroSection: FC<SharedPropsWithWeddingInfo> = (props) => {
  const { weddingInfo, className = '' } = props;

  const { theme } = useContext(ThemeContext) as ThemeContextValue;

  const coverImage = weddingInfo.coverImage[theme] ? weddingInfo.coverImage[theme] : {
    src: '',
    position: 'center',
  };

  const rsvpColorClassName = rsvpColorClassNamesByTheme[theme];

  return (
    <section
      id="hero"
      className={`
        bg-no-repeat bg-cover
        flex flex-col justify-end h-dvh overflow-hidden
        md:h-auto
        ${className}
      `}
      style={{ backgroundImage: `url(${coverImage.src})`, backgroundPosition: coverImage.position }}
    >
      <div
        className={`
          bg-no-repeat bg-contain bg-left-top
          min-w-[360px] m-[0.5rem] px-[4.5rem] pt-[4.5rem] pb-[3rem]
          md:text-2xl md:m-[1.5rem] md:mt-[10rem] md:px-[6rem] md:pt-[6rem] md:pb-[5rem]
          lg:text-2xl lg:m-[2rem] lg:mt-[12rem] lg:px-[6rem] lg:pt-[6rem] lg:pb-[5rem]
          xl:text-3xl xl:m-[2.5rem] xl:mt-[6em] xl:px-[7.5rem] xl:pt-[8rem] xl:pb-[6rem]
          ${rsvpColorClassName.bg} ${rsvpColorClassName.defaultText}
        `}
      >
        <p>
          Together with their families
        </p>
        <p
          className={`
            my-2 font-bold text-4xl
            md:text-5xl
            lg:text-5xl
            xl:text-6xl
            ${rsvpColorClassName.highlightText}
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
              inline-block rounded-xl bg-secondary px-6 py-2 mt-5 font-bold text-2xl
              md:text-3xl
              lg:text-2xl lg:mt-6
              xl:text-3xl xl:mt-8
              ${rsvpColorClassName.buttonText}
            `}
          >
            RSVP
          </a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;


