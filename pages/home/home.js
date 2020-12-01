// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，Curry',
    isShow:false,
    score:80,
    superStart:[
      {name:'库里',age:32,position:'后卫'},
      {name:'杜兰特',age:31,position:'小前锋'},
      {name:'加内特',age:40,position:'大前锋'},
    ]
  },
  handleSwitchColor(){
    //小程序禁止Dom操作,不能像js那样做
   this.setData({//注意小程序中实现数据响应式与Vue中的差别
     isShow:!this.data.isShow
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})