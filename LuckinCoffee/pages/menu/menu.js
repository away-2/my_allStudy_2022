// pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      items:[
        {
          "id" : 1,
          "text": "爆款套餐"
        },
        {
          "id" : 2,
          "text": "生酪拿铁"
        },
        {
          "id" : 3,
          "text": "丝绒拿铁"
        },{
          "id" : 4,
          "text": "生椰家族"
        },{
          "id" : 5,
          "text": "厚乳拿铁"
        },{
          "id" : 6,
          "text": "小黑杯"
        },{
          "id" : 7,
          "text": "瑞纳冰®"
        },{
          "id" : 8,
          "text": "经典拿铁"
        },{
          "id" : 9,
          "text": "大师咖啡"
        },{
          "id" : 10,
          "text": "不喝咖啡"
        },{
          "id" : 11,
          "text": "甜品小点"
        },{
          "id" : 12,
          "text": "烘焙轻食"
        },{
          "id" : 13,
          "text": "经典饮品"
        }

        

      ],
      coffee: []
      
    },
    onLoad() {
      console.log(data)
       
      wx.request({ // api 
        
        url: 'https://www.fastmock.site/mock/cfac4a603269d09c742cef7305ca4409/luckincoffee/coffee',
        success: (res) => {
          console.log(res)
          wx.hideLoading();  
          if (res.errMsg === "request:ok") {
            let data = res.data;
            // 解构
            let {coffee} = data  
            this.setData({
                coffee:coffee
            })
          }
        },
        fail: () => {
          console.log('error')
        }
      })
    },
      

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})