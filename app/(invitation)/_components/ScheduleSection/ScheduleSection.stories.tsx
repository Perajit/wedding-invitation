import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import ScheduleSection from './ScheduleSection';

const meta = {
  title: 'Base/Invitation/ScheduleSection',
  component: ScheduleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScheduleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weddingInfo: mockWeddingInfo,
  },
};
