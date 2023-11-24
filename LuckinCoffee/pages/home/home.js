// index.js
// 获取应用实例
Page({
  data: { 
     title:[],
     goods:[]
  },
  // 事件处理函数
  bindViewTap() {
   
  },
  
  onLoad() {     
      // wx.showLoading({
      //   title: '加载中...',
      // })
      // wx.request({ // api 
        
      //   url: 'https://www.fastmock.site/mock/cfac4a603269d09c742cef7305ca4409/luckincoffee/goods',
      //   success: (res) => {
      //     console.log(res)
      //     wx.hideLoading();  
      //     if (res.errMsg === "request:ok") {
      //       let data = res.data;
      //       // 解构
      //       let {goods} = data  
      //       this.setData({
      //           goods:goods
      //       })
      //     }
      //   },
      //   fail: () => {
      //     console.log('error')
      //   }
      // })
    },
  
  /** 
   * 回到顶部功能
   */
  // 获取滚动条当前位置
  scrolltoupper: function (e) {
    // console.log(e.detail.scrollTop)
    if (e.detail.scrollTop > 100) {
      this.setData({
        up_show:true
      })
    }else{
      this.setData({
        up_show: false   
      })
    }
  
  },
  // 一键回到顶部
  goTop: function (e) {
 
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
})
