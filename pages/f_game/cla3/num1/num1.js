// pages/f_game/cla3/num1/num1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 60,
    index: 1,
    timer:""
//  var index = 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      
      
      purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+this.data.index+".jpg"
    });
    this.countDown()

  },
  setNum:function(){
   this.setData({
     num:60,
   })
  },
   //倒计时60秒  
   countDown: function() {
    var that = this,
      num = that.data.num;
   
      that.data.timer= setTimeout(function(){
      if(num>=0){
      that.setData({
        num :num-1
      })
      that.endNum()}
    },1000)

  },
  endCount:function(){
    var that = this;
      //清除计时器  即清除setInter
      clearInterval(that.data.timer)
      console.log("clear")
  },
  endNum:function(){
    var that = this,num = that.data.num,flag=that.data.flag;
    console.log(num)
    if(num==0){
      wx.showModal({
          title: '提示',
          content: '看来这道题有点难，试试下一题吧',
          showCancel:false,
          confirmText:'下一题',
          success:(res)=> {
            if (res.confirm) {
              console.log('用户点击确定')
              console.log(this.data.index)
              if (this.data.index < 5) {
                // 渲染下一题
                this.setData({
                  index: this.data.index + 1,
                  purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+(this.data.index+1)+".jpg"
                })
              this.setNum()
              this.countDown()
              } else {
                wx.redirectTo({
                  url: '../num2/num2',
                })
              }
              console.log(this.data.index)
            } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
          this.endCount()
          console.log(this.data.index)
          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({  
              num:60,          
              index: this.data.index + 1,
              purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/Q"+(this.data.index+1)+".jpg",
            })
            this.countDown()
          } else {
            wx.redirectTo({
              url: '../num2/num2',
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
    console.log("+++++++++onUnload++++++++++")
    clearInterval(this.data.timer);
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