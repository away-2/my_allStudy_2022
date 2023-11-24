<template>
	<div class="chart" ref="chartEl"></div>
</template>

<script setup>
import {ref,onMounted,nextTick} from 'vue'
const chartEl = ref(null);
let categories = ['老包','老南','老君'];
let genDataArr = () => {
	return categories.map(t => Math.ceil(Math.random() * 100));
}
onMounted(() => {
	// console.log(chartEl.value);
	// 确保更新全部到位
	nextTick(() => {
		const chart = echarts.init(chartEl.value,null,{
			width: 500,
			height: 500
		});
		const option = {
			legend: {
				data: ['黑子程度']
			},
			xAxis: {
				data: categories
			},
			yAxis: {},
			series: [
				{
					name: '销量',
					type: 'bar',
					data: genDataArr()
				}
			]
		};
		chart.setOption(option);
	})
})
</script>

<style>

</style>