// pages/rada/rada.js
const app=getApp()
let radCtx = wx.createCanvasContext("radarCanvas");//雷达图
let s1 = (app.globalData.c1_num1+app.globalData.c1_num2+app.globalData.c1_num3)
let s2 = (app.globalData.c2_num1+app.globalData.c2_num2+app.globalData.c2_num3)
let s4 = (app.globalData.c4_num1+app.globalData.c4_num2+app.globalData.c4_num3)
let s3 = (app.globalData.c3_num1+app.globalData.c3_num2+app.globalData.c3_num3)

      // radarData: [["注意(S)", s1], ["艺术型(A)", s2], ["同时性(I)", s3], ["继时性(R)", s4], ["常规型(C)", 65]],
    
let radar = {
  mW: 360,
  mH: 240,
  mCenter: 180, //中心点x
  hCenter: 120, //中心点y
  mAngle: Math.PI * 2 / 5,
  mRadius: 65, //半径(减去的值用于给绘制的文本留空间),
  radarData: [["注意(S)", s1], ["艺术型(A)", s2], ["同时性(I)", s3], ["继时性(R)", s4], ["常规型(C)", 65]],
};
Page({
  data: {

  },
  onLoad(){
    this.setData({
      s11:app.globalData.c1_num1,
      s12:app.globalData.c1_num2,
      s13:app.globalData.c1_num3,
      s21:app.globalData.c2_num1,
      s22:app.globalData.c2_num2,
      s23:app.globalData.c2_num3,
      s31:app.globalData.c3_num1,
      s32:app.globalData.c3_num2,
      s33:app.globalData.c3_num3,
      s41:app.globalData.c4_num1,
      s42:app.globalData.c4_num2,
      s43:app.globalData.c4_num3,
    })
   


  },
  onReady() {
    console.log(s1)
    console.log(s2)
    console.log(s3)
    console.log(app.globalData.c1_num1)
    console.log(app.globalData.c1_num2)
    console.log(app.globalData.c1_num3)
    console.log(app.globalData.c2_num1)
    console.log(app.globalData.c2_num2)
    console.log(app.globalData.c2_num3)
    console.log(app.globalData.c3_num1)
    console.log(app.globalData.c3_num2)
    console.log(app.globalData.c3_num3)
    console.log(app.globalData.c4_num1)
    console.log(app.globalData.c4_num2)
    console.log(app.globalData.c4_num3)

    let s1 = (app.globalData.c1_num1+app.globalData.c1_num2+app.globalData.c1_num3)/3
let s2 = (app.globalData.c2_num1+app.globalData.c2_num2+app.globalData.c2_num3)/3
let s4 = (app.globalData.c4_num1+app.globalData.c4_num2+app.globalData.c4_num3)/3
let s3 = (app.globalData.c3_num1+app.globalData.c3_num2+app.globalData.c3_num3)/3
radar.radarData=[["注意(A)", s1], ["计划(P)", s2], ["同时性(S)", s3], ["继时性(S)", s4], ["常规型(C)", 65]]
     
    this.drawRadar();//雷达图
  },
  // ***************************雷达图开始**********************************
  // 雷达图
  drawRadar() {
    const radarData = radar.radarData;
    this.drawEdge() //画五边形
    this.drawLinePoint()
    this.drawRegion(radarData, 'rgba(150, 43, 171, 0.3)') //设置数据
    this.drawTextCans(radarData)//设置文本数据
    this.drawCircle(radarData, '#CD81F3')//设置节点
    radCtx.draw()//开始绘制
  },
  // 绘制5条边
  drawEdge() {  
    radCtx.setStrokeStyle("#8A5A83");
    for (let i = 0; i < 5; i++) {
      //计算半径
      radCtx.beginPath();
      let rdius = radar.mRadius / 5 * (i + 1) - 0;
      //画5条线段
      for (let j = 0; j < 5; j++) {
        //坐标
        let x = radar.mCenter + rdius * Math.sin(radar.mAngle * j+120);
        let y = radar.hCenter + rdius * Math.cos(radar.mAngle * j+120);
        radCtx.lineTo(x, y);
      }
      radCtx.setLineWidth(0.8)
      radCtx.closePath()
      radCtx.stroke()
    }
  },
  // 绘制连接点
  drawLinePoint() {
    for (let k = 0; k < 6; k++) {
      let x = radar.mCenter + radar.mRadius * Math.sin(radar.mAngle * k+120);
      let y = radar.hCenter + radar.mRadius * Math.cos(radar.mAngle * k+120);
      radCtx.moveTo(radar.mCenter, radar.hCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion(mData, color) {
    radCtx.beginPath();
    for (let m = 0; m < 5; m++) {
      let x = radar.mCenter + radar.mRadius * Math.sin(radar.mAngle * m+120) * mData[m][1] / 100;
      let y = radar.hCenter + radar.mRadius * Math.cos(radar.mAngle * m+120) * mData[m][1] / 100;
      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },
  //绘制文字
  drawTextCans(mData) {
    radCtx.setFillStyle("#555")
    radCtx.setFontSize(12) //设置字体
    for (let n = 0; n < 5; n++) {
      let x = radar.mCenter + radar.mRadius * Math.sin(radar.mAngle * n+120);
      let y = radar.hCenter + radar.mRadius * Math.cos(radar.mAngle * n+120);
      //通过不同的位置，调整文本的显示位置
      if (n == 0) {
        radCtx.fillText(mData[0][0], x - 20, y + 21);
      } else if (n == 1) {
        radCtx.fillText(mData[1][0], x + 10, y + 6);
      } else if (n == 2) {
        radCtx.fillText(mData[2][0], x-19 , y -5);
      } else if (n == 3) {
        radCtx.fillText(mData[3][0], x - 55, y+5 );
      } else if (n == 4) {
        radCtx.fillText(mData[4][0], x - 40, y + 20);
      }
    }
  },
  //画点
  drawCircle(mData, color) {
    const r = 2; //设置节点小圆点的半径
    for (let i = 0; i < 5; i++) {
      let x = radar.mCenter + radar.mRadius * Math.sin(radar.mAngle * i+120) * mData[i][1] / 100;
      let y = radar.hCenter + radar.mRadius * Math.cos(radar.mAngle * i+120) * mData[i][1] / 100;
      radCtx.beginPath();
      radCtx.arc(x, y, r, 0, Math.PI * 2);
      radCtx.fillStyle = color;
      radCtx.fill();
    }
  }
  // ****************************雷达图结束**********************************
})


