<template>
  <div class="formInput">
    <input
      class="input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <i class="downArrow fa fa-angle-right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: ['type'],
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    addTodo: function() {
      // insert new todo into db
    },
  },
})
</script>
