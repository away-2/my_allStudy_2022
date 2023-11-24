# 塔斯汀小程序 模仿项目

- 本项目归塔斯汀所有， 只做学习所用 ， 请尊重原厂版权
- 可以去监听访问数据  fiddler  抓包工具抓取数据
- 
- 界面模仿采用markman做标记
  1. 无设计稿，如何1：1还原小程序？
  2. 拍平得到小程序截图
  3. 使用在线大小[转换工具](https://www.gaitubao.com/)，将图片改成750
    以后写项目时，直接可量像素， 因为小程序以750rpx作为
    设计稿标准大小帮我们自动适配，很好用
  4. 使用[markman](http://www.getmarkman.com/)先标注， 再写样式


  - 项目配置在根目录app.json
    - 隐藏并定制  "navigationStyle": "custom"
    - 启动定位功能
   
   
   - 使用了BEM 国际css命名规范
    一般命名 tst_banners 广告位  block
             tst_banners__img   Element


- css 技巧
  1. 能不用定位就不要用定位
     脱离文档流
  2. 移动端多用弹性布局


  第一次git 命令行提交
  全局配置 
  1. 
    git config --global http.sslVerify false
    git config --global user.name "shunwuyu"  换成你的github 名字
    git config --global user.email "shunwu2001@163.com" 换成你的github 注册邮箱

  2.  ssh-keygen -t rsa -C '邮箱'  换成你在上面填的邮箱   
    一路回车   会在 C:\Users\86199\.ssh\       86199 你的目录下
    cat id_rsa.pub   选中所有的输出内容
    打开网页  https://github.com/settings/profile
    https://github.com/settings/keys
    点击 New SSH key
    title 随便取   Key  设置为
    刚刚选中的内容
    点击添加
  3. 回到 项目目录   /tastien
    git init    如果之前初始化过 忽略
    git  add .   
    git  commit -m 'first commit'
    git push -u origin master

    上传成功， git 能看到本地代码成功

- 滴滴swiper 多页活动菜单功能
   1. 用户体验   less is more  摆在第一位
      菜单过多，用户体验不佳,  把重要的放首页
      其他页可多放 
      技术难度
      1. swiper > 2 swiper-item
      2. swiper 高度  变化的  等高的
          2行
          4行的高度
          swiper height 响应式的数据  
      3. class="didi_menus {{'higher_menus'}}"
      {{}} 占位符  返回值是替换的值
      js运行区域
      4. swiper bindChange 事件
      event 对象中
      event.detail.current  当前是第几个swiper-item?
      menu_type
      this.setData()
- 数据 相应式编程
  它是一个思想， 有别于DOM 编程API
  设置一些页面效果，操作的不是DOM，
  操作是数据， 因为数据一旦发生改变， 页面会自动更新。
  1. 滴滴可变高度的首页菜单
  2. tabbar 组件
     data 添加  tab 属性， 表示当前哪个tab被激活
     tab-item 添加bindtap  事件
     tab-item  data-tab 数据属性 data-
     e.currentTarget  点击当前元素
     e.currentTarget.dataset.tab 数据
3. 外卖品类级菜单数据设计
  2个scroll-view, 数据是有相关性的
  2层嵌套的json结构
  [分类数组
  {
      菜品数组：[

      ]
  }

  ]

- 奶茶小程序的门店选择页
   1. LBS Location Base Service
       高德 LBS 技术
       美团 
   2. wx.getLocation
     lat long


- css的技巧
  1. 选择器优先级
  p.md2  11
  p.md2 + div.md3  11+11  22
    标签1 < 类名10 < id 100 < 计算表达式
   行内样式  优先级更高 少用
   ！important 最高 慎用
   2. 弹性布局 
      移动端  flex   可以解决大部分问题
      div  块级
      布局的一种  跟外部不一样的布局， 
      flex  内部  块级能力丢失  BFC
      Block formating context
      BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

3. BEM 国际命名规范
    Block  开始   rx_tab  新的组件
    Element  内部元素的申明  rx_tab__item
    Modifier  rx_tab__item-on

4. 运用常规css 命名套路
  - BEM  开启一个新的功能区域
  - .wx_btn .wx_btn-primary
  - .page>.page__hd+.page__bd+.page__ft
  .cell>.cell__hd+.cell__bd+.cell__ft
  - __Element 只做一级， 用简单单词  不重复
5. 小程序不允许在wxss 里面 background：url（本地图片）
 - 小程序之所以小，  不要做太多事情  产品定位
 - 包的大小要小于2M,
 - base64 格式 ， 图片格式，
   乱码一样， Goodgle 图片格式 ， 更小
   - background: url()
6. 视频播放列表页逻辑
 - 得有远程可播放视频
 - 视频有poster 封面
 - 显示和点击的是图片，
 - currentVid  逻辑切换
   dataset.vid
       image  currentVid ! == vid
       video  currentVid == vid

- 中大型应用  建议采用框架
   有栈  vant
   1. 小程序  变成node  项目  
      npm init -y   package.json
   2. npm i @vant/weapp -S --production
   node_modules/@vant
   3. 工具 -> 构建 npm  miniprogram_npm
   4. 去除app.json
    v2
   5. 引入要用的组件

   

      


 
     
