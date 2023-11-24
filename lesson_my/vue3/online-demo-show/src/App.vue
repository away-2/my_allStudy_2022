<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

router.beforeEach((to, from, next) => {
  // console.log(to, '---------------');
  if (to.meta.login) {
    next('/login')
  }
  next()
})
</script>

<template>
<router-link to="/second">Second</router-link>
<router-view />
</template>

<style>

</style>
