// pages/f_game/cla4/num1/num1.js
const app = getApp()
wx.cloud.init({
  env: "yqq-3g0xquwqdd5bcff3",
  traceUser: true
})
const db = wx.cloud.database()
const myaudio = wx.createInnerAudioContext({});
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    score:0,
    scEmptyBtns: [
      { text: "", index: 0 },
      { text: "", index: 1 },
      { text: "", index: 2 },
      { text: "", index: 3 },
      { text: "", index: 4 },
     
    ],
    words:[
      "鼠","脸", "牛","山","家"
    ],
    index:1,
    ifListen:0,
    num:60,
    timer:"",
    ly:[
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-1.mp3?sign=097b85d5b01e736760538eeec6a03f24&t=1610541202",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-2.mp3?sign=358c37e33f8641d1184f70c2050e51b7&t=1610541218",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-3.mp3?sign=f181b4e40ec353b08346397bade2b4da&t=1610541234",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-4.mp3?sign=bf5cd4d13cde3148678552452384ad6a&t=1610541252",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-5.mp3?sign=06ff05d05e6bf5cd8a36335a19523635&t=1610541263"
    ],
    ans1:["山","脸", "牛","家","鼠"],
    ans2:["草","脚", "猪", "雷","水", "人","床" ],
    ans3:["字", "天","木","蓝", "爱", "海","猴"],
    
    ans4:["牛","月","饭","读","鸭",,"霜","门", "山"],
    
    ans5:["雨","猴","海", "草","猫","光","鸟","河","书"]
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
      
      purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
      src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-1.mp3?sign=9587c9b1a49b1dcecfb764df5a40cd1d&t=1610458794",
