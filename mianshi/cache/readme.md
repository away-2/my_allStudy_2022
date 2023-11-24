# 前端性能优化最重要  -- 缓存 

- 静态资源缓存
    304  Not Modifide

- 第一次访问某站
    200  返回资源   花费时间

- node 的理解
    1. 如何返回 html 模板？
        硬盘之中  fs   读出来  字符串
        fs.readFile  异步的， 不会阻塞node 的单线程 node 的eventloop
        同样硬件的能力之下  多让一些用户访问  服务器价格便宜
        index.js 内存 ->  fs(I/O) -> 硬盘之中 -> 回调函数 -> 
        第一个参数是err (文件路径存在， 个固态硬盘和机械硬盘的区别）， 第二个参数是数据 data

    2. readFileSync 同步，  不太用，  性能不好
    3. 流的概念
        二进制文件的处理思想
        fs.createReadStream()

- 图片格式
    jpg  png（透明）
    Webp是一种有损压缩格式。  同样的清晰度，  体积只有1/2， 1/3

- 缓存
    1. 服务器端开启缓存  强缓存
        - 返回资源的同时，  Expires  过期时间  HTTP 1.0  setHeader('Expires',时间)
            本地缓存这个图片时， Expires 写入
        - 前端再次请求 /two.png  前端缓存挡道了
            本地的时钟和缓存的 Expires 时间比较  强制走缓存  或走后端
        - 本地的时钟不准确  Expires  不准确
    2. HTTP  1.1  更新  Cache-Control  相对时间
        maxAge  倒计时

- 强缓存
    expires     http 1.0
    cache-control  max-age 

- 缓存过期了怎么办？   一定要重新请求吗？ 
    强缓存过期 但是服务器文件 变了or没变

- 协商缓存
    Last-Modified + If-Modified-Since
    Etag +  If-None-Match
