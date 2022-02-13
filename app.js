import './shared/device-polyfill'
import { MessageBuilder } from './shared/message'

const logger = DeviceRuntimeCore.HmLogger.getLogger('homeconnect')
const appDevicePort = 20
const appSidePort = 0
const appId = 101233
const messageBuilder = new MessageBuilder({ appId, appDevicePort, appSidePort })

App({
  globalData: {
    messageBuilder: messageBuilder,
  },
  onCreate(options) {
    logger.log('app onCreate invoked')
    messageBuilder.connect()
  },

  onShow(options) {
    logger.log('app onShow invoked')
  },

  onHide(options) {
    logger.log('app onHide invoked')
  },

  onDestroy(options) {
    logger.log('app onDestroy invoked')
    messageBuilder.disConnect()
  },

  onError(error) {},

  onPageNotFound(obj) {},

  onUnhandledRejection(obj) {},
})