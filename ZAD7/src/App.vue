<template>
  <div class="app">
    <StateBlock />
    <hr />
    <StateBlock />
  </div>
</template>

<script>
import StateBlock from './components/StateBlock.vue'

export default {
  components: { StateBlock }
}
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

hr {
  margin: 40px 0;
  border: 1px solid gray;
}
</style>