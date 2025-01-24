import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import BaseTimeline from './BaseTimeline';

const meta = {
  title: 'Base/BaseTimeline',
  component: BaseTimeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BaseTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        time: '08:39',
        detail: (<>
          <div>พิธีแห่ขันหมาก</div>
          <div>ห้อง ABC (ชั้น 1)</div>
        </>),
      },
      {
        time: '09:19',
        detail: 'พิธีสวมแหวน',
      },
      {
        time: '09:39',
        detail: 'พิธีหลั่งน้ำพระพุทธมนต์',
      },
      {
        time: '12:00',
        detail: 'ฉลองมงคลสมรส',
      },
    ],
    horizontalScreenSizes: ['md', 'lg', 'xl', '2xl'],
  },
};

export const Custom: Story = {
  args: {
    items: [
      {
        time: '08:39',
        detail: (<>
          <div>พิธีแห่ขันหมาก</div>
          <div>ห้อง ABC (ชั้น 1)</div>
        </>),
        customNode: <div className="self-center w-[60px] h-[60px] rounded-full bg-blue-500" />,
      },
      {
        time: '09:19',
        detail: 'พิธีสวมแหวน',
        nodeColor: 'var(--foreground)',
      },
      {
        time: '09:39',
        detail: 'พิธีหลั่งน้ำพระพุทธมนต์',
        customNode: <div className="self-center w-[80px] h-[80px] rounded-full bg-violet-500" />,
      },
      {
        time: '12:00',
        detail: 'ฉลองมงคลสมรส',
      },
    ],
    nodeSize: '80px',
    connectorColor: '#9A92A3',
    horizontalScreenSizes: ['md', 'lg', 'xl', '2xl'],
  },
};
