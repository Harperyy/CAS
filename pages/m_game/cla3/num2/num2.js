// pages/f_game/cla3/num2/num2.js
const app = getApp()
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
    score:0,
    index:1,
    num:10,
    as:0,
    timer:"",
    p1:[
      "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmige68798j30by0li776.jpg",
      "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmigekew7bj30by0li41o.jpg",
      "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmigf9wegfj30by0li772.jpg",
      "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmigg2xgnpj30by0li41o.jpg",
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmigggfujkj30by0litcb.jpg"

    ],
    p2:[
      "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmigecd66dj30by0lin03.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmigex91gjj30by0litbl.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmigfvmz7rj30by0lijuc.jpg",
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmigg9mb81j30by0lijug.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmiggnheorj30by0li41j.jpg"
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
      
      
      purl: this.data.p1[this.data.index-1]
    });
    this.countDown()
    
    

  },
  setNum:function(e){
    this.setData({
      num:10,
    })
   },
  //倒计时5秒
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
      this.setData({
        as:1,
        purl:this.data.p2[this.data.index-1]
      })
    }else{
      that.countDown()
    }
  },
  toNext: function(e){
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          this.endCount()
          
          this.judge( e.currentTarget.dataset.id)
          db.collection('gameRecord').add({
            data:{
              ans: -1,
              gameId: 'p3-2-'+this.data.index,
              userId:this.data.name,
              
            },             
          })
          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({
              index: this.data.index + 1,
              as:0,
              
              purl: this.data.p1[this.data.index]
            })
            this.setNum()
            this.countDown()

          } else {
            app.globalData.c3_num2= this.data.score
            wx.redirectTo({
              url: '../../yd3/sp2/sp',
            })
          }
          
          console.log(this.data.index)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  judge:function(id){
    if(this.data.index==1){
      var s = 20
      if(id!="否"){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==2){
      var s = 20
      if(id!="否"){
        s=0;
      }
      
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==3){
      var s = 20
      if(id!="是"){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==4){
      var s = 15
      if(id!="否"){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==5){
      var s = 15
      if(id!="否"){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
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