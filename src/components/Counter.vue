<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
import { getters, actions } from '../store/counter'

export default {
  name: "Counter",
  computed: {
    ...getters
  },
  methods: {
    ...actions
  }
};
</script>

