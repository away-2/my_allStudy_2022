// pages/home/home.js
const app = getApp();
//用来获取全局变量
//直白一点说就是在home.js的globalData{}里写的东西 在其他页面的js的onshow中可以直接调用
Page({

    /**
     * 页面的初始数据
     */
    data: {
           eventShow:true,
           navHeight:app.globalData.navHeight,
           navTop: app.globalData.navTop,
           menuButtonObject:app.globalData.menuButtonObject
    },
   
    closeEvent(){
          this.setData({
              eventShow:false
          })
    },
    // onClose(){
    //     this.setData({
    //         show:false
    //     })
    // },
    // onOpen(){
    //     // console.log('click button vant')
    //     this.setData({
    //         show:true
    //     })
    // },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(app.globaData);
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