// pages/f_game/cla4/num1/num1.js
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
    
    words:[
       "红色","蓝色", "黄色","绿色"
    ],
    index:1,
    ifListen:0
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
      src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/3-1.mp3?sign=f47aaa05a2ae2c2e26485d9cc9f1cab8&t=1610462303"

      

    })
    myaudio.src=this.data.src
    myaudio.onEnded((res) => {
      console.log('end')
      this.setData({
        ifListen:1

      })
      if(this.data.index==1){
        this.setData({
          purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gml7myupebj30fm0v9wh0.jpg"
        })
      }
      else if(this.data.index==2){
        this.setData({
          purl:"https://wx3.sinaimg.cn/mw690/0084gu26ly1gmla9m4c1yj30hm0zamyu.jpg"
        })
      }
      else if(this.data.index==3){
        this.setData({
          purl:"https://wx1.sinaimg.cn/mw690/0084gu26ly1gmla9q7whyj30hm0zaq4i.jpg"
        })
      }
      else if(this.data.index==4){
        this.setData({
          purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gmla9udhvbj30hm0zadhh.jpg"
        })
      }
      else if(this.data.index==5){
        this.setData({
          purl:"https://wx2.sinaimg.cn/mw690/0084gu26ly1gmla9y48yzj30hm0zamyu.jpg"
        })
      }
    })

  },
  play:function(e){
    
    

    
    if(this.data.ifListen==0){
      console.log(this.data.ifListen)
      myaudio.play()

    }

  },

  toNext:function(e){
    wx.showModal({
      title: '提示',
      content: '真的确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          db.collection('gameRecord').add({
            data:{
              ans: this.data.scEmptyBtns,
              gameId: 'p4-3-'+this.data.index,
              userId:this.data.name
            },             
          })
          if(this.data.index<5){
            if(this.data.index+1==2){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                
                words:[
                  "黄色","粉色","紫色","黑色"
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/3-2.mp3?sign=0f5a8d598e14ae41c07587961ddf28d5&t=1610462331"
              })
            }
            else if(this.data.index+1==3){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                words:[
                  "黑色","褐色","蓝色","粉色","黄色"
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/3-3.mp3?sign=38943539327d0fde245a19308e2560bc&t=1610462386"
              })
            }
            else if(this.data.index+1==4){
              purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
              this.setData({index:this.data.index+1,
                ifListen:0,
                
                words:[
                  "黑色着","绿色着","蓝色着","粉色着","黄色着"
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/3-4.mp3?sign=172d1d1e705a05df1cfa1cedd817a83d&t=1610462430"
              })
            }
            else if(this.data.index+1==5){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                
                words:[
                  "紫色着","绿色着","不是紫色着", "不是绿色着"
                ],
                src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/3-5.mp3?sign=e412baba01f27fccb6bd3018c0439739&t=1610462476"
              })
            }
          }
          else{
            wx.redirectTo({
              url: '../num3/gz/gz',
            })
          }
        }
      }
    })
    
    
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