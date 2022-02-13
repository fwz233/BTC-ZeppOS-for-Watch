import { MessageBuilder } from '../shared/message'
import { DEFAULT_TODOLIST } from './../utils/constants'
const messageBuilder = new MessageBuilder()
var sb='\n正在连接网络\n将显示一诗句'
function getTodoList() {
  return sb
}
AppSideService({
  onInit() {
    messageBuilder.listen(() => {})

  // fetch('http://yijuzhan.com/api/word.php?m=json').then(function(response) {
  //   return response.json();//  return response.text();
  // }).then(function(json) {
    // 
    
    // 中文 https://cn.bing.com/search?q=btc&form=QBLH&sp=-1&pq=bt&sc=0-2&qs=n&sk=&cvid=AA14996989A34F56913CE7BA75339DF1
  

    fetch('https://cn.bing.com/search?q=btc&form=ANNNB1&refig=8fca740ffca1403bb83b5fa6408c9204').then(function(data){
  //fetch('https://www.futunn.com/stock/ZEPP-US?seo_redirect=1&channel=1244&subchannel=2&from=BaiduAladdin&utm_source=alading_user&utm_medium=website_growth').then(function(data){
      // text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，用于获取后台返回的数据
      var sbb=data.body.split(/"forwardConversionRate":|,"backwardConversionRate"/)//btc
   //  var sbb=data.body.split(/"price_nominal":"|","change":"/)// mi米
    
      sb=sbb[1]
      messageBuilder.call(getTodoList())
    })

    messageBuilder.on('request', (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload)
      if (jsonRpc.method === 'GET_TODO_LIST') {
        ctx.response({
          data: { jsonrpc: 'hmrpcv1', result: getTodoList() },
        })
      }
    })
  },
  onRun() {},
  onDestroy() {},
})