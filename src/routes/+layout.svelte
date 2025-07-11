<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-gray-50">
  <nav class="bg-white shadow-sm">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="text-xl font-semibold">Home</a>
          </div>
          <div class="ml-6 flex space-x-8">
            <a href="/profile" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main>
    <slot />
  </main>
</div>