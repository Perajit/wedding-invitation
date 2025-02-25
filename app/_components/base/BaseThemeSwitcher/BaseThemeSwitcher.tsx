'use client';

import { AppThemeContext, AppThemeContextValue } from '@/app/_contexts/AppThemeContext';
import { SharedProps } from '@/app/_types/component.type';
import { FC, useContext } from 'react';
import DayIcon from '../../icon/DayIcon';
import NightIcon from '../../icon/NightIcon';

export type BaseThemeSwitcherProps = SharedProps;

const BaseThemeSwitcher: FC<BaseThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, setTheme } = useContext(AppThemeContext) as AppThemeContextValue;

  const toggleToDayTheme = theme !== 'day';

  return (
    <button
      type="button"
      data-tooltip-target="tooltip-toggle"
      className={`
        inline-flex items-center justify-center w-9 h-9 p-1.5 rounded-lg
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
        toggleToDayTheme ? <DayIcon /> : <NightIcon />
      }
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
};

export default BaseThemeSwitcher;
