// pages/f_game/cla1/num2/num2.js
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
    timer:"",
    num:60,
    an1:[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    an2:[0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    an3: [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0]

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
                gameId: 'p1-2-'+this.data.index,
                userId: this.data.name,
                time:60-this.data.num
              },             
            })
            if (this.data.index < 3) {
              
              if(this.data.index+1==2){
                this.setData({
                  purl:'https://wx1.sinaimg.cn/mw690/0084gu26ly1gmiel2muxhj30le1aajug.jpg',
                  group:[2,9,5,3,4,8,1,7,6,0,3,6,9,4,7,8,5,0,1,2,3,5,7,1,6,9,8,0,2,4],
                        
                  checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  index:this.data.index+1,
                  
  
                })
              } else if(this.data.index+1==3){
                this.setData({
                  purl:'https://wx2.sinaimg.cn/mw690/0084gu26ly1gmiem4gzofj30le1abdks.jpg',
                  group:[0,1,3,4,2,7,6,8,9,5,4,9,3,5,2,8,1,6,7,0,5,7,9,6,1,8,3,2,4,0,3,5,7,1,9,8,0,2,4,6,8,2,6,4,3,5,9,7,0,1],
                       
                  checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  index:this.data.index+1,
                  
  
                })
              } 
  
              this.setNum()
              this.countDown()
  
            }else{
              console.log("------"+app.globalData.c1_num1)
              app.globalData.c1_num2= this.data.score
              console.log(app.globalData.c1_num2)
              wx.redirectTo({
                url: '../../yd1/sp2/sp',
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
          this.endCount()
          console.log(this.data.index)
          this.judge(this.data.checkedItem)
          db.collection('gameRecord').add({
            data:{
              ans: this.data.checkedItem,
              gameId: 'p1-2-'+this.data.index,
              userId: this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 3) {
            if(this.data.index+1==2){
              this.setData({
                purl:'https://wx1.sinaimg.cn/mw690/0084gu26ly1gmiel2muxhj30le1aajug.jpg',
                group:[2,9,5,3,4,8,1,7,6,0,3,6,9,4,7,8,5,0,1,2,3,5,7,1,6,9,8,0,2,4],
                      
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } else if(this.data.index+1==3){
              this.setData({
                purl:'https://wx2.sinaimg.cn/mw690/0084gu26ly1gmiem4gzofj30le1abdks.jpg',
                group:[0,1,3,4,2,7,6,8,9,5,4,9,3,5,2,8,1,6,7,0,5,7,9,6,1,8,3,2,4,0,3,5,7,1,9,8,0,2,4,6,8,2,6,4,3,5,9,7,0,1],
                     
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } 

            this.setNum()
            this.countDown()

          }else{
            console.log('9iiiii'+app.globalData.c1_num1)
            app.globalData.c1_num2= this.data.score
            wx.redirectTo({
              url: '../../yd1/sp2/sp',
            })
          }
        }
      }
    })
  },
  judge:function(l){
    if(this.data.index==1){
      var cnt = 0
      var i=0
      var s = 15
      for(;i<30;i++){
        if(this.data.an1[i]==l[i]) cnt++;

      }
      if(this.data.num<48) s-=(48-this.data.num)/3
      s-=(30-cnt)
      this.setData({
        score:s
      })

    }else if(this.data.index==2){
      var cnt = 0
      var i=0
      var s = 35
      for(;i<30;i++){
        if(this.data.an2[i]==l[i]) cnt++;

      }
      if(this.data.num<50) s-=(50-this.data.num)/3*2
      s-=(30-cnt)*5
      this.setData({
        score:this.data.score+s
      })
      
    }else if(this.data.index==3){
      var cnt = 0
      var i=0
      var s = 50
      for(;i<50;i++){
        if(this.data.an3[i]==l[i]) cnt++;

      }
      if(this.data.num<50) s-=(50-this.data.num)*2
      s-=(50-cnt)*5
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