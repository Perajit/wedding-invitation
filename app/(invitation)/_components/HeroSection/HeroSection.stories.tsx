import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import HeroSection from './HeroSection';

const meta = {
  title: 'Base/Invitation/Hero',
  component: HeroSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weddingInfo: mockWeddingInfo,
  },
};
