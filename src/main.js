import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/js/flexible'
import '@/assets/css/index.styl'
import wx from 'weixin-js-sdk'
// import { Dialog, Toast } from 'vant'
import Toast from 'vant/lib/toast'
import Dialog from 'vant/lib/dialog'
window.wx = wx
console.log('====当前环境====', process.env.NODE_ENV)

const app = createApp({
  components: { App },
  setup () {
    return () => (<App />)
  }
})
app.config.globalProperties.$dialog = Dialog
// app.config.globalProperties.$toast = Toast
app.config.globalProperties.$isLoading = false // 全局loading展示控制字段
app.use(router).use(Dialog).use(Toast).mount('#app')
