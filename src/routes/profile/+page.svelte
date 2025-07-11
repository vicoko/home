<script lang="ts">
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
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium text-gray-700">{skill.name}</span>
              <span class="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: {skill.level}%"></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each projects as project}
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
          <p class="text-gray-600 mb-4">{project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tech as tech}
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {tech}
              </span>
            {/each}
          </div>
          {#if project.link}
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
               class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Project →
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="grid gap-4 md:grid-cols-2">
        <a href="mailto:your.email@example.com" 
           class="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
          <span class="text-2xl">📧</span>
          <span>your.email@example.com</span>
        </a>
        <a href="https://github.com/yourusername" 
           target="_blank" rel="noopener noreferrer"
           class="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
          <span class="text-2xl">💻</span>
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" 
           target="_blank" rel="noopener noreferrer"
           class="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
          <span class="text-2xl">💼</span>
          <span>LinkedIn</span>
        </a>
        <a href="https://twitter.com/yourusername" 
           target="_blank" rel="noopener noreferrer"
           class="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
          <span class="text-2xl">🐦</span>
          <span>Twitter</span>
        </a>
      </div>
    </div>
  </div>
</div>