<template>
  <div class="todoWrapper">
    <TodoInput type="public" />
    <TodoPublicList type="public" />
  </div>
</template>

<script lang="ts">
import TodoInput from '@/components/TodoInput.vue'
import TodoPublicList from '@/components/TodoPublicList.vue'
export default {
  components: {
    TodoInput,
    TodoPublicList,
  },
}
</script>
