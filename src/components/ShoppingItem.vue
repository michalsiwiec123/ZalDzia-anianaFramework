<template>
    <div class="element">
      <input type="checkbox" :checked="item.bought" @change="emitToggle" />
      <span>{{ item.name }}</span>
      <button @click="emitRemove">🗑</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      emitToggle() {
        this.$emit('toggle', this.item.id);
      },
      emitRemove() {
        this.$emit('remove', this.item.id);
      }
    }
  };
  </script>
  
  
  <style scoped>
  .item {
    margin: 5px;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bought span {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  