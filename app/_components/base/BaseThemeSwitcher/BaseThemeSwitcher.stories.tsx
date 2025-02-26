import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeContextProvider } from '@/app/_contexts/ThemeContext';
import BaseThemeSwitcher from './BaseThemeSwitcher';

const meta = {
  title: 'Base/BaseThemeSwitcher',
  component: BaseThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeContextProvider>
        <Story />
      </ThemeContextProvider>
    ),
  ],
} satisfies Meta<typeof BaseThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
