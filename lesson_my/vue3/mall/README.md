# vue3 写商城
- 简历需要

- vue3 语法
    - 过滤器 filters    换了表现形式
        computed data -> 计算
        格式转化 进制转换  汇率  语言
        入口可以配置多个过滤器
        app.config.globalProperties.$filters = {
            prefix(url) {
                if()....
            }
        }

- 设计模式
    DRY Don't repeat yourself

- 工程化  vite
    前端工程化  运行在服务器端  node
    .vue  style lang="stylus"   css  工程  stylus | less
    stylus -> vite  -> npm i stylus  -> 转译为css ->  页面上的css
    vite.config.js  vite 配置文件  工程化定制

- 组件化思想
    state  状态对象， 响应式   数据驱动界面
    常规的组件数据都放到state 中  由 reactive({...})
    子组件和state 诞生依赖关系  热更新 
    components 组件  有利于 页面级组件或大组件更好维护， template 比较简洁
    维护好数据状态  正确
    - simple-header
        noback  props  组件的复用和应用场景


- 商业应用npm包
    - vant 有赞，  移动商城组件库
    - lib-flexible   移动适配库
    - vue-router  路由  

- 架构（目录的意义）
     vite  工程化   项目模板
     - src   开发目录
         - assets  静态资源目录
               css  image
               main.css  base.css  @import  模块化
         - views  页面级别组件
         - common  文件夹
            通用的， 和具体业务无关， 可以在任何页面， 任何项目
            style 通用的样式
                - mixin.styl
                    专门放通用的混合函数的地方
        - service  api
            定义接口的地方
            方便统一管理接口  axios  baseURL ...
            每个页面的接口一个独立的文件   易维护

- 异步解决方案
    - promise  es6  pending -> fulfilled
    - 同步化   流程难控制
    - es8 async + await  多个异步任务要同步化的时候  thenable 要简化 
        

- 全家桶
    - vue-router
        - redirect
           流程如下
           - 用户通过访问 / 来到  /   path：'/'  -> /
           -假如  component: Home.vue  200 状态码表示成功
           - 但是 redirect 
                  没有直接给浏览器响应
                  给浏览器发送了一个跳转指令
                  再次发出请求 ！    /home    如何跳转？  在浏览器network之中可见 状态码 
                     200 – 服务器成功返回网页
                     404 – 请求的网页不存在
                     503 – 服务器超时
                    
                     2xx （成功）
                     表示成功处理了请求的状态码。

                     3xx （重定向）
                     要完成请求，需要进一步操作。

                     4xx（请求错误）
                     这些状态码表示请求可能出错，妨碍了服务器的处理

                     5xx（服务器错误）
                     这些状态码表示服务器在处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。

- stylus
    css 全新写法， 写起来更快， 很多的高级功能
    css 的超级
    - npm  i  stylus
          安装stylus   css  预编译器
          用全新的写法来写css， stylus， 帮我们自动编译成css

    - .vue style  lang="stylus"
    - 不用写{}  : ;  快速
        写了也没事
    - 表达父子元素的元素   css 模块
        缩进   自动加上父元素的限定
    - 混合mixin
        形式上是函数
        封装某个功能样式的集合
        混合到调用它的地方
    - 申明变量
    - scoped
        防止css 类名冲突 
        给组件加data-v-hash唯一值
        选择器加上属性选择器
    - &.active
        & 引用上一级选择器

- main.js   入口文件，有哪些工作
       全局性视野
       - 完整的vue  全家桶
              router  SAP
       - 组件库
            vant element3  element-plus
            按需加载
            css库文件
       - css  准备工作
           - main.css
               - reset 
                - *, *:before, *:after  伪元素也要选中
                - 移动端box-sizing: border-box  IE盒模型   更有利于布局
                - font-family  -apple-system  PC  微软雅黑  sans-serif
                - 高分辨率手机   抗锯齿  让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css   变量的申明   主题及样式的管理，   复用
       - 图标字体库     <link rel="stylesheet" href="https://at.alicdn.com/t/font_1623819_3g3arzgtlmk.css">
            iconfont
            引入第三方  link 
           - 移动应用 
               rem   适配   html fontsize  动态  1rem = 设计稿的多少 ？  750px   1rem = 75 
               第三方库  lib-flexible
               Mobile First   移动应用80%
               PC  工作   管理   后台

