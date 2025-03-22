import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import DonationSection from './DonationSection';

const meta = {
  title: 'Base/Invitation/DonationSection',
  component: DonationSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DonationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weddingInfo: mockWeddingInfo,
  },
};
