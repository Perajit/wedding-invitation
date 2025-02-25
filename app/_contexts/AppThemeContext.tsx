'use client';

import { createContext, FC, PropsWithChildren, useState } from 'react';
import { AppTheme } from '../_types/app.type';
import { getDefaultTheme } from '../_utils/app.util';

export type AppThemeContextValue = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
};

export const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export type AppThemeContextProviderProps = PropsWithChildren;

export const AppThemeContextProvider: FC<AppThemeContextProviderProps> = (props) => {
  const { children } = props;

  const initialTheme = getDefaultTheme();
  const [theme, setTheme] = useState(initialTheme);

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
