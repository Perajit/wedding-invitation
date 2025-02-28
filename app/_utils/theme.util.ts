'use client';

import { Theme } from '@/app/_types/theme.type';

const timeZone = 'Asia/Bangkok';
const dayCutoffTimeString = '06:00:00';
const nightCutoffTimeString = '18:00:00';

export const getDefaultTheme = (): Theme => {
  const currentDate = new Date();
  const localTimeString = currentDate.toLocaleTimeString('th-TH', { timeZone });

  return localTimeString >= dayCutoffTimeString && localTimeString < nightCutoffTimeString ? 'day' : 'night';
};
