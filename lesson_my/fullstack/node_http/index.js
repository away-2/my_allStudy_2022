// http 服务
// 提供  /banners   路由服务
// js 宿主环境   brower   document
 //             node   linux  命令行  http
 //  node 后端开发太快了   中小型项目开发   弱类型  不太壮，单线程（学起来简单）
 // require? 模块化  common js  老点   关键字，
 // import from '' es6
const http = require('http'); // node  js  在后端的实现
// web  server
// 一个网站  其实就是一个web server  单例
// 当有用户请求的时候  req
// 回调函数就会运行
// res 响应用户的请求， 结束

const  server =http.createServer(function(req,res){
    console.log(req.url,'////');
    // req.url == '/banners'
    if(req.url == '/banners'){
        const data = {
            "data": [
                {
                  "id": 1,
                  "pic": "https://www.lodashjs.com/img/lodash.png"
                },
                {
                  "id": 2,
                  "pic": "https://ts2.cn.mm.bing.net/th?id=ORMS.800a1c6bf933c76933d318f9ee56f1eb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                },
                {
                  "id": 3,
                  "pic": "https://ts2.cn.mm.bing.net/th?id=ORMS.12241d3793674a6ef21cf083661a899c&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                }
              ]
        }
        // banners
    }else if(req.url.indexOf('/detail')>=0){
        //detail
        const data={
             "id":1,
             "titile":"找工作啊啊啊啊",
             "desc":"我就想找个工作啊啊啊啊啊"
        }
        res.writeHead(200,
            'Content-Type',
            'application/json;charset=utf-8');
        res.end(JSON.stringify(data));
    }
    
     res.end(JSON.stringify(data))
})//  web 服务
server.listen(3000)
