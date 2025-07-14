<script lang="ts">
  export let name: string;
  export let level: number;
</script>

<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium text-gray-700">{name}</span>
    <span class="text-sm text-gray-500">{level}%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2">
    <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: {level}%"></div>
  </div>
</div>