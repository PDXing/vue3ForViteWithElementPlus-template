import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)

for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

app.use(router).use(store).mount('#app')
