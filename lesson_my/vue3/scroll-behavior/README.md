- 何时退出？ 
    路由钩子  beforeEach

- vue-router scrollBehavior
    - 用户体验细节和性能优化
    - 使用router-view 借鉴vue3 提供的composition  api
        router.beforeEach()  类式编程v2
        onBeforeRouteLeave   composition  api
    - router  单例中
        createRouter
        scrollBehavior(to, from) =>{
            to.name 
        }

- 第二种解决方案？ 
    vue 性能优化  vue-router  的概念改变
    A -->  B
    A 页面destory  unmounted 内存中回收组件
    B  在内存中生成  ->  mounted  挂载到页面上
    keepAlive   扑克的层叠关系
     A -->  B  A不销毁  B覆盖在A上
     B  ->  A  B退出， A直接显示