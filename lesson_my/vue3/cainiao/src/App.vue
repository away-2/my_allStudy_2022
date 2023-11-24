<template>
 <horizen-scroll-menu />
 <back-top :showHeight="showHeight">
  BackTop
 </back-top>
<div style="height: 3000px;"></div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import HorizenScrollMenu from './components/HorizenScrollMenu.vue'
import BackTop from './components/BackTop.vue'

const showHeight = ref(0)
onMounted(() =>{
  showHeight.ref.value = window.innerHeight
  // console.log(showHeight)
})
</script>

<style lang="stylus" scoped>
*
  margin 0
  padding 0
</style>