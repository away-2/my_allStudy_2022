import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Element-Plus Icon 分离 生成的文件大小和自由度
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import './assets/css/iocn.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 挂载到全局  Object.entries es6 迭代  解构
    app.component(key, component);
}

app.mount('#app');
