import { Theme } from '../_types/theme.type';

const dayCutoffThHours = 6;
const nightCutoffThHours = 18;

export const getDefaultTheme = (): Theme => {
  const currentUtcHours = new Date().getUTCHours();
  const currentThHours = currentUtcHours + 7;

  return currentThHours >= dayCutoffThHours && currentThHours < nightCutoffThHours ? 'day' : 'night';
};
