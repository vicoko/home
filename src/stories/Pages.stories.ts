import type { Meta, StoryObj } from '@storybook/sveltekit';
import HomePage from '../routes/+page.svelte';
import ProfilePage from '../routes/profile/+page.svelte';

const meta = {
  title: 'Pages/Overview',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const Home: StoryObj = {
  render: () => ({
    Component: HomePage,
  }),
};

export const Profile: StoryObj = {
  render: () => ({
    Component: ProfilePage,
  }),
};