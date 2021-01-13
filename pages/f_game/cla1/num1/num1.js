// pages/f_game/cla1/num1/num1.js
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
    num:60,
    timer:"",

    index: 1,
    spurl:[],
    u:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p1/1-"
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
      
      
      purl: "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmiencucqmj30oo1hcgzq.jpg",
      spurl:[this.data.u+this.data.index+"-1.jpg",this.data.u+this.data.index+"-2.jpg"]
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
                  ans:-1,
                  gameId: 'p1-1-'+this.data.index,
                  userId:this.data.name,
                  time:60-this.data.num
                },             
              })
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
                    purl:"https://wx3.sinaimg.cn/mw690/0084gu26ly1gmiejjeg8pj30t81jkgp5.jpg",
                    spurl:[this.data.u+this.data.index+"-1.jpg"]
                  })
                }
                else{
                  this.setData({
                    purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gmieizbh1zj30t71jke82.jpg",
                    spurl:[this.data.u+this.data.index+"-1.jpg"]
                  })
                }
                this.setNum()
                this.countDown()
              } else {
                wx.redirectTo({
                  url: '../../yd1/sp1/sp',
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
          db.collection('gameRecord').add({
            data:{
              ans: e.currentTarget.dataset.id,
              gameId: 'p1-1-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
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
                purl:"https://wx3.sinaimg.cn/mw690/0084gu26ly1gmiejjeg8pj30t81jkgp5.jpg",
                spurl:[this.data.u+this.data.index+"-1.jpg"]
              })
            }
            else{
              this.setData({
                purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gmieizbh1zj30t71jke82.jpg",
                spurl:[this.data.u+this.data.index+"-1.jpg"]
              })
            }
            this.setNum()
            this.countDown()
          } else {
            wx.redirectTo({
              url: '../../yd1/sp1/sp',
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