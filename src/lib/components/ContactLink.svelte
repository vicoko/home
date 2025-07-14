<script lang="ts">
  export let href: string;
  export let icon: string;
  export let label: string;
</script>

<a {href} 
   target="_blank" 
   rel="noopener noreferrer"
   class="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
  <span class="text-2xl">{icon}</span>
  <span>{label}</span>
</a>