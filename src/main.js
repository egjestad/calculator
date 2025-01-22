import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import CalculatorView from '@/views/CalculatorView.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('CalculatorView', CalculatorView)

app.mount('#app')
