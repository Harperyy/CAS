// pages/f_game/cla3/num1/num1.js
const app = getApp()
wx.cloud.init({
  env: "yqq-3g0xquwqdd5bcff3",
  traceUser: true,
  

})
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:0,
    num: 60,
    index: 1,
    timer:"",
    pdata:[
    "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmigd2rqbej30u01hc7cc.jpg",
    "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmigda04vjj30u01hcgt9.jpg",
    "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmigdffzm2j30u01hcqax.jpg",
    "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmigdkme34j30u01hc10p.jpg",
    "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmigdryccyj30u01hcdnh.jpg"

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
    var url = this.data.pdata[this.data.index-1]
   
    this.setData({
      
      
      purl: url
    });
    this.countDown()

  },
  setNum:function(e){
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
              db.collection('gameRecord').add({
                data:{
                  ans: -1,
                  gameId: 'p3-1-'+this.data.index,
                  userId:this.data.name,
                  time:60-this.data.num
                },             
              })
              if (this.data.index < 5) {
                var url = this.data.pdata[this.data.index]
                // 渲染下一题
                this.setData({
                  index: this.data.index + 1,
                  purl:  url
                })
              this.setNum()
              this.countDown()
              } else {
                app.globalData.c3_num1= this.data.score
                wx.redirectTo({
                  url: '../../yd3/sp1/sp',
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
  toNext: function(e){
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          this.endCount()
          console.log(this.data.index)
          this.judge( e.currentTarget.dataset.id)
          db.collection('gameRecord').add({
            data:{
              ans: e.currentTarget.dataset.id,
              gameId: 'p3-1-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 5) {
            var url = this.data.pdata[this.data.index]
            // 渲染下一题
            this.setData({  
              num:60,          
              index: this.data.index + 1,
              purl:  url
            })
            this.countDown()
          } else {
            app.globalData.c3_num1= this.data.score
            wx.redirectTo({
              url: '../../yd3/sp1/sp',
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
      var s = 10
      if(id!=3){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==2){
      var s = 20
      if(id!=1){
        s=0;
      }
      
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==3){
      var s = 20
      if(id!=3){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==4){
      var s = 20
      if(id!=6){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    else if(this.data.index==5){
      var s = 20
      if(id!=2){
        s=0;
      }
      this.setData({
        score:this.data.score+s
      })
    }
    console.log("new"+this.data.score)
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