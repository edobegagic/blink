<template>
  <div class="px-8 space-y-8">
    <div class="space-y-4">
      <h1 class="text-2xl font-bold tracking-wide sm:text-4xl">
        Let's keep design human.
      </h1>
      <p>
        Keep creativity / empathy / thinking / design human, while AI handles
        the rest.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-x-10 gap-y-5">
      <div
        v-for="tool in tools"
        :key="tool.link"
        @click="navigateTo('/${tool.link}')"
        class="flex items-center justify-between p-4 transition border rounded-lg cursor-pointer hover:bg-slate-50 group"
      >
        <div class="flex items-center gap-x-3">
          <Icon :name="tool.icon" class="w-5 h-5" />

          <div class="font-semibold">{{ tool.label }}</div>
          <Icon
            name="lucide:arrow-right"
            class="w-5 h-5 group-hover:bg-fuchsia-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
