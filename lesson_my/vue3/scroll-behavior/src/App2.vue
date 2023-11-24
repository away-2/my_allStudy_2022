<script setup>
import { ref, onMounted,nextTick ,onUpdated,onBeforeUpdate} from 'vue'

let count = ref(0)
onMounted(() =>{
  count.value++  //1
  count.value++
  // promise 
  nextTick(() =>{
      console.log(document.querySelector('.count').innerText)
  })
  
})
// nextTick(() =>{
//   console.log(document.querySelector('.count').innerText)

// })
// onUpdated(() =>{
//   console.log('onUpdated'+document.querySelector('.count').innerText)

// })
// onBeforeUpdate(() =>{
//   console.log('onBeforeUpdate',document.querySelector('.count').innerText)

// })

</script>

<template>
<div class="count"> {{count}}</div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <Component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <Component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
  </router-view>
</template>

<style scoped>

</style>
