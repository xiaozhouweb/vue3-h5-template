import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store,key} from '@/store'

import '@/assets/scss/_app.scss'


createApp(App)
.use(router)
.use(store,key)
.mount('#app')
