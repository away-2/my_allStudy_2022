<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'

const tel = ref('')
// 组件通信如何实现？

setTimeout(()=>{
  tel.value='110'
})
</script>

<template>
  {{ tel }}
  <!-- <Input :modelValue="tel" @update:modelValue="tel=$event"/> -->
 <Input v-model="tel" :disabled="true" placeholder="请输入电话号码"/>
</template>

<style scoped>

</style>
