// pages/f_game/yd1/yd1.js
const app = getApp()
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
    app.globalData.c1_num1=0;
    app.globalData.c1_num2=0;
    app.globalData.c1_num3=0;
    app.globalData.c2_num1=0;
    app.globalData.c2_num2=0;
    app.globalData.c2_num3=0;
    app.globalData.c3_num1=0;
    app.globalData.c3_num2=0;
    app.globalData.c3_num3=0;
    app.globalData.c4_num1=0;
    app.globalData.c4_num2=0;
    app.globalData.c4_num3=0;

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  toNext: function(e){
    
    wx.redirectTo({
      
      url: '../cla1/num1/gz/gz'
    })
  }
})