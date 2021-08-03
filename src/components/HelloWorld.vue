<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <!-- <button @click="testRequest">接口测试</button> -->
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import request from '../utils/request.js'
import qs from 'qs'

defineProps({
  msg: String
})

const state = reactive({
  count: 0
})
const testRequest = request({
  method: 'post',
  url: '/todos',
  // params: { id: 1 }
  data: qs.stringify({ id: 1 })
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
