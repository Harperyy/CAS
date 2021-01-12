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
      "鼠","脸", "牛","山","家"
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
      purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gml89rzqjxj30hm0zagxp.jpg",
      src:"https://7971-yqq-3g0xquwqdd5bcff3-1303928640.tcb.qcloud.la/p4/1-1.mp3?sign=5a76ac8b6e0d6d25af951d2e67772474&t=1608973143"

      

    })
    myaudio.src=this.data.src
    myaudio.onEnded((res) => {
      console.log('end')
      this.setData({
        ifListen:1
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
          db.collection('gameRecord').add({
            data:{
              ans: this.data.scEmptyBtns,
              gameId: 'p4-1-'+this.data.index,
              userId:this.data.name
            },             
          })
          if(this.data.index<5){
            
            if(this.data.index+1==2){
              this.setData({
                purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gml89rzqjxj30hm0zagxp.jpg",
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
              })
            }
            else if(this.data.index+1==3){
              this.setData({
                purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gml89rzqjxj30hm0zagxp.jpg",
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
                  "猴", "字", "爱","蓝","木", "海", "天"
                ],
              })
            }
            else if(this.data.index+1==4){
              this.setData({index:this.data.index+1,
                purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gml89rzqjxj30hm0zagxp.jpg",
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
                  // { text: "", index: 8 },
                  // { text: "", index: 9 },
                  // { text: "", index: 10 },
                  // { text: "", index: 11 },
                  // { text: "", index: 12 },
                  // { text: "", index: 13 },
                  
        
        
                ],
                words:[
                  "饭", "月", "门","霜","读", "山", "牛", "鸭"//8
                ],
              })
            }
            else if(this.data.index+1==5){
              this.setData({
                purl:"https://wx4.sinaimg.cn/mw690/0084gu26ly1gml89rzqjxj30hm0zagxp.jpg",
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
                  // { text: "", index: 9 },
                  // { text: "", index: 10 },
                  // { text: "", index: 11 },
                  // { text: "", index: 12 },
                  // { text: "", index: 13 },
                ],
                words:[
                  "海", "光", "猫","雨","合", "草", "鸟","书", "猴"//9
                ],
              })
            }
          }
          else{
            wx.redirectTo({
              url: '../num2/gz/gz',
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