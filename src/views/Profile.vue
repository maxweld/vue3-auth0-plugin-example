<template>
  <div>
    <div v-if="auth.user">
      <img :src="auth.user.picture" />
      <h2>{{ auth.user.name }}</h2>
      <p>{{ auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify(auth.user, null, 2) }}</pre>
    </div>
  </div>
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
