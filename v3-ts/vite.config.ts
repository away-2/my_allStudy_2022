import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 为什么要怎么做？ 不在 main.ts  在vite 编译工程化？
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 如果写在 main.ts 里 会 热加载，重新编译
// 对于element-plus 不需要这么做	应该单独打包， 单独编译  缓存
// 开发时候的打包速度， 上线后的更新大小
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	]
});
