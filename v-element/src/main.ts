import { createApp } from 'vue'
import App from './App.vue'

// 导入css资源
// import './assets/main.css'
import './styles/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App)
app.mount('#app')
