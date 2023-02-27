import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import vueCookie from 'vue-cookie'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { loadFonts } from './plugins/webfontloader'

loadFonts()


const vuetify = createVuetify({
    components,
    directives,
})


createApp(App)
  .use(router)
  .use(vuetify)
//  .use(vueCookie)
  .mount('#app')
