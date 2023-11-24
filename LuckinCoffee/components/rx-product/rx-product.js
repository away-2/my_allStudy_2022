// components/rx__detail/rx__detail.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: { 
        
            "goods": [
              {
                "id": 1,
                "pic": "https://img05.luckincoffeecdn.com/group1/M00/C2/82/CtwhAmG2HxiAC7vaAAMFM_0M__A435_416x1110.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 2,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj876AKF1cAAHnlHjaVC4226.jpg",
                "title": "瑞幸冻干咖啡福袋【168元随机2盒】",
                "price": "￥168",
                "sell": "已售10086+件"
              },
              {
                "id": 3,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D6/CtwiPWOj88WANuSqAAKjAhV98WA366.jpg",
                "title": "【新鲜烘培】瑞幸意式拼配咖啡豆（250g/袋）",
                "price": "￥79",
                "sell": "已售10086+件"
              },
              {
                "id": 4,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPWOj87uAKZ-9AAIYKYxob64470.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 5,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPWOj87uAa6_JAAKxIUYzjao680.jpg",
                "title": "瑞幸精品挂耳咖啡【10g*8颗/盒】",
                "price": "￥49.9",
                "sell": "已售10086+件"
              },
              {
                "id": 6,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D7/CtwiPWOj88uASpZhAAHSNEsPyK4874.jpg",
                "title": "瑞幸元气弹系列2.0即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 7,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPGOj88OAHj2hAAHyYr1XZGg196.jpg",
                "title": "吸猫系列2.0挂耳咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 8,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj87-AbFUiAAHnnjn-V-s690.jpg",
                "title": "瑞幸元气弹系列即溶咖啡（10g*20袋/盒）",
                "price": "￥79",
                "sell": "已售10086+件"
              },
              {
                "id": 9,
                "pic": "https://img05.luckincoffeecdn.com/group1/M00/C2/82/CtwhAmG2HxiAC7vaAAMFM_0M__A435_416x1110.jpg",
                "title": "瑞幸生椰浆【yyds】",
                "price": "￥39",
                "sell": "已售10086+件"
              },
              {
                "id": 10,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj88KAc87CAAG4wmjVXb0602.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 11,
                "pic": "https://img02.luckincoffeecdn.com/group2/M00/77/D7/CtwiPWOj88mATwaMAAID7jalmXg902.jpg",
                "title": "瑞幸风味漫游系列即溶咖啡【3g*12颗/盒 精品款】",
                "price": "￥129",
                "sell": "已售10086+件"
              },
              {
                "id": 12,
                "pic": "https://img02.luckincoffeecdn.com/group1/M00/F2/6B/CtwhAmOj89KAW7wYAAG7lQ7l8Hk266.jpg",
                "title": "瑞幸鲜萃咖啡液（25ml*9包/盒）",
                "price": "￥98",
                "sell": "已售10086+件"
              },
              {
                "id": 13,
                "pic": "https://img05.luckincoffeecdn.com/group1/M00/C2/82/CtwhAmG2HxiAC7vaAAMFM_0M__A435_416x1110.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 14,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj876AKF1cAAHnlHjaVC4226.jpg",
                "title": "瑞幸冻干咖啡福袋【168元随机2盒】",
                "price": "￥168",
                "sell": "已售10086+件"
              },
              {
                "id": 15,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D6/CtwiPWOj88WANuSqAAKjAhV98WA366.jpg",
                "title": "【新鲜烘培】瑞幸意式拼配咖啡豆（250g/袋）",
                "price": "￥79",
                "sell": "已售10086+件"
              },
              {
                "id": 16,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPWOj87uAKZ-9AAIYKYxob64470.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 17,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPWOj87uAa6_JAAKxIUYzjao680.jpg",
                "title": "瑞幸精品挂耳咖啡【10g*8颗/盒】",
                "price": "￥49.9",
                "sell": "已售10086+件"
              },
              {
                "id": 18,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D7/CtwiPWOj88uASpZhAAHSNEsPyK4874.jpg",
                "title": "瑞幸元气弹系列2.0即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 19,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D5/CtwiPGOj88OAHj2hAAHyYr1XZGg196.jpg",
                "title": "吸猫系列2.0挂耳咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 20,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj87-AbFUiAAHnnjn-V-s690.jpg",
                "title": "瑞幸元气弹系列即溶咖啡（10g*20袋/盒）",
                "price": "￥79",
                "sell": "已售10086+件"
              },
              {
                "id": 21,
                "pic": "https://img05.luckincoffeecdn.com/group1/M00/C2/82/CtwhAmG2HxiAC7vaAAMFM_0M__A435_416x1110.jpg",
                "title": "瑞幸生椰浆【yyds】",
                "price": "￥39",
                "sell": "已售10086+件"
              },
              {
                "id": 22,
                "pic": "https://img04.luckincoffeecdn.com/group2/M00/77/D4/CtwiPGOj88KAc87CAAG4wmjVXb0602.jpg",
                "title": "瑞幸元气弹系列即溶咖啡【2g*18颗/盒】",
                "price": "￥89",
                "sell": "已售10086+件"
              },
              {
                "id": 23,
                "pic": "https://img02.luckincoffeecdn.com/group2/M00/77/D7/CtwiPWOj88mATwaMAAID7jalmXg902.jpg",
                "title": "瑞幸风味漫游系列即溶咖啡【3g*12颗/盒 精品款】",
                "price": "￥129",
                "sell": "已售10086+件"
              },
              {
                "id": 24,
                "pic": "https://img02.luckincoffeecdn.com/group1/M00/F2/6B/CtwhAmOj89KAW7wYAAG7lQ7l8Hk266.jpg",
                "title": "瑞幸鲜萃咖啡液（25ml*9包/盒）",
                "price": "￥98",
                "sell": "已售10086+件"
              }
            ]
     },
     
    /**
     * 组件的方法列表
     */
    methods: {
     onClick() {
        wx.navigateTo({
          url: '/pages/detail/detail',
        })
      }
    }
})
