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
    timer:"",
    num:60,
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
      purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+1)+'b.jpg',
      group:[3,6,9,4,7,8,5,1,2],
      checkedItem: [0,0,0,0,0,0,0,0,0],
      
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
              ans: this.data.checkedItem,
              gameId: 'p2-1-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 5) {
            if(this.data.index+1==2){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[87,98,86,89,69,68,96,78,76],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==3){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[17,74,67,77,14,64,71,41,61],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
              }else if(this.data.index+1==4){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[674,964,471,215,647,715,711,694,641],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
              } else if(this.data.index+1==5){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[776,689,572,764,275,772,576,975,289],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } 
            this.setNum()
            this.countDown()
            console.log(this.data.index)
            } else if (res.cancel) {
             console.log('用户点击取消')
             }
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
          console.log(this.data.index)
          this.endCount()
          db.collection('gameRecord').add({
            data:{
              ans: this.data.checkedItem,
              gameId: 'p2-1-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
          if (this.data.index < 5) {
            if(this.data.index+1==2){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[87,98,86,89,69,68,96,78,76],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==3){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[17,74,67,77,14,64,71,41,61],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            }else if(this.data.index+1==4){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[674,964,471,215,647,715,711,694,641],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } else if(this.data.index+1==5){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p2/1_'+(this.data.index+2)+'b.jpg',
                group:[776,689,572,764,275,772,576,975,289],
                checkedItem: [0,0,0,0,0,0,0,0,0],
                index:this.data.index+1,
                

              })
            } 
            this.setNum()
            this.countDown()



          }else{
            wx.redirectTo({
              url: '../../yd2/sp1/sp',
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