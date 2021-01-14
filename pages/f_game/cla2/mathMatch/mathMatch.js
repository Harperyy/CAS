var app = getApp();
Page({
  data: {
    
      scEmptyBtns: [
        { text: "", index: 0 },
        { text: "", index: 1 },
        { text: "", index: 2 },
        { text: "", index: 3 },
        { text: "", index: 4 }
      ],
  
      words:[
        "XO", "XX", "OX","OO","OXX","XXX","OOX", "XOX","OXO","XXO"
      ],
    index: 0,  // 题目序列
    chooseValue: [], // 选择的答案序列
    totalScore: 100, // 总分
    wrong: 0, // 错误的题目数量
    wrongList: [], // 错误的题目集合-乱序
    wrongListSort: [], // 错误的题目集合-正序
  },
  onLoad: function (options) {
    console.log(options);
   // wx.setNavigationBarTitle({ title: options.testId }) // 动态设置导航条标题
    
    this.setData({
      questionList: app.globalData.questionList['104'],  // 拿到答题数据
      testId: '104' // 课程ID
    })
    console.log(this.data.questionList);
    
    let count = this.generateArray(0, this.data.questionList.length-1); // 生成题序
    let num = 12;  // 102/301-302 试题有20道题
    this.setData({
      shuffleIndex: this.shuffle(count).slice(0, 6) // 生成随机题序 [2,0,3] 并截取num道题
    })
  },
    //点击待选择的汉字
    handleClickWord: function(e){
      console.log("------------------")
      console.log(e.currentTarget.dataset.w)
  
      let fullFlag = true
      let curWord = e.currentTarget.dataset.w
  
      for (var i = 0; i < this.data.scEmptyBtns.length; i++){
        if (this.data.scEmptyBtns[i].text == ""){
          this.data.scEmptyBtns[i].text = curWord
          if(i < 4){
            fullFlag = false
          }
          break;
        }
      }
  
      if (fullFlag){
        let answer = ""
        for (var i = 0; i < this.data.scEmptyBtns.length; i++) {
          answer += this.data.scEmptyBtns[i].text
        }
        var trueValue = this.data.questionList[this.data.shuffleIndex[this.data.index]]['true'];

        this.data.chooseValue[this.data.index] = trueValue;
       
       
      }
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
    handleClickdel: function(e){
      for (var i = this.data.scEmptyBtns.length-1; i >=0 ; i--){
        if (this.data.scEmptyBtns[i].text != ""){
          this.data.scEmptyBtns[i].text = ""  
          break;      
        }
      }
      this.setData({
        scEmptyBtns: this.data.scEmptyBtns
      })
  
    },
  /*
  * 数组乱序/洗牌
  */
 shuffle: function (arr) {
  let i = 4;
  let arry=arr;
  let k=1;
  let z=0;
  for(z=0;z<3;z++){
  while (i) {
    let j = Math.floor(Math.random() * i--)+4*z;
    let ii=i+4*z;
    [arr[j], arr[ii]] = [arr[ii], arr[j]];
  }
  i=4;
}
[arr[2], arr[5]] = [arr[5], arr[2]];
[arr[3], arr[6]] = [arr[6], arr[3]];
[arr[4], arr[9]] = [arr[9], arr[4]];
[arr[5], arr[10]] = [arr[10], arr[5]];
  return arr;
},
  
  /*
  * 退出答题 按钮
  */
  outTest: function(){
    wx.showModal({
      title: '提示',
      content: '你真的要退出答题吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.switchTab({
            url: '../home/home'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /*
  * 下一题/提交 按钮
  */
  nextSubmit: function(){
    // 如果没有选择
    if (this.data.chooseValue[this.data.index] == undefined || this.data.chooseValue[this.data.index].length == 0) {  
      wx.showToast({
        title: '请选择至少一个答案!',
        icon: 'none',
        duration: 2000,
        success: function(){
          return;
        }
      })
      return;
    }

    // 判断答案是否正确
    this.chooseError();

    // 判断是不是最后一题
    if (this.data.index < this.data.shuffleIndex.length - 1) {
      // 渲染下一题
      this.setData({
        index: this.data.index + 1
      })
      for (var i = 0; i < this.data.scEmptyBtns.length; i++){
        if (this.data.scEmptyBtns[i].text != ""){
          this.data.scEmptyBtns[i].text = ""        
        }
      }
      this.setData({
        scEmptyBtns: this.data.scEmptyBtns
      })
    } else {
      let wrongList = JSON.stringify(this.data.wrongList);
      let wrongListSort = JSON.stringify(this.data.wrongListSort);
      let chooseValue = JSON.stringify(this.data.chooseValue);
       app.globalData.c3_num2= this.data.totalScore
      wx.redirectTo({
       
        url: '../../yd2/sp2/sp',
      })

      // 设置缓存
      var logs = wx.getStorageSync('logs') || []
      let logsList = { "date": Date.now(), "testId": this.data.testId, "score": this.data.totalScore }
      logs.unshift(logsList);
      wx.setStorageSync('logs', logs);
    }
  },
  /*
  * 错题处理
  */
   chooseError: function(){
      let answer = ""
          for (var i = 0; i < this.data.scEmptyBtns.length; i++) {
            answer += this.data.scEmptyBtns[i].text
          }
          var trueValue = this.data.questionList[this.data.shuffleIndex[this.data.index]]['true'];
  
          this.data.chooseValue[this.data.index] = trueValue;
        
      console.log('选择了' + answer + '答案是' + trueValue);
      console.log('成绩1 '+this.data.totalScore);
      console.log('分 '+this.data.questionList[this.data.shuffleIndex[this.data.index]]['scores'] );
  
      if (answer != trueValue){
        console.log('错了');
        this.setData({
          totalScore: this.data.totalScore - this.data.questionList[this.data.shuffleIndex[this.data.index]]['scores']  // 扣分操作
        })
        console.log('成绩2'+this.data.totalScore);
      }
    },
  /**
     * 生成一个从 start 到 end 的连续数组
     * @param start
     * @param end
     */
  generateArray: function(start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start)
  }
})