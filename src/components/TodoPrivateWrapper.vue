<template>
  <div class="todoWrapper">
    <TodoInput type="private" />
    <!-- <TodoPrivateList type="private" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import TodoInput from '@/components/TodoInput.vue'
// import TodoPrivateList from '@/components/TodoPrivateList.vue'
export default defineComponent({
  components: {
    TodoInput,
    // TodoPrivateList,
  },
})
</script>
