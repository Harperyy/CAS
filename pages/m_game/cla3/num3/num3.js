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
    index: 1,
//  var index = 1,
    url:[
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmipnk1lmpj30fn0rsaev.jpg",
      "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmipvh7kehj30fn0rstdv.jpg",
      "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmipvnlwizj30fn0rsn34.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmipvsqa0sj30fn0rs43g.jpg"
    ]
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
    

  },
  toNext: function(e){
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
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
            var id = this.data.index
            console.log("---"+id)
            this.setData({
              index: this.data.index + 1,
              purl: this.data.url[id]
            })

          } else {
            wx.redirectTo({
              url: '../../cla4/num1/gz/gz',
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