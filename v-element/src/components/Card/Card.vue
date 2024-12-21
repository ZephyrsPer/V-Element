<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <header class="header">{{ name }}</header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'VCard' })
defineProps<{ name: string }>()
</script>

<style scoped>
.card {
  border: 1px solid;
  padding: 12px;
  background-color: rgb(211, 214, 214);

  & .header {
    margin-bottom: 6px;
    font-size: 24px;
  }
}
</style>
