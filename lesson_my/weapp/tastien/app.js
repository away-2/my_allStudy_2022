// app.js
App({
    // 启动的时候，生命周期
  onLaunch() { 
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSystemInfo({
        success:res=>{
            let menuButtonObject = wx.getMenuButtonBoundingClientRect();
            // console.log(menuButtonObject);
            let statusBarHeight = res.statusBarHeight;
            // console.log(statusBarHeight);
            let navHeight = statusBarHeight 
            +menuButtonObject.height
            +(menuButtonObject.top - statusBarHeight) * 2;
            // console.log(navHeight);
            let navTop = menuButtonObject.top;
           // console.log(navTop);
           let windowHeight =res.windowWidth;
           Object.assign(this.globalData,{
               navHeight,
               navTop,
               windowHeight,
               menuButtonObject
           })
            // this.globalData.navHeight = navHeight;
            // this.globalData.navTop = navTop;
            // this.globalData.windowHeight = res.windowHeight;
            // this.globalData.menuButtonObject=menuButtonObject;

        }
    })
  },
  //全局数据  最好声明一下
  globalData: {
      navHeight:0,
      navTop:0,
      windowHeight:0,
      menuButtonObject:null,
    slides:null,
    stories:null,
    vehicles:null
  }
})
