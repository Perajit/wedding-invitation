import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';

import { mockWeddingInfo } from '@/app/_mocks/wedding-info.mock';
import GallerySection from './GallerySection';

const meta = {
  title: 'Base/Invitation/GallerySection',
  component: GallerySection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GallerySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weddingInfo: mockWeddingInfo,
  },
};
