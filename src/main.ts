import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

const app = createApp(App)

app.use(createPinia())
app.use(Quasar, {
  config: {
    brand: {
      primary: '#05c46b'
    }
  }
})
app.use(router)

app.mount('#q-app')
