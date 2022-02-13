import { textStyle } from './index.style'
var timer1 
import { readFileSync, writeFileSync } from './../../../utils/fs'
const { messageBuilder } = getApp()._options.globalData
const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
var data='--'
var text,bfb
Page({
  onMessage() {
    messageBuilder.on('call', ({ payload: buf }) => {
      const json = messageBuilder.buf2Json(buf)
      data = json
      this.createAndUpdateList()
    })
  },
  getTodoList() {
    messageBuilder
      .request({
        jsonrpc: 'hmrpcv2',
        method: 'GET_TODO_LIST',
        params: {},
      })
      .then(({ result }) => {
        data = result
        this.createAndUpdateList()
      })
      .catch((res) => {})
  },
  build() {
    logger.debug('page build invoked')
  },
  onInit() {
    logger.debug('page onInit invoked')
    this.onMessage()
  //  this.getTodoList()

  
    data='¥'+readFileSync()

  
text = hmUI.createWidget(hmUI.widget.TEXT)
    text.setProperty(hmUI.prop.MORE, {
      x: 0,
      y: 0,
      w: 454,
      h: 454-0,
      text: 'hello world',
      text_size: 64,
      color: 0xffffff,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V
    })

    text.setProperty(hmUI.prop.MORE, {
      text: data
    })
    bfb = hmUI.createWidget(hmUI.widget.TEXT)
    bfb.setProperty(hmUI.prop.MORE, {
      x: 0,
      y: 0,
      w: 454,
      h: 350,
      text: '上次价格:',
      text_size: 36,
      color: 0xffffff,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V
    })
      var dg=false;


  
      hmApp.registSpinEvent(function (key, degree) {
    
       if(degree>5||degree<-5)
       dg=true
       if(degree==0&&dg){ 
        // hmUI.showToast({
        //   text: '刷新中...' // 支持多行显示
        // })
      dg=false
      // 返回表盘
hmApp.gotoHome()
      hmApp.startApp({ appid: 101233, url: 'page/gts3/home/index.page' })
     
    }
      
      })

  },
  onDestory() {
    //取消注册按键监听
hmApp.unregistSpinEvent()
    logger.debug('page onDestory invoked')
  },
   randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}   ,createAndUpdateList() {

  // var shi=data.split(/，|。|？|——/);
  // var shi_end=''
  // for (var i=0;i<shi.length-1;i++)
  // { 
  //   shi_end=shi_end+'\n'+shi[i];
  // }
 var bfb_num
 if(readFileSync()<=data)
 bfb_num='+'+(((data-readFileSync())/readFileSync())*100).toFixed(2)+'%'
 else
 bfb_num='-'+(((readFileSync()-data)/readFileSync())*100).toFixed(2)+'%'


 bfb.setProperty(hmUI.prop.MORE, {
  text: bfb_num
})
  text.setProperty(hmUI.prop.MORE, {
    text: '¥'+data,
    color: 0xc08eaf
  })
 writeFileSync(data, false)
}
})
