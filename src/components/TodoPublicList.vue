<template>
  <div>
    <div class="todoListwrapper">
      <div
        class="loadMoreSection"
        v-if="newTodosCount"
        v-on:click="loadMoreClicked"
      >
        New tasks have arrived! ({{ newTodosCount }})
      </div>
      <TodoItem v-bind:todos="todos" v-bind:type="type" />
      <div
        class="loadMoreSection"
        v-if="olderTodosAvailable"
        v-on:click="loadOlderClicked"
      >
        Load older tasks
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { defineComponent, ref } from '@vue/runtime-core'
// import TodoFilters from "@/components/TodoFilters.vue";
export default defineComponent({
  components: {
    TodoItem,
    // TodoFilters
  },
  setup() {
    const olderTodosAvailable = ref(true)
    const newTodosCount = ref(1)
    const limit = ref(7)
    const type = ref('public')

    const todos = ref([
      {
        id: '1',
        title: 'This is public todo 1',
        is_public: true,
        user: {
          name: 'someUser1',
        },
      },
      {
        id: '2',
        title: 'This is public todo 2',
        is_completed: false,
        is_public: true,
        user: {
          name: 'someUser2',
        },
      },
      {
        id: '3',
        title: 'This is public todo 3',
        is_public: true,
        user: {
          name: 'someUser3',
        },
      },
      {
        id: '4',
        title: 'This is public todo 4',
        is_public: true,
        user: {
          name: 'someUser4',
        },
      },
    ])

    const loadMoreClicked = (): void => {
      console.log('aaa')
    }
    const loadOlderClicked = (): void => {
      console.log('bbb')
    }
    return {
      olderTodosAvailable,
      newTodosCount,
      limit,
      type,
      loadMoreClicked,
      loadOlderClicked,
      todos,
    }
  },
})
</script>
