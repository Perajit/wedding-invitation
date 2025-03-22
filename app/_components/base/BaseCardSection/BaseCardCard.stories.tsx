import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeContextProvider } from '@/app/_contexts/ThemeContext';
import BaseCardSection from './BaseCardSection';

const meta = {
  title: 'Base/BaseCardSection',
  component: BaseCardSection,
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
} satisfies Meta<typeof BaseCardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
