import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const projects = ref(7);
  const tasks = ref(49);
  const assignedTasks = ref(412);
  const comTasks = ref(3);
  const overdueTasks = ref(9);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, projects, tasks, assignedTasks, comTasks, overdueTasks, doubleCount, increment }
})
