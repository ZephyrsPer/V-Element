<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, watch } from 'vue'
import { collapseContextKey } from './types'
import type { NameType, CollapseProps, CollapseEmits } from './types'
defineOptions({
  name: 'VCollapse',
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = defineModel<NameType[] | NameType>({ required: true })
// const activeNames = ref<NameType[]>(props.modelValue)
if (props.accordion && activeNames.value.length > 1) {
  console.warn('手风琴效果初始值只能为1个')
}
const handleItemClick = (name: NameType) => {
  let _acitveNames: NameType[] | NameType
  if (props.accordion && typeof activeNames.value === 'string') {
    _acitveNames = [activeNames.value]
  } else {
    _acitveNames = [...activeNames.value]
  }

  const index = _acitveNames.indexOf(name)
  if (props.accordion) {
    _acitveNames = _acitveNames[0] === name ? '' : name
  } else {
    if (index > -1) {
      _acitveNames.splice(index, 1)
    } else {
      _acitveNames.push(name)
    }
  }
  activeNames.value = _acitveNames
  //emits('update:modelValue', _acitveNames)
  emits('change', _acitveNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  },
)
</script>

<style scoped></style>
