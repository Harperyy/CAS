// pages/f_game/cla1/num1/num1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    spurl:[],
    u:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p1/1-"
//  var index = 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      
      
      purl: "cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p1/gzk.jpg",
      spurl:[this.data.u+this.data.index+"-1.jpg",this.data.u+this.data.index+"-2.jpg"]
    });
    

  },
  toNext: function(){
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(this.data.index)
          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({
              index: this.data.index + 1,
              
              
            })
            if(this.data.index==2||this.data.index==3){
              this.setData({
                spurl:[this.data.u+this.data.index+"-1.jpg",this.data.u+this.data.index+"-2.jpg",this.data.u+this.data.index+"-3.jpg",this.data.u+this.data.index+"-4.jpg"]
              })
            }
            else if(this.data.index==4){
              this.setData({
                purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p1/1-4k.jpg",
                spurl:[this.data.u+this.data.index+"-1.jpg"]
              })
            }
            else{
              this.setData({
                purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p1/1-5k.jpg",
                spurl:[this.data.u+this.data.index+"-1.jpg"]
              })
            }
          } else {
            wx.redirectTo({
              url: '../num2/gz/gz',
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