// pages/f_game/cla3/num1/num1.js
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
    answer:[]
//  var index = 1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {
      
      // 可以将 res 发送给后台解码出 unionId
      this.setData({
        
        name:res.userInfo.nickName
      })
      
      
      if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res)
      
      }
      
      }
      
      })
   
    this.setData({
      
      
      purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p3/3-2-"+this.data.index+"k.jpg"
    });
    

  },
  
  toNext: function(e){
    let as = e.currentTarget.dataset.id;
   
    

    
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(e.currentTarget.dataset.id)
          db.collection('gameRecord').add({
            data:{
            uerId:this.data.name,
            gameId:"p3-1-"+this.data.index,
            ans:""+e.currentTarget.dataset.id
            },
            success(res){
              console.log(res)
            }
      
          })


          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({
              index: this.data.index + 1,
              purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p3/3-2-"+(this.data.index+1)+"k.jpg"
            })

          } else {
            console.log(this.data.answer);
            

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