<template>
    <div class="state-block">
      <h1 class="state-title">State</h1>
      <button @click="changeState">This button change state</button>
      <div class="parity">{{ parity }}</div>
      <div class="counter">{{ counter }}</div>
  
      <textarea v-model="comment" class="comment-box" rows="3"></textarea>
      <br />
      <button @click="addComment" class="comment-btn">Add comment</button>
  
      <ul v-if="comments.length">
        <li v-for="(c, i) in comments" :key="i">{{ c }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
        comment: '',
        comments: []
      }
    },
    computed: {
      parity() {
        return this.counter % 2 === 0 ? 'even' : 'odd'
      }
    },
    methods: {
      changeState() {
        this.counter++
      },
      addComment() {
        const trimmed = this.comment.trim()
        if (trimmed) {
          this.comments.push(trimmed)
          this.comment = ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .state-block {
    max-width: 300px;
    margin-bottom: 40px;
  }
  
  .state-title {
    font-weight: bold;
    font-size: 28px;
  }
  
  button {
    margin: 5px 0;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
  }
  
  .parity,
  .counter {
    margin: 5px 0;
    font-size: 18px;
  }
  
  .comment-box {
    width: 100%;
    resize: vertical;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid #aaa;
  }
  
  .comment-btn {
    margin-top: 5px;
  }
  
  ul {
    margin-top: 10px;
    padding-left: 20px;
  }
  </style>
  