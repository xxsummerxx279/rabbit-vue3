import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
//引入初始化样式文件
import '@/styles/common.scss'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
