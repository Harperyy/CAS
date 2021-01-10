// pages/f_game/cla1/num2/num2.js
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
index:1
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
      purl:'https://wx4.sinaimg.cn/mw690/0084gu26ly1gmiek3aecdj30le1abgqg.jpg',
      group:[0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0,3,6,9,4,7,8,5,0,1,2],
      checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      
      gz:0

    })

  },
  switch: function (e) {
    var classify = e.currentTarget.dataset.classify;
    var ch = this.data.checkedItem;
    console.log(classify)
    console.log(this.data.checkedItem) //点击的元素
    ch[classify]=1-ch[classify];
    console.log(ch[classify])
   

    
    // var it='checkedItem['+classify+']';
    console.log(ch)
    this.setData({
      // [it]: 1 //更新
      checkedItem:ch
    })
    console.log(this.data.checkedItem)

  },
  toNext:function(e){
    wx.showModal({
      title: '提示',
      content: '确定了吗',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(this.data.index)
          db.collection('gameRecord').add({
            data:{
              ans: this.data.checkedItem,
              gameId: 'p1-2-'+this.data.index,
              userId: this.data.name
            },             
          })
          if (this.data.index < 5) {
            if(this.data.index+1==2){
              this.setData({
                purl:'https://wx4.sinaimg.cn/mw690/0084gu26ly1gmiejwdgxzj30le1abaew.jpg',
                group:[2,9,5,3,4,8,1,7,6,0,3,6,9,4,7,8,5,0,1,2,3,5,7,1,6,9,8,0,2,4],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==3){
              this.setData({
                purl:'https://wx1.sinaimg.cn/mw690/0084gu26ly1gmielv9kmhj30le1abn23.jpg',
                group:[2,9,5,3,4,8,1,7,6,0,3,6,9,4,7,8,5,0,1,2,3,5,7,1,6,9,8,0,2,4],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==4){
              this.setData({
                purl:'https://wx2.sinaimg.cn/mw690/0084gu26ly1gmiem4gzofj30le1abdks.jpg',
                group:[6,7,2,8,4,3,9,1,0,5,2,9,5,3,4,8,1,7,6,0,3,6,9,4,7,8,5,0,1,2,7,9,3,5,6,0,1,2,8,4,3,5,7,1,6,9,8,0,2,4],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } else if(this.data.index+1==5){
              this.setData({
                purl:'https://wx4.sinaimg.cn/mw690/0084gu26ly1gmiemx5ecbj30le1aa0xn.jpg',
                group:[0,1,3,4,2,7,6,8,9,5,4,9,3,5,2,8,1,6,7,0,5,7,9,6,1,8,3,2,4,0,3,5,7,1,9,8,0,2,4,6,8,2,6,4,3,5,9,7,0,1],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } 



          }else{
            wx.redirectTo({
              url: '../../cla3/num1/num1',
            })
          }
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