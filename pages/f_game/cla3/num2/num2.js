// pages/f_game/cla3/num2/num2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    num:8,
    as:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      
      
      purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+this.data.index+"1.jpg"
    });
    this.countDown()
    
    

  },
  //倒计时5秒
  countDown: function() {
    var that = this,
      num = that.data.num;
    setTimeout(function(){
      that.setData({
        num :num-1
      })
      that.endNum()
    },1000)

  },
  endNum:function(){
    var that = this,num = that.data.num;
    console.log(num)
    if(num==0){
      wx.showModal({
          title: '提示',
          content: '时间结束了呢，相信你一定记住了吧',
        })
      that.setData({
        as:1,
        purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+this.data.index+"2.jpg"
      })
    }else{
      that.countDown()
    }
  },
  toNext: function(){
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          
          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({
              index: this.data.index + 1,
              as:0,
              num:8,
              purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+(this.data.index+1)+"1.jpg"
            })
            this.countDown()

          } else {
            wx.redirectTo({
              url: '../num3/num3',
            })
          }
          console.log(this.data.index)
        } else if (res.cancel) {
          console.log('用户点击取消')
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