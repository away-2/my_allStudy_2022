import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './mock/index'  
import {createPinia} from 'pinia'
import {
    Swipe,
    SwipeItem,
    Lazyload
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'  //rem
import './assets/main.css'

createApp(App)
console.log('////')
// 全家桶三件套
app
   .use(router)
.use(createPinia())
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.mount('#app')
