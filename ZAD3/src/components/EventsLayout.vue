<template>
    <div style="background-color: #bfbfbd; padding: 20px; width: 400px; height: 500px;">
      <h2><strong>Events</strong></h2>
  
      <div>
        <p><strong>Button</strong></p>
        <button @click="handleClick">Click</button>
      </div>
  
      <div style="margin-top: 20px;">
        <p><strong>Double click + mouse move</strong></p>
        <div
          @dblclick="handleDoubleClick"
          @mousemove="handleMouseMove"
          style="width: 100px; height: 100px; background-color: orange;"
        ></div>
      </div>
  
      <div style="margin-top: 20px;">
        <p><strong>Input</strong></p>
        <input v-model="inputText" type="text" />
        <p>{{ inputText }}</p>
        <p><strong>{{ inputText }}</strong></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const inputText = ref('HelloGoodbye')
  
  const handleClick = () => {
    alert('Button clicked!')
  }
  
  const handleDoubleClick = () => {
    alert('Double clicked!')
  }
  
  const handleMouseMove = () => {
    console.log('Mouse moving over the box...')
  }
  </script>
  