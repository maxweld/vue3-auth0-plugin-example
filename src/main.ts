import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAuth0Plugin from 'vue-auth0-plugin'
import { Auth0ClientOptions } from '@auth0/auth0-spa-js'
import { provider } from './apollo.provider'

const auth0Options: Auth0ClientOptions = {
  // auth0 uses snake case
  client_id: process.env.VUE_APP_AUTH0_CLIENT_KEY,
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  audience: process.env.VUE_APP_AUTH0_AUDIENCE,
  redirect_uri: window.location.origin,
}

const app = createApp(App)
app.use(VueAuth0Plugin, auth0Options)
app.use(provider)
app.use(router)
app.mount('#app')
