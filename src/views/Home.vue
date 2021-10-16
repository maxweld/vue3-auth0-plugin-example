<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!auth.authenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="auth.authenticated" @click="logout">Log out</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import AuthenticationProperties from 'vue-auth0-plugin/dist/AuthProperty'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const auth = inject('auth') as AuthenticationProperties

    const login = () => {
      auth.loginWithRedirect({})
    }

    const logout = () => {
      auth.logout({
        returnTo: window.location.origin,
      })
    }

    return { auth, login, logout }
  },
})
</script>
