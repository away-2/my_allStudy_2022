# 数据可视化

- 认识数据
     十万条数据要在页面上展示，如何做？
     table  ul>li
     构建DOM 树  css渲染树  显示页面 白屏 内存溢出
     分页 Table + Pagination
     滚动到底部加载更多  better-scroll 

- 确定任务
    增强数据的可读性  图表

- 方案  条形图
     x  name 
     y  value 

- 技术方案的选择
     - canvas 2D   绘制方案
     - SVG  矢量图
     - webgl  3D

- 数据整理
- 绘制API canvas
- canvas  是画出来的  像素
- SVG  数学图形声明出来的， 无限拉伸
     声明式    

- vue 不用DOM 编程？
    太耗性能 
    浏览器的原理相关
    页面渲染  html/css
    js  执行 由另外的进程管理 

- SVG  Canvas  区别？
   数据简单，SVG 更佳  缺点，性能不好 ，频繁的操作DOM，SVG 依托标签来完成功能
   Canvas  绘图API 更丰富  GPU 负责 性能  大数据  
   API  有点多，用 echarts 
