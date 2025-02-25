'use client';

import { createContext, FC, PropsWithChildren, useState } from 'react';
import { Theme } from '../_types/theme.type';
import { getDefaultTheme } from '../_utils/theme.util';

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export type ThemeContextProviderProps = PropsWithChildren;

export const ThemeContextProvider: FC<ThemeContextProviderProps> = (props) => {
  const { children } = props;

  const initialTheme = getDefaultTheme();
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
