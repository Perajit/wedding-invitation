'use client';

import { ThemeContext, ThemeContextValue } from '@/app/_contexts/ThemeContext';
import { SharedProps } from '@/app/_types/component.type';
import { FC, useContext } from 'react';
import DayIcon from '../../icon/DayIcon';
import NightIcon from '../../icon/NightIcon';

export type BaseThemeSwitcherProps = SharedProps;

const BaseThemeSwitcher: FC<BaseThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextValue;

  const toggleToDayTheme = theme !== 'day';

  return (
    <button
      type="button"
      data-tooltip-target="tooltip-toggle"
      className={`
        inline-flex items-center justify-center p-1.5 rounded-lg
        bg-gray-200 text-gray-600
        hover:bg-gray-100
        focus:outline-none focus:ring-4 focus:ring-gray-400
        ${className}
      `}
      onClick={() => {
        setTheme(theme !== 'day' ? 'day' : 'night');
      }}
    >
      {
        toggleToDayTheme ? <DayIcon height={20} className="m-1" /> : <NightIcon height={20} className="m-1" />
      }
    </button>
  );
};

export default BaseThemeSwitcher;
