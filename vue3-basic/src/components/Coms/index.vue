<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { computed, defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const count = ref(0)
    const increase = () => count.value++

    /* 
    1. 计算属性值会基于其响应式依赖被缓存
    2. 计算属性默认是只读的，所以不会被缓存
    3. 计算属性可以缓存多个依赖
     */
    const double = computed(() => count.value * 2)

    /* 
    watch(source, (newValue, oldValue) => {},{immediate: true})
    默认是在dom更新之前触发的，如果想改变出发时机。
    1. 默认是异步的，在dom更新之后触发
    2. 可以通过immediate: true，在dom更新之前触发
    */
    const newCount = ref<number>(0)

    watch(
      count,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (newValue, _oldValue) => {
        newCount.value = newValue + 1
      },
      { immediate: true }
    )

    return {
      count,
      double,
      newCount,
      increase
    }
  },
  components: {
    // HelloWorld
  }
})
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    双倍{{ double }} 新的值{{ newCount }}
    <button @click="increase">+</button>
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
