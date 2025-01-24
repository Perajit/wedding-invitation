import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import BaseImageCollection from './BaseImageCollection';

const meta = {
  title: 'Base/BaseImageCollection',
  component: BaseImageCollection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BaseImageCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { src: 'https://picsum.photos/id/1/200/300' },
      { src: 'https://picsum.photos/id/2/200/300' },
      { src: 'https://picsum.photos/id/3/200/300' },
      { src: 'https://picsum.photos/id/4/200/300' },
      { src: 'https://picsum.photos/id/5/200/300' },
      { src: 'https://picsum.photos/id/6/200/300' },
    ],
  },
};
