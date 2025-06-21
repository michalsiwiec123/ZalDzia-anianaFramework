<template>
  <div style="text-align: center; margin-top: 20px;">
    <h1>Hello, Michał</h1>
    
    <button @click="simpleClick">Click!</button>

    <h2>Hello</h2>

    <button @click="incrementCounter">Click + 1</button>
    <div>{{ counter }}</div>

    <input type="text" v-model="inputText" placeholder="text" />
    <div><strong>{{ inputText }}</strong></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 3,
      inputText: 'text',
    };
  },
  methods: {
    simpleClick() {
      console.log("Button clicked!");
    },
    incrementCounter() {
      this.counter += 1;
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px;
}
input {
  margin-top: 10px;
  padding: 5px;
}
</style>