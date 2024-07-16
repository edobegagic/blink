<script setup lang="ts"></script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="outline"
        class="pr-4 transition md:hidden hover:opacity-75"
      >
        <Icon name="lucide:menu" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="p-0 bg-white">
      <Sidebar />
    </SheetContent>
  </Sheet>
</template>
