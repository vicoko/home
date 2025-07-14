<script lang="ts">
  import SkillBar from '$lib/components/SkillBar.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import ContactLink from '$lib/components/ContactLink.svelte';

  interface Skill {
    name: string;
    level: number;
  }

  interface Project {
    name: string;
    description: string;
    tech: string[];
    link?: string;
  }

  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'SvelteKit', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const projects: Project[] = [
    {
      name: 'Personal Homepage',
      description: 'A modern personal website built with SvelteKit and Tailwind CSS',
      tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/homepage'
    },
    {
      name: 'Project Two',
      description: 'Description of another awesome project',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/project2'
    }
  ];

  const contacts = [
    { href: 'mailto:your.email@example.com', icon: '📧', label: 'your.email@example.com' },
    { href: 'https://github.com/yourusername', icon: '💻', label: 'GitHub' },
    { href: 'https://linkedin.com/in/yourusername', icon: '💼', label: 'LinkedIn' },
    { href: 'https://twitter.com/yourusername', icon: '🐦', label: 'Twitter' }
  ];
</script>

<div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="flex items-center space-x-6 mb-6">
        <div class="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center">
          <span class="text-3xl text-gray-600">👤</span>
        </div>
        <div>
          <h2 class="text-2xl font-semibold text-gray-900">Your Name</h2>
          <p class="text-gray-600">Full Stack Developer</p>
          <p class="text-sm text-gray-500 mt-1">📍 Your Location</p>
        </div>
      </div>
      <p class="text-gray-700 leading-relaxed">
        Passionate developer with expertise in modern web technologies. 
        I enjoy building elegant solutions to complex problems and learning new technologies.
        When I'm not coding, you can find me exploring new places or reading about the latest tech trends.
      </p>
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="space-y-4">
        {#each skills as skill}
          <SkillBar name={skill.name} level={skill.level} />
        {/each}
      </div>
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="grid gap-4 md:grid-cols-2">
        {#each contacts as contact}
          <ContactLink {...contact} />
        {/each}
      </div>
    </div>
  </div>
</div>