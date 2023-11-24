<template>
  <div>
    Add
    {{profile.loginUserName}}------{{ profile.nickName }}
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useUserStore} from '@/store/user.js'
// 如何从中央去profile 到页面组件?
const userStore = useUserStore(); // useRouter hooks
console.log(userStore.profile.loginUserName, '????');

const profile = computed(() => userStore.profile)
console.log(profile, '啊啊啊好烦啊啊啊啊');

</script>

<style lang="stylus" scoped>

</style>