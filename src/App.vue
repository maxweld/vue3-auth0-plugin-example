<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <span v-if="auth.authenticated">
      |
      <router-link to="/profile">Profile</router-link>
    </span>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import AuthenticationProperties from 'vue-auth0-plugin/dist/AuthProperty'

export default defineComponent({
  name: 'Profile',
  setup() {
    const auth = inject('auth') as AuthenticationProperties
    return { auth }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
