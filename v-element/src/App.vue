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
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <br />
    <Button round>Default</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
    <br /><br />
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="info" disabled round>Info</Button>
    <Button type="warning" disabled round>Warning</Button>
    <Button type="danger" disabled round>Danger</Button>
    <br /><br />
    <Button plain>Default</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </header>
  <Button icon="code">Icon</Button>
  <Button loading type="success" size="small">Loading</Button>
  <Button loading type="success" size="large">Loading</Button>
  <br /><br />
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
  <main>
    <Button ref="btnRef" type="primary" plain disabled>Primary</Button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
