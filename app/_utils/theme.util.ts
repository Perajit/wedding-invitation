import { AppTheme } from '../_types/theme.type';

const dayCutOffHours = 6;
const nightCutoffHours = 18;

export const getDefaultTheme = (): AppTheme => {
  const currentHours = new Date().getHours();
  return currentHours >= dayCutOffHours && currentHours < nightCutoffHours ? 'day' : 'night';
};