- axios
    - 接口请求里的顺丰
        更专业
        接口返回的数据， 再包一层  更好及更标准的使用， 更丰富的请求信息
        http 了解更多 
        axios 把接口返回的数据放在data中
    - 拦截器  interceptors
        axios  request/response
        return res.data 

- 骨架屏方案  用户体验优化
    skeleton  vant 提供了这个组件
    <van-skeleton :row="3" :loading="state.loading">
        template 显示
    </van-skeleton> 

- 图片懒加载
    等一等  减少http 请求数
    - html 文件中 link src img script 启动新的http请求
        公路一样有限制的    
        请求并发数  越多的话 页面加载越慢
    - 可视区内图片加载
    - 非可视区内延迟加载， 可视区滚动到哪里加载相应
    - vant 内置了Lazyload
        vue directives  指令集  自定义指令 v-lazyload
        命令组件或标签做相应的事情
        更简单直观
    - base64 png/jpg 更小  放到css  js 文件中 不需要png 额外的文件， 有效的减少了并发数

- vue-router 细节考点
    - 懒加载
    - router-link  激活路由
        .router-link-active
    - 路由的跳转
        - 全局对象  Router  vue-router  useRouter()  组件里随时拿到
            push    go  cuttentRoute
        - 当前路由  Router.currentRoute()
            useRoute() 当前路由对象
            route.params
        - useRoute()  使用一下  hooks  编程
            use开头的函数的称呼
            vue vue-router  vuex  ...  useRoute  方便我们使用， 函数的方式
            composition  api  结合的很好
    - 路由切换的动画
        vue  transition 
        silde-left silde-right
        首页 -> detail
        transition  由右向左 translate
        detail -> 首页  由左向右边退出
        1. 路由切换加transition
            <transition>
            </transition>
        2. vue 内置了transition 组件
            v-if  v-show  router-view  挂载和卸载
            给我们自动添加  .v-enter-active  true  类名钩子  不用像之前的例子那样去:class 
            .v-enter-active {
                定制的能力很搞
            }
            false  自动添加 v-leave-active
            transition name 支持  不同的效果定义
        
- 详情页技术内幕
    1. 用户在编辑器里编辑
        content   长文   html   片段
        固定的介绍 + 创意的用户编辑内容一起组成
    2. 幻灯片   数量    大小
        要做延迟加载
    3. key 唯一值的意义
        vue     循环绑定 一定要给一个key， 不然就会 warning
        其中某一项修改时，  不可能替换整个数组 ， DOM更新开销大，  性能不好
        数组对应的列表渲染  不能做dom 编程， 
        数组    和  dom  要局部热更新的  唯一值的对应
        :key    
        不能用index ？ 涉及到unshift新增， 中间的插入  排序
    4. v-html
        详情页内容  多数是用户编辑的，  存储的形式是html格式
        vue 不会直接把html字符串 显示， 转成普通字符串
        安全，  跨站脚本攻击  不完整的html
        v-html  复制安全性  
    5. vant 的底部购物组件套装
        badge 徽章    跨页面共享状态    vuex

- 登录注册功能
    - 鉴权
    - 登录  注册    两个功能， 合并为一个页面
    - 验证码功能
        - 防机器人作弊
        - 组件黑盒子， canvas  返回验证码的imgCode
            state.imgCode
        - onSumbit
            用户填的验证码  和  验证码组件的state.imgCode 比较
            登录组件里怎么找到验证码组件
            进入到里面去    拿到imgCode
            ref     上场
            ref     标注一个对象， 拿到组件对象
            - const verifyRef = ref(null)
            - template  ref="verifyRef"
            verifyRef   就是代表验证码组件
            verifyRef.value.state.imgCode

- nextTick
    响应式数据的修改很快的  网上购物  钱 立即少
    但是页面的热更新却是需要一段时间的
    - 首页scroll 凸显导航栏效果， 极佳的用户体验
        - nextTick
            不止是组件挂载了， state 更新模板也完成了
            window.addEventListener('scroll')  不会争抢
        - scrollTop
            state.headerScroll
        


            
            

               
