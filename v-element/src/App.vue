<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Card from './components/Card/Card.vue'

const btnRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (btnRef.value) {
    console.log(btnRef.value.ref)
  }
})

const activeNames = ref(['a', 'b'])
</script>

<template>
  <div class="container">
    <header class="header">组件展示</header>
    <div class="btns">
      <Card name="Button-Type">
        <Button round>Default</Button>
        <Button type="primary" round>Primary</Button>
        <Button type="success" round>Success</Button>
        <Button type="info" round>Info</Button>
        <Button type="warning" round>Warning</Button>
        <Button type="danger" round>Danger</Button>
      </Card>
      <Card name="Button-Size">
        <Button disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="info" disabled round>Info</Button>
        <Button type="warning" disabled round>Warning</Button>
        <Button type="danger" disabled round>Danger</Button>
      </Card>
      <Card name="Button-Plain">
        <Button plain>Default</Button>
        <Button type="primary" plain>Primary</Button>
        <Button type="success" plain>Success</Button>
        <Button type="info" plain>Info</Button>
        <Button type="warning" plain>Warning</Button>
        <Button type="danger" plain>Danger</Button>
      </Card>
      <Card name="Button-Size-Icon">
        <Button icon="code">Icon</Button>
        <Button loading type="success" size="small">Loading</Button>
        <Button loading type="success" size="large">Loading</Button>
      </Card>
    </div>
    <div class="collapse">
      <Card name="Collapse">
        <Collapse v-model="activeNames" :accordion="false">
          <collapse-item title="title A" name="a">
            <p>Simplify the process: keep operating process simple and intuitive aaa;</p>
            <p>Simplify the process: keep operating process simple and intuitive aaa;</p>
          </collapse-item>

          <collapse-item title="title B" name="b">
            <template #title>
              <b>title B </b>
            </template>
            <p>Simplify the process: keep operating process simple and intuitive bbb;</p>
            <p>Simplify the process: keep operating process simple and intuitive bbb;</p>
          </collapse-item>

          <collapse-item title="title C" name="c" :disabled="true">
            <p>Simplify the process: keep operating process simple and intuitive ccc;</p>
          </collapse-item>
        </Collapse>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 24px;
  text-align: center;
}

.btns {
  padding: 20px;
}

.collapse {
  padding: 20px;
}
</style>
