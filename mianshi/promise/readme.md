# Promise  A+ 规范

- Promise 类  then  catch
resolve  reject  all  race
finally...
- 传一个参数(函数)， 也叫executor， 立即执行
- executor 有两个参数， resolve， reject  函数
- 三个状态  pending  fullfilled  rejected
    - pending 可以转化为fulfilled 和 rejected
    不可多次执行同一个promise
    - 成功时， 不可转为其他状态， 且拥有一个不可改变的值
    - 失败时， 不可转为其他状态， 且有一个不可改变的原因
    - executor 报错， 直接reject()

    - then(onFulfilled, onRejected)
        - state 转为fulfilled, this.value -> onFulfilled 运行
        - rejected this.reason ->onRejected

    - then
        1. 如果异步， 存储起来， 当状态发生改变时，执行
        2. 解决了回调地狱问题
            控制执行顺序  then 链式调用
            前一个promise then 怎么执行下一个then？
            在第一个then return promise  2 Obeject
            promise value
