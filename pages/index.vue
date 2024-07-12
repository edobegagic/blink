<template>
  <div>
    <div>hello index</div>
    {{ user }}
    <Button>Click Here</Button>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style lang="scss" scoped></style>
