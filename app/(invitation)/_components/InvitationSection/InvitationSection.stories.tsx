import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import InvitationSection from './InvitationSection';

const meta = {
  title: 'Base/Invitation/InvitationSection',
  component: InvitationSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InvitationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weddingInfo: mockWeddingInfo,
  },
};
