import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProjectCard from '$lib/components/ProjectCard.svelte';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    tech: { control: 'object' },
    link: { control: 'text' }
  }
} satisfies Meta<ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern architecture',
    tech: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://github.com/example/ecommerce'
  }
};

export const WithoutLink: Story = {
  args: {
    name: 'Internal Dashboard',
    description: 'Company internal analytics dashboard for tracking KPIs',
    tech: ['React', 'D3.js', 'Node.js'],
  }
};

export const MinimalTech: Story = {
  args: {
    name: 'Simple Blog',
    description: 'A minimalist blog built with modern tools',
    tech: ['Next.js'],
    link: 'https://example.com'
  }
};

export const ManyTechnologies: Story = {
  args: {
    name: 'Enterprise Solution',
    description: 'Large-scale enterprise application with microservices',
    tech: ['Java', 'Spring Boot', 'React', 'Redux', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    link: 'https://github.com/example/enterprise'
  }
};