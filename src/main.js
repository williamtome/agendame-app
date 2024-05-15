import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss'
import VueTablerIcons from 'vue-tabler-icons';
import { createApp } from 'vue'

const app = createApp(App)
app
  .use(router)
  .use(vuetify)
  .use(VueTablerIcons)
  .mount('#app')