score:0
      

    })
    myaudio.src=this.data.src
    myaudio.onEnded((res) => {
      console.log('end')
      this.setData({
        ifListen:1,
        purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gmn2czptbcj30gx0xv3z7.jpg"
      })
      this.setNum()
              this.countDown()
    })

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
                  ans: this.data.scEmptyBtns,
                  gameId: 'p4-1-'+this.data.index,
                  userId:this.data.name,
                  time:60-this.data.num
                },             
              })
              if(this.data.index<5){
                
                if(this.data.index+1==2){
                  this.setData({
                    purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
                    index:this.data.index+1,
                    ifListen:0,
                    scEmptyBtns: [
                      { text: "", index: 0 },
                      { text: "", index: 1 },
                      { text: "", index: 2 },
                      { text: "", index: 3 },
                      { text: "", index: 4 },
                      { text: "", index: 5 },
                      { text: "", index: 6 },
                      // { text: "", index: 7 },
                      // { text: "", index: 8 },
                      // { text: "", index: 9 },
                    ],
                    words:[
                      "猪", "水", "草","雷","脚", "床", "人"
                    ],
                    src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-2.mp3?sign=173a129cecddd90129aaa789ef4ae593&t=1610458855"
                  })
                }
                else if(this.data.index+1==3){
                  purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
                  this.setData({
                    index:this.data.index+1,
                    ifListen:0,
                    scEmptyBtns: [
                      { text: "", index: 0 },
                      { text: "", index: 1 },
                      { text: "", index: 2 },
                      { text: "", index: 3 },
                      { text: "", index: 4 },
                      { text: "", index: 5 },
                      { text: "", index: 6 },
                      // { text: "", index: 7 },
                      // { text: "", index: 8 },
                      // { text: "", index: 9 },
                      // { text: "", index: 10 },
                      // { text: "", index: 11}
                    ],
                    words:[
                      "猴", "字", "爱","蓝","木", "海", "天"//7
                    ],
                    src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-3.mp3?sign=b208e6155a510ac96108c0c35d0a2a2f&t=1610458878"
                  })
                }
                else if(this.data.index+1==4){
                  purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
                  this.setData({index:this.data.index+1,
                    ifListen:0,
                    scEmptyBtns: [
                      { text: "", index: 0 },
                      { text: "", index: 1 },
                      { text: "", index: 2 },
                      { text: "", index: 3 },
                      { text: "", index: 4 },
                      { text: "", index: 5 },
                      { text: "", index: 6 },
                      { text: "", index: 7 },
                     
                      
                      
            
            
                    ],
                    words:[
                      "饭", "月", "门","霜","读", "山", "牛", "鸭"//8
                    ],
                    src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-4.mp3?sign=58fd3de1f931b0914dc833bad6e1805d&t=1610458900"
                  })
                }
                else if(this.data.index+1==5){
                  purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
                  this.setData({
                    index:this.data.index+1,
                    ifListen:0,
                    scEmptyBtns: [
                      { text: "", index: 0 },
                      { text: "", index: 1 },
                      { text: "", index: 2 },
                      { text: "", index: 3 },
                      { text: "", index: 4 },
                      { text: "", index: 5 },
                      { text: "", index: 6 },
                      { text: "", index: 7 },
                      {text: "", index: 8 },
                     
                    ],
                    words:[
                      "海", "光", "猫","雨","合", "草", "鸟","书", "猴"//9
                    ],
                    src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-5.mp3?sign=897aea784e60cd198f9d1ed0c6d6df67&t=1610458926"
                  })
                }
                // this.setNum()
                // this.countDown()
              }
              else{
                app.globalData.c4_num1= this.data.score
                wx.redirectTo({
                  url: '../../yd4/sp1/sp',
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
  play:function(e){
    
    

    
    if(this.data.ifListen==0){
      console.log(this.data.ifListen)
      myaudio.src=this.data.ly[this.data.index-1]
      myaudio.play()

    }

  },
  
  
  handleClickWord: function(e){
    

    let fullFlag = true
    let curWord = e.currentTarget.dataset.w

    for (var i = 0; i < this.data.scEmptyBtns.length; i++){
      if (this.data.scEmptyBtns[i].text == ""){
        this.data.scEmptyBtns[i].text = curWord
        
        break;
      }
    }

    // if (fullFlag){
    //   let answer = ""
    //   for (var i = 0; i < this.data.scEmptyBtns.length; i++) {
    //     answer += this.data.scEmptyBtns[i].text
    //   }
    //   var trueValue = this.data.questionList[this.data.shuffleIndex[this.data.index]]['true'];

    //   this.data.chooseValue[this.data.index] = trueValue;
    //   if (answer == trueValue){
    //     wx.showToast({
    //       title: '回答正确',
    //     })
    //   }else{
    //     wx.showToast({
    //       title: '回答错误',
    //     })
    //   }
     
    // }
    this.setData({
      scEmptyBtns: this.data.scEmptyBtns
    })

  },
  handleClickCancel: function(e){
    for (var i = 0; i < this.data.scEmptyBtns.length; i++){
      if (this.data.scEmptyBtns[i].text != ""){
        this.data.scEmptyBtns[i].text = ""        
      }
    }
    this.setData({
      scEmptyBtns: this.data.scEmptyBtns
    })

  },
  handledel: function(e){
    console.log('11111')
    for (var i = this.data.scEmptyBtns.length-1; i >=0 ; i--){
      console.log(this.data.scEmptyBtns[i].text)
      if (this.data.scEmptyBtns[i].text != ""){
        console.log(i)
        this.data.scEmptyBtns[i].text = ""  
        break;      
      }
    }
    this.setData({
      scEmptyBtns: this.data.scEmptyBtns
    })

  },
  toNext:function(e){
    wx.showModal({
      title: '提示',
      content: '真的确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          this.endCount()
          this.judge(this.data.scEmptyBtns)
          db.collection('gameRecord').add({
            data:{
              ans: this.data.scEmptyBtns,
              gameId: 'p4-1-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
          if(this.data.index<5){
            
            if(this.data.index+1==2){
              this.setData({
                index:this.data.index+1,
                ifListen:0,
                scEmptyBtns: [
                  { text: "", index: 0 },
                  { text: "", index: 1 },
                  { text: "", index: 2 },
                  { text: "", index: 3 },
                  { text: "", index: 4 },
                  { text: "", index: 5 },
                  { text: "", index: 6 },
                  // { text: "", index: 7 },
                  // { text: "", index: 8 },
                  // { text: "", index: 9 },
                ],
                words:[
                  "猪", "水", "草","雷","脚", "床", "人"
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-2.mp3?sign=173a129cecddd90129aaa789ef4ae593&t=1610458855"
              })
            }
            else if(this.data.index+1==3){
              this.setData({
                index:this.data.index+1,
                ifListen:0,
                scEmptyBtns: [
                  { text: "", index: 0 },
                  { text: "", index: 1 },
                  { text: "", index: 2 },
                  { text: "", index: 3 },
                  { text: "", index: 4 },
                  { text: "", index: 5 },
                  { text: "", index: 6 },
                  // { text: "", index: 7 },
                  // { text: "", index: 8 },
                  // { text: "", index: 9 },
                  // { text: "", index: 10 },
                  // { text: "", index: 11}
                ],
                words:[
                  "猴", "字", "爱","蓝","木", "海", "天"//7
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-3.mp3?sign=b208e6155a510ac96108c0c35d0a2a2f&t=1610458878"
              })
            }
            else if(this.data.index+1==4){
              this.setData({index:this.data.index+1,
                ifListen:0,
                scEmptyBtns: [
                  { text: "", index: 0 },
                  { text: "", index: 1 },
                  { text: "", index: 2 },
                  { text: "", index: 3 },
                  { text: "", index: 4 },
                  { text: "", index: 5 },
                  { text: "", index: 6 },
                  { text: "", index: 7 },
                 
                  
                  
        
        
                ],
                words:[
                  "饭", "月", "门","霜","读", "山", "牛", "鸭"//8
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-4.mp3?sign=58fd3de1f931b0914dc833bad6e1805d&t=1610458900"
              })
            }
            else if(this.data.index+1==5){
              this.setData({
                index:this.data.index+1,
                ifListen:0,
                scEmptyBtns: [
                  { text: "", index: 0 },
                  { text: "", index: 1 },
                  { text: "", index: 2 },
                  { text: "", index: 3 },
                  { text: "", index: 4 },
                  { text: "", index: 5 },
                  { text: "", index: 6 },
                  { text: "", index: 7 },
                  {text: "", index: 8 },
                 
                ],
                words:[
                  "海", "光", "猫","雨","合", "草", "鸟","书", "猴"//9
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-5.mp3?sign=897aea784e60cd198f9d1ed0c6d6df67&t=1610458926"
              })
            }
            // this.setNum()
            // this.countDown()
          }
          else{
            app.globalData.c4_num1= this.data.score
            wx.redirectTo({
              url: '../../yd4/sp1/sp',
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
      var s = 10
      for(;i<5;i++){
        if(this.data.ans1[i]==l[i].text) cnt++;

      }
      s = 10*cnt/5
      this.setData({
          score:this.data.score+s
        })

    }else if(this.data.index==2){
      var cnt = 0
      var i=0
      var s = 80
      for(;i<7;i++){
        if(this.data.ans2[i]==l[i].text) cnt++;

      }
      console.log(cnt)
      s=20*cnt/7
      this.setData({
        score:this.data.score+s
      })
      
    }
    else if(this.data.index==3){
      var cnt = 0
      var i=0
      var s = 80
      for(;i<7;i++){
        if(this.data.ans3[i]==l[i].text) cnt++;

      }
      s=20*cnt/7
      this.setData({
        score:this.data.score+s
      })
      
    }else if(this.data.index==4){
      var cnt = 0
      var i=0
      var s = 80
      for(;i<8;i++){
        if(this.data.ans4[i]==l[i].text) cnt++;

      }
      s=25*cnt/8
      this.setData({
        score:this.data.score+s
      })
      
    }else if(this.data.index==5){
      var cnt = 0
      var i=0
      var s = 80
      for(;i<9;i++){
        if(this.data.ans5[i]==l[i].text) cnt++;

      }
      s=25*cnt/9
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
    this.audioCtx.destroy();

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