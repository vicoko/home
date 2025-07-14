<script lang="ts">
  export let name: string;
  export let description: string;
  export let tech: string[] = [];
  export let link: string | undefined = undefined;
</script>

<div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
  <h3 class="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
  <p class="text-gray-600 mb-4">{description}</p>
  <div class="flex flex-wrap gap-2 mb-4">
    {#each tech as techItem}
      <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
        {techItem}
      </span>
    {/each}
  </div>
  {#if link}
    <a href={link} target="_blank" rel="noopener noreferrer" 
       class="text-blue-600 hover:text-blue-800 text-sm font-medium">
      View Project →
    </a>
  {/if}
</div>