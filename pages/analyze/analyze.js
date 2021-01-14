// pages/analyze/analyze.js
const app=getApp()
wx.cloud.init({
  env: "yqq-3g0xquwqdd5bcff3",
  traceUser: true
})
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {     
      this.setData({      
        name:res.userInfo.nickName
      })         
      if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res)     
      }    
      }
    })
    var that = this;
  // 展示本地存储能力
  
  var logs = wx.getStorageSync('logs') || []
  
  logs.unshift(Date.now())
  
  wx.setStorageSync('logs', logs)
  
  // 登录
  
  wx.login({
  //获取code
  
  success: res => {
  var code = res.code; //返回code
  
  var appId = 'wx34b1706077d61e62';
  
  var secret = '1964574a96c5c5e647dba8bfe4b4444b';
  
  wx.request({
  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
  
  data: {},
  
  header: {
  'content-type': 'json'
  
  },
  
  success: res => {
  var openid = res.data.openid //返回openid
  
  console.log('openid为' + openid);
  
  this.setData({
    openid:openid
  })
  
  }
  
  })
  
  }
  
  })
  this.remove()
  // this.cla1_num1()


  },
  toNext: function(e){
    
    wx.redirectTo({
      
      url: '../rada/rada'
    })
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

  },
  
})