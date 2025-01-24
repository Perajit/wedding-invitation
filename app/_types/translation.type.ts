export enum Language {
  EN = 'EN',
  TH = 'TH'
};

export type Translation<T> = Record<Language, T>;
