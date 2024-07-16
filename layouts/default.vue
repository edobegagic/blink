<template>
  <div class="relative h-full">
    <div
      class="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80"
    >
      <!-- Sidebar -->
      <Sidebar />
    </div>
    <main class="pb-10 md:pl-72">
      <!-- Navbar -->
      <Navbar />
      <slot />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
