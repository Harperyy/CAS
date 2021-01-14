// pages/f_game/cla1/num3/num3.js
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
    num:100,
    timer:"",

index:1,
ans1:[0,0,0,1,0],
ans2: [1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1]
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
      purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gmm79xazh4j30tw1rm4je.jpg",
      group:[
        "https://wx1.sinaimg.cn/mw690/0084gu26ly1gmm5loehxfj30ho089tfr.jpg",
        "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmm76viimsj30hl088wik.jpg",
        "https://wx4.sinaimg.cn/mw690/0084gu26ly1gmm5lue4a7j30ho088dnd.jpg",
        "https://wx3.sinaimg.cn/mw690/0084gu26ly1gmm5mbf26xj30hn088n7k.jpg",
        "https://wx2.sinaimg.cn/mw690/0084gu26ly1gmm770mql1j30hm088gq0.jpg"

      ],
      checkedItem: [0,0,0,0,0],
    })
    this.countDown()

  },
  setNum:function(e){
    this.setData({
      num:100,
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
            this.endCount()
          console.log(this.data.index)
          db.collection('gameRecord').add({
            data:{
              ans: this.data.checkedItem,
              gameId: 'p1-3-'+this.data.index,
              userId: this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 2) {
            if(this.data.index+1==2){
              this.setData({
                // purl:'https://wx4.sinaimg.cn/mw690/0084gu26ly1gmiejwdgxzj30le1abaew.jpg',
                group:[
                  "https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3ngvuvj308b08bt8m.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nh7zuj308f089mx3.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3ngf3nj308908b0sm.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nitrtj308a08bwee.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3ngox8j308908b0sn.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3ngp8wj308o08bq2u.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3nknhsj308w08bglj.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nl2fmj308a08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nlddij308f08bglj.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3nlv79j308a089wee.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nngvtj308908ba9y.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nnxxdj308a08bdfq.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3nwxq2j308e08b3yf.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3npsakj308a08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3npfogj308908ba9y.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nu9i9j308a08bt8l.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nrii2j308w08bq2v.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g0jplj308s08b747.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4fzll0j308e08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g1u3xj308b08bwee.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g09n5j308a08bwee.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4g02q3j308908bq2t.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmd4g090mj308f089jra.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g9o9wj308908bgli.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g66apj308p08bglj.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4bysj308908b0sn.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4g5j6bj308a08b3yf.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4ky8j308908b0sm.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4mq4j308a08bt8m.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4og6t1j308a08bdfr.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4oc6anj308908bwed.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4orx7kj308a08b3yf.jpg",
                
                ],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==3){
              this.setData({
                // purl:'https://wx1.sinaimg.cn/mw690/0084gu26ly1gmielv9kmhj30le1abn23.jpg',
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

            this.setNum()
            this.countDown()

          }else{
            app.globalData.c1_num3= this.data.score
            wx.redirectTo({
              url: '../../yd1/sp3/sp',
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
              gameId: 'p1-3-'+this.data.index,
              userId: this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 2) {
            if(this.data.index+1==2){
              this.setData({
                // purl:'https://wx4.sinaimg.cn/mw690/0084gu26ly1gmiejwdgxzj30le1abaew.jpg',
                group:[
                  "https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3ngvuvj308b08bt8m.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nh7zuj308f089mx3.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3ngf3nj308908b0sm.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nitrtj308a08bwee.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3ngox8j308908b0sn.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3ngp8wj308o08bq2u.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3nknhsj308w08bglj.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nl2fmj308a08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nlddij308f08bglj.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmc3nlv79j308a089wee.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nngvtj308908ba9y.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nnxxdj308a08bdfq.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmc3nwxq2j308e08b3yf.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3npsakj308a08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3npfogj308908ba9y.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmc3nu9i9j308a08bt8l.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmc3nrii2j308w08bq2v.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g0jplj308s08b747.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4fzll0j308e08b3yf.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g1u3xj308b08bwee.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g09n5j308a08bwee.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4g02q3j308908bq2t.jpg",
"https://wx1.sinaimg.cn/mw690/006bUNIJly1gmmd4g090mj308f089jra.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4g9o9wj308908bgli.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g66apj308p08bglj.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4bysj308908b0sn.jpg",
"https://wx4.sinaimg.cn/mw690/006bUNIJly1gmmd4g5j6bj308a08b3yf.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4ky8j308908b0sm.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4g4mq4j308a08bt8m.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4og6t1j308a08bdfr.jpg",
"https://wx2.sinaimg.cn/mw690/006bUNIJly1gmmd4oc6anj308908bwed.jpg",
"https://wx3.sinaimg.cn/mw690/006bUNIJly1gmmd4orx7kj308a08b3yf.jpg",
                
                ],
                checkedItem: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==3){
              this.setData({
                // purl:'https://wx1.sinaimg.cn/mw690/0084gu26ly1gmielv9kmhj30le1abn23.jpg',
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

            this.setNum()
            this.countDown()

          }else{
            app.globalData.c1_num3= this.data.score
            wx.redirectTo({
              url: '../../yd1/sp3/sp',
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
      var s = 20
      for(;i<5;i++){
        if(this.data.ans1[i]==l[i]) cnt++;

      }
      if(cnt==5&&this.data.num>=90) {
        s=20
      }
      else s=10
      this.setData({
          score:this.data.score+s
      })

    }else if(this.data.index==2){
      var cnt = 0
      var i=0
      var s = 80
      for(;i<32;i++){
        if(this.data.ans2[i]==l[i]) cnt++;

      }
      if(this.data.num<80) s-=(80-this.data.num)*2
      s-=(32-cnt)*5
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