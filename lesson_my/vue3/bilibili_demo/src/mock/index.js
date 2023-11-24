import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import products from './data/shop'

Mock.setup({
    timeout: '50-1000'  // 随机设置延迟时间，模拟请求耗时
})

// 轮播图
Mock.mock(/\/swiperList/,'get',() => {
    return {
        code: 0,
        result: swiperList
    }
})
Mock.mock(/\/videosList/,'get',() => {
    return {
        code: 0,
        result: videosList
    }
})
// 假冒服务器 code为0表示没有错误,code为1表示出错
Mock.mock(/\/products/,'get',() => {
    return  {
        code: 0,
        // code: 1,
        // msg: '服务器出错',
        result: products
    }
})