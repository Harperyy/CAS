// pages/f_game/cla3/num1/num1.js
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
    index: 1,
    num:60,
    timer:"",
    answer:[],
    url:[
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmipj07mouj30u01hcn4a.jpg",
      "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmipj4jyhwj30u01hctfl.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmipj9au58j30u01hcah7.jpg",
      "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmipjeswbfj30u01hcgsg.jpg",
      "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmipjjb7yyj30u01hc0xh.jpg"
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
      score:0,
      
      
      purl: this.data.url[this.data.index-1]
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
                uerId:this.data.name,
                gameId:"p3-1-"+this.data.index,
                ans:-1,
                time:60-this.data.num
                },
                success(res){
                  console.log(res)
                }
          
              })
    
    
              if (this.data.index < 5) {
                // 渲染下一题
                this.setData({
                  index: this.data.index + 1,
                  purl: this.data.url[this.data.index]
                })
    
              } else {
                console.log(this.data.answer);
                app.globalData.c3_num1= this.data.score
                
    
                wx.redirectTo({
                  url: '../../yd3/sp1/sp',
                })
              }
              this.setNum()
              this.countDown()
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
    let as = e.currentTarget.dataset.id;
   
    

    
    wx.showModal({
      title: '提示',
      content: '确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(e.currentTarget.dataset.id)
          this.endCount()
          this.judge( e.currentTarget.dataset.id)
          db.collection('gameRecord').add({
            data:{
            uerId:this.data.name,
            gameId:"p3-1-"+this.data.index,
            ans:""+e.currentTarget.dataset.id,
            time:60-this.data.num
            },
            success(res){
              console.log(res)
            }
      
          })


          if (this.data.index < 5) {
            // 渲染下一题
            this.setData({
              index: this.data.index + 1,
              purl: this.data.url[this.data.index]
            })

          } else {
            console.log(this.data.answer);
            app.globalData.c3_num1= this.data.score
            

            wx.redirectTo({
              url: '../../yd3/sp1/sp',
            })
          }
          this.setNum()
          this.countDown()
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
    console.log("now"+this.data.score)
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