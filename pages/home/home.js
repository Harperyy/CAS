// pages/home/home.js
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

  },
  toTestPage: function(e){
    
    wx.navigateTo({
      url: '../game/gameIndex'
    })
  },
  toPaihangbang: function(e){
    
    wx.navigateTo({
      url: '../phb/phb'
    })
  }

})