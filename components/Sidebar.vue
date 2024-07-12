<template>
  <div class="flex flex-col h-full py-4 space-y-4 bg-white border-r shadow-sm">
    <div class="flex-1 px-3 py-2">
      <NuxtLink to="/">
        <div class="w-32 h-32 p-3 mr-4">
          <img src="/logo.svg" alt="blink logo" /></div
      ></NuxtLink>
      <div class="space-y-1">
        <NuxtLink
          v-for="route in dashboardLinks"
          :key="route.link"
          :to="route.link"
          class="flex justify-start w-full p-3 text-sm font-medium transition rounded-lg cursor-pointer group text-primary hover:bg-muted"
          :class="{
            'bg-muted': currentRoute.path === route.link,
          }"
          ><div class="flex items-center flex-1 gap-x-3">
            <Icon :name="route.icon" :class="`h-5 w-5 ${route.color}`" />
            {{ route.label }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentRoute = useRoute();
</script>

<style lang="scss" scoped></style>
