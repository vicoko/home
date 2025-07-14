import type { Meta, StoryObj } from '@storybook/sveltekit';
import ContactLink from '$lib/components/ContactLink.svelte';

const meta = {
  title: 'Components/ContactLink',
  component: ContactLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    icon: { control: 'text' },
    label: { control: 'text' }
  }
} satisfies Meta<ContactLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    href: 'mailto:john.doe@example.com',
    icon: '📧',
    label: 'john.doe@example.com'
  }
};

export const GitHub: Story = {
  args: {
    href: 'https://github.com/johndoe',
    icon: '💻',
    label: 'GitHub'
  }
};

export const LinkedIn: Story = {
  args: {
    href: 'https://linkedin.com/in/johndoe',
    icon: '💼',
    label: 'LinkedIn'
  }
};

export const Twitter: Story = {
  args: {
    href: 'https://twitter.com/johndoe',
    icon: '🐦',
    label: 'Twitter'
  }
};

export const Portfolio: Story = {
  args: {
    href: 'https://johndoe.com',
    icon: '🌐',
    label: 'Portfolio Website'
  }
};