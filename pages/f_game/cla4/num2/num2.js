// pages/f_game/cla4/num1/num1.js
const myaudio = wx.createInnerAudioContext({});
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
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
    ifListen:0,
    kg:['____','____','____','____','____','____','____','____','____','____','____','____','____']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      purl:"cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg",
      src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-1.mp3?sign=5a76ac8b6e0d6d25af951d2e67772474&t=1608973143"

      

    })
    myaudio.src=this.data.src
    myaudio.onEnded((res) => {
      console.log('end')
      this.setData({
        ifListen:1,
        purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/2-'+this.data.index+'k.jpg'
      })
    })

  },
  play:function(e){
    
    

    
    if(this.data.ifListen==0){
      console.log(this.data.ifListen)
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
  toNext:function(e){
    wx.showModal({
      title: '提示',
      content: '真的确定了吗？',
      success:(res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          if(this.data.index<5){
            if(this.data.index+1==2){
              this.setData({
                purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
                index:this.data.index+1,
                ifListen:0,
                
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
                words:[
                  "不是", "然后", "所以","是","紫色", "红色","黄色","蓝色"
                ],
              })
            }
            else if(this.data.index+1==4){
              purl:'cloud://yqq-3g0xquwqdd5bcff3.7971-yqq-3g0xquwqdd5bcff3-1303928640/p4/bj1.jpg',
              this.setData({index:this.data.index+1,
                ifListen:0,
                
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
                
                words:[
                  "这些", "那些", "紫色","是","又","但", "想", "不想","黑色"
                ],
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