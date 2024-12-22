<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div>
      <header class="header">{{ name }}</header>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'VCard' })
defineProps<{ name: string }>()
</script>

<style scoped>
.card {
  /* width: 100%; */
  /* overflow-x: hidden; */
  border: 1px solid;
  padding: 12px;
  background-color: rgb(211, 214, 214);
  margin: 5px 0px;

  & .header {
    margin-bottom: 6px;
    font-size: 24px;
  }

  & div {
    border: 1px white solid;
    padding: 12px;
  }
}
</style>
