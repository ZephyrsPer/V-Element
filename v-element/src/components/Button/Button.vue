<template>
  <button
    ref="_ref"
    class="v-button"
    :class="{
      [`v-button--${type}`]: type,
      [`v-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon v-if="loading" icon="spinner" spin />
    <Icon v-if="icon" :icon="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<!-- 使用了setup语法，组件实例默认关闭，无法访问this -->
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'

// 定义组件中的一些属性
defineOptions({ name: 'VButton' })
// 定义组件需要的参数
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()
// 使用defineExpose暴露属性
defineExpose({
  ref: _ref,
})
</script>

<style scoped></style>
