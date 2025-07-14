import type { Meta, StoryObj } from '@storybook/sveltekit';
import SkillBar from '$lib/components/SkillBar.svelte';

const meta = {
  title: 'Components/SkillBar',
  component: SkillBar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    level: { 
      control: { type: 'range', min: 0, max: 100, step: 5 } 
    }
  }
} satisfies Meta<SkillBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'JavaScript',
    level: 85
  }
};

export const Beginner: Story = {
  args: {
    name: 'Rust',
    level: 25
  }
};

export const Intermediate: Story = {
  args: {
    name: 'Python',
    level: 60
  }
};

export const Expert: Story = {
  args: {
    name: 'TypeScript',
    level: 95
  }
};