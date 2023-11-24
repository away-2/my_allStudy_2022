<template>
    <button @click="login">
  登录
</button>
</template>

<script setup>
import { doLogin } from '../service/user.js'
const login = async () => {
  const user = {
    name: 'admin',
    password: '123456'
  }
  const data = await doLogin(user)
  console.log(data)
  if (data.code != 0) {
    console.log(data.msg)
  } else {
    // 成功了
    if (data.token) {
      localStorage.setItem('token', data.token)
    } 
    // 跳转页面

  }
}
</script>

<style scoped>

</style>