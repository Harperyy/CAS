// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:"yqq-3g0xquwqdd5bcff3",
  traceUser:true
})
const db = cloud.database()
// cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  

  try {
    const _ = db.conmmand
    return await db.collection('gameRecord').where({
      userId:"yyyyqqqqq"
    }).remove()
  } catch(e) {
    console.error(e)
  }
}