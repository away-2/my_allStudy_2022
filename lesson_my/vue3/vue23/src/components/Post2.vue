<template>
    <div class="cart mt-1">
     <div class="spinner-border p-2 m-2" role="status" v-if="loading">
     <span class="visually-hidden">Loading...</span>
     </div>
     <div class="cart-body text-start" v-if="!loading">
     <h5 class="cart-title">
         <a :href="detail.url">{{ detail.title }}</a>
     </h5>
     <p class="cart-text text-end">
         Score: <b>{{ detail.score }}</b>
         <br>
         by: <i>{{ detail.by }}</i>
         <br>
     </p>
     </div>
    </div>
 </template>
 
 <script>
 export default {
     name: "post",
     data() {  //私有状态
         return {
             loading:true
         }
     },
     props:["detail"],   // 父组件传递过来的
     mounted(){
         setTimeout(() => {
             this.loading =!this.loading
         },2000)
     }
 }
 </script>
 
 <style>
 
 </style>