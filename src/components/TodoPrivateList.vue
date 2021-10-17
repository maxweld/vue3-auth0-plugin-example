<template>
  <div>
    <div class="todoListwrapper">
      <TodoItem v-bind:todos="filteredTodos" v-bind:type="type" />
    </div>
    <TodoFilters
      v-bind:remainingTodos="remainingTodos"
      v-bind:filterResults="filterResults"
      v-bind:filterType="filterType"
      v-bind:type="type"
      v-bind:clearCompleted="clearCompleted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/runtime-core'

import TodoItem from '@/components/TodoItem.vue'
import TodoFilters from '@/components/TodoFilters.vue'

export default defineComponent({
  components: {
    TodoItem,
    TodoFilters,
  },
  setup() {
    let type = ref('private')
    let filterType = ref('all')
    const todos = [
      {
        id: '1',
        title: 'This is private todo 1',
        is_completed: true,
        is_public: false,
      },
      {
        id: '2',
        title: 'This is private todo 2',
        is_completed: false,
        is_public: false,
      },
    ]

    const remainingTodos = computed(() => {
      const activeTodos =
        todos !== undefined
          ? todos.filter((todo) => todo.is_completed !== true)
          : []
      return activeTodos.length
    })

    const filteredTodos = computed(() => {
      if (filterType.value === 'all') {
        return todos
      } else if (filterType.value === 'active') {
        return todos.filter((todo) => todo.is_completed !== true)
      } //if (this.filterType === 'completed') {
      else return todos.filter((todo) => todo.is_completed === true)
    })

    const filterResults = (type: string) => {
      if (type === 'active') {
        filterType.value = 'active'
      } else if (type === 'completed') {
        filterType.value = 'completed'
      } else {
        filterType.value = 'all'
      }
    }
    const clearCompleted = () => {
      const isOk = window.confirm('Are you sure?')
      if (isOk) {
        // Remove all the todos that are completed
      }
    }

    return {
      todos,
      type,
      filterType,
      remainingTodos,
      filteredTodos,
      TodoFilters,
      filterResults,
      clearCompleted,
    }
  },
})
</script>
