- 地图功能  定位   标点
   1. 组件
      view div  UI 组件
   2. wx.  微信给我们的强大能力
      坐标   冻梨  
   3. swiper scroll-view  功能组件
        map 组件  显示在页面上的
 
 - 在开发那个页面，app.json 中把相应的页面提前
 - 能够wx.request 请求 url?   fastmock  接口请求模拟
 打开要模仿的项目分析你的数据  ，使用json解构起来
   success
   [{
         img:,
         title:,
         subTitle:'',
         author:,
         score:,
         action:''
   }]

   - 移动端界面开发，多用弹性布局， 关键
    1. display：flex;  文档流中， 开启了一个BFC
    2. 父容器和子元素们的布局方式
      子元素  默认块级能力会丢失

    
