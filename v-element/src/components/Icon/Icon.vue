<template>
  <i class="v-icon" :class="{ [`v-icon--${type}`]: type }" :style="customStyle" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'

defineOptions({
  name: 'VIcon',
  inheritAttrs: false
})


const props = defineProps<IconProps>()

const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
const filterProps = computed(() => {
  return omit(props, ['type', 'color'])
})

</script>

<style scoped></style>
