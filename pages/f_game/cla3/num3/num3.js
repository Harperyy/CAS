// pages/f_game/cla3/num3/num3.js
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
    num: 60,
    index: 1,
    timer:"",
    url:[
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmipkavb7fj30fn0rsgop.jpg",
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmipkext0oj30fn0rs0w6.jpg",
     "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmipkjiu6xj30fn0rsmzy.jpg",
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmipkoxc3fj30fn0rsgnu.jpg",
      
      

    ]

//  var index = 1,
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
   
    this.setData({
      
      
      purl: this.data.url[this.data.index-1]
    });
    this.countDown()

  },
  setNum:function(){
    this.setData({
      num:60,
    })
   },
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
    var that = this,num = that.data.num;
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
              db.collection('gameRecord').add({
                data:{
                  ans: e.currentTarget.dataset.id,
                  gameId: 'p3-3-'+this.data.index,
                  userId:this.data.name
                },             
              })
              if (this.data.index < 4) {
                // 渲染下一题
                this.setData({
                  index: this.data.index + 1,
                  purl: this.data.url[this.data.index]
                })
                // this.setNum()
                // this.countDown()
              } else {
                wx.redirectTo({
                  url: '/pages/f_game/cla4/num1/gz',
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
              purl: this.data.url[this.data.index]
            })
            this.setNum()
            this.countDown()
          } else {
            wx.redirectTo({
              url: '../../cla4/num1/gz',
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