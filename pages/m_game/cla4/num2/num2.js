// pages/f_game/cla4/num1/num1.js
const app = getApp()
const myaudio = wx.createInnerAudioContext({});
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
      "这些", "是", "绿色","不是","那些", "黑色"
    ],
    index:1,
    num:60,
    timer:"",
    ifListen:0,
    kg:['____','____','____'],
    ly:[
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/2-1.mp3?sign=112e18e336179cae30c69b9dff627cef&t=1610564659",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/2-2.mp3?sign=36b75a105301c9630ea45bee17ad6dcf&t=1610564674",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/2-3.mp3?sign=3bbc4efd968b5066d89c1d761afe7bf6&t=1610564692",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/2-4.mp3?sign=d1eff19282e1d73c2a9d3ea088beb980&t=1610564706",
      "https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/2-5.mp3?sign=f00347a591281131e0073f4c54fcf9ab&t=1610564719"
    ],
    ans1:["那些","是","绿色"],
    ans2:["不是","黄色","蓝色","绿色","又让",],
    ans3:["黄色","紫色","然后","蓝色","不是"],
    ans4:["是","黑色","蓝色","现在","绿色","蓝色"],
    ans5:["紫色","是","又","黑色","想","这些"]
    
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
      purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
      src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-1.mp3?sign=5a76ac8b6e0d6d25af951d2e67772474&t=1608973143"

      

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
    console.log(this.data.kg)
    
    for (var i = 0; i < this.data.kg.length; i++){
      if (this.data.kg[i] == '____'){

        this.data.kg[i] = curWord
        
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
    console.log(this.data.kg)
    this.setData({
      kg: this.data.kg
    })
    console.log(this.data.kg)

  },
  handleClickCancel: function(e){
    console.log(this.data.kg)
    for (var i = 0; i < this.data.kg.length; i++){
      if (this.data.kg[i] != '____'){
        this.data.kg[i] = '____'        
      }
    }
    console.log(this.data.kg)
    this.setData({
      kg: this.data.kg
    })
    console.log(this.data.kg)

  },
  handledel: function(e){
    console.log('11111')
    for (var i = this.data.kg.length-1; i >=0 ; i--){
      console.log(this.data.kg[i])
      if (this.data.kg[i] != '____'){
        console.log(i)
        this.data.kg[i] = '____' 
        break;      
      }
    }
    this.setData({
      kg: this.data.kg
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
                  gameId: 'p4-2-'+this.data.index,
                  userId:this.data.name,
                  time:60-this.data.num
                },             
              })
              if(this.data.index<5){
                if(this.data.index+1==2){
                  this.setData({
                    purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                    index:this.data.index+1,
                    ifListen:0,
                    kg:['____','____','____','____','____'],
                    words:[
                      "绿色", "紫色", "黄色","蓝色","又让", "不让","是","不是"
                    ],
                  })
                }
                else if(this.data.index+1==3){
                  this.setData({
                    kg:['____','____','____','____','____'],
                    purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                    index:this.data.index+1,
                    ifListen:0,
                    words:[
                      "不是", "然后", "所以","是","紫色", "红色","黄色","蓝色"
                    ],
                  })
                }
                else if(this.data.index+1==4){
                  purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                  this.setData({index:this.data.index+1,
                    ifListen:0,
                    kg:['____','____','____','____','____','____'],
                    words:[
                      "黑色", "粉色", "是","不是","蓝色", "过去", "现在","绿色","蓝色"
                    ],
                  })
                }
                else if(this.data.index+1==5){
                  this.setData({
                    purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                    index:this.data.index+1,
                    ifListen:0,
                    kg:['____','____','____','____','____','____'],
                    words:[
                      "这些", "那些", "紫色","是","又","但", "想", "不想","黑色"
                    ],
                  })
                }
                // this.setNum()
                // this.countDown()
              }
              else{
                app.globalData.c4_num2= this.data.score
                wx.redirectTo({
                  url: '../../yd4/sp2/sp',
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
  toNext:function(e){
    wx.showModal({
      title: '提示',
      content: '真的确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          this.endCount()
          this.judge(this.data.kg)
          db.collection('gameRecord').add({
            data:{
              ans: this.data.scEmptyBtns,
              gameId: 'p4-2-'+this.data.index,
              userId:this.data.name,
              time:60-this.data.num
            },             
          })
          if(this.data.index<5){
            if(this.data.index+1==2){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                kg:['____','____','____','____','____'],
                words:[
                  "绿色", "紫色", "黄色","蓝色","又让", "不让","是","不是"
                ],
              })
            }
            else if(this.data.index+1==3){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                kg:['____','____','____','____','____'],
                words:[
                  "不是", "然后", "所以","是","紫色", "红色","黄色","蓝色"
                ],
              })
            }
            else if(this.data.index+1==4){
              purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
              this.setData({index:this.data.index+1,
                ifListen:0,
                kg:['____','____','____','____','____','____'],
                words:[
                  "黑色", "粉色", "是","不是","蓝色", "过去", "现在","绿色","蓝色"
                ],
              })
            }
            else if(this.data.index+1==5){

              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                kg:['____','____','____','____','____','____'],
                words:[
                  "这些", "那些", "紫色","是","又","但", "想", "不想","黑色"
                ],
              })
            }
            // this.setNum()
            // this.countDown()
          }
          else{
            app.globalData.c4_num2= this.data.score
            wx.redirectTo({
              url: '../../yd4/sp2/sp',
            })
          }
        }
      },
      judge:function(l){
        if(this.data.index==1){
          var cnt = 0
          var i=0
          var s = 10
          for(;i<3;i++){
            if(this.data.ans1[i]==l[i]) cnt++;
    
          }
          s = 30*cnt/3
          this.setData({
              score:this.data.score+s
            })
    
        }else if(this.data.index==2){
          var cnt = 0
          var i=0
          var s = 80
          for(;i<5;i++){
            if(this.data.ans2[i]==l[i]) cnt++;
    
          }
          console.log(cnt)
          s=15*cnt/5
          this.setData({
            score:this.data.score+s
          })
          
        }
        else if(this.data.index==3){
          var cnt = 0
          var i=0
          var s = 80
          for(;i<5;i++){
            if(this.data.ans3[i]==l[i]) cnt++;
    
          }
          s=15*cnt/5
          this.setData({
            score:this.data.score+s
          })
          
        }else if(this.data.index==4){
          var cnt = 0
          var i=0
          var s = 80
          for(;i<6;i++){
            if(this.data.ans4[i]==l[i]) cnt++;
    
          }
          s=15*cnt/6
          this.setData({
            score:this.data.score+s
          })
          
        }else if(this.data.index==5){
          var cnt = 0
          var i=0
          var s = 80
          for(;i<6;i++){
            if(this.data.ans5[i]==l[i]) cnt++;
    
          }
          s=15*cnt/6
          this.setData({
            score:this.data.score+s
          })
          
        }
        console.log("now:"+this.data.score)
      },

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