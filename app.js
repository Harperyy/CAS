//app.js
var jsonList = require('data/json.js'); 
App({
  globalData: {
    questionList: jsonList.questionList,
  
  
  userInfo: null,
  
  openid: null,
  c1_num1:0,
  c1_num2:0,
  c1_num3:0,
  c2_num1:0,
  c2_num2:0,
  c2_num3:0,
  c3_num1:0,
  c3_num2:0,
  c3_num3:0,
  c4_num1:0,
  c4_num2:0,
  c4_num3:0,

  
  },
  
  onLaunch: function () {
    wx.cloud.init({
      env:"yqq-3g0xquwqdd5bcff3",
      traceUser:true
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
  
  // console.log('openid为' + openid);
  
  that.globalData.openid = openid
  
  }
  
  })
  
  }
  
  })
  
  // 获取用户信息
  
  wx.getSetting({
  success: res => {
  if (res.authSetting['scope.userInfo']) {
  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  
  wx.getUserInfo({
  success: res => {
  
  // 可以将 res 发送给后台解码出 unionId
  
  that.globalData.userInfo = res.userInfo
  
  // console.log(res);
  
  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  
  // 所以此处加入 callback 以防止这种情况
  
  if (this.userInfoReadyCallback) {
  this.userInfoReadyCallback(res)
  
  }
  
  }
  
  })
  
  }
  
  }
  
  })
  
  },
  
  
  })