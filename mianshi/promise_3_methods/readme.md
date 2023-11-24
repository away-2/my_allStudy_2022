#     promise
- 任务流  promise序列
    [upload(),upload(),upload(),upload()]
    - 随机定时器值   任务完成时间和索引没有关系
    - 一半成功一半失败
    - setTimeout 第三个参数会在定时器到达时触发
    - promise then  最后 catch rejected  时候触发
    - async  await
          rejected
          try {

          } catch(err){

          } 
    - 是否运行 run ${time}

    - Promise.all()
        Promise序列会全部执行通过才认为是成功，否则认为是失败；
        有失败并不会停下来
        结果
        - Promise.all()成功的概率是0.5 * 0.5 * 0.5 = 0.125
        - 并发
    - Promise.race()
        - 第一个完成的 result
        - Promise.race()成功的概率是0.5
        - 所有的都会运行
        - 并行
    - Promise.any
        - 只要一个成功
        - Promise.any()成功的概率是(1 – 0.5 * 0.5 * 0.5) = 87.5%
