// pages/f_game/cla1/num1/gz/gz.js
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
    this.setData({
      purl:"https://wx3.sinaimg.cn/mw690/0084gu26ly1gml84tarfej30hm0zajua.jpg"
    })

  },
  toNext: function(){
    wx.showModal({
      title: '提示',
      content: '游戏开始了，注意了只有一次听的机会哦',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../num3',
          })
        }
      }
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

  }
})