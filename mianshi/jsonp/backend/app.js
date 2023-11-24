let express = require('express')

let app = express() // 后端应用app
// 添加路由
// HTTP 是一个简单协议，  基于TCP/IP  基于请求响应
// 使用上网代理（浏览器），输入地址 http://localhost:5501/say
// 请求行  GET   http://localhost:5501/say  1.1
// 请求头   COOKIE  Authorization

// 后端放水
let whiteList = ['http://127.0.0.1:5501']

// app.use((req, res, next) => {
//     let origin = req.headers.origin
//     console.log(origin,'????????')
    // 哪些跨域请求通过   origin ?  * 表示所有都通过
    // if(whiteList.includes(origin)){
    //     res.setHeader('Access-Control-Allow-Origin',origin)
    //     // DEL PUT 整个替换   PATCH  部分修改
    //     // Restful   一切皆资源  请求资源的时候， 使用响应 的请求方法
    //     res.setHeader('Access-Control-Allow-Methods','GET,POST')
    //     res.setHeader('Access-Control-Allow-Credentials',true)
    // }
    
    // console.log('~~~~~~~~~~~~~')
    // next()
// }) // 中间件

app.get('/say', function (req, res) {
    let jsonData = {
        name: '烦死了啊啊啊啊啊啊啊啊啊啊',
        favor: ['补录播', '还有学校的课']
    }
    // res.end('hello, say')
    // res.writeHead(200,'OK',{
    //     'Content-Type': 'text/json;charset=utf-8',
    //     'Set-Cookie': 'name=250;age=12'
    // })
    // res.setHeader('Content-Type', 'text/json;charset=utf8')
    res.send('callback(' + JSON.stringify(jsonData) + ')')
})

app.listen(3000)