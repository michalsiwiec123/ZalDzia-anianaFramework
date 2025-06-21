<template>
    <div>
      <h2>Lista zakupów</h2>
      <input type="text" v-model="value" placeholder="Dodaj produkt" />
      <button @click="addItem">Dodaj</button>
  
      <ShoppingItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @toggle="toggleItem"
        @remove="removeItem"
      />
    </div>
  </template>
  
  <script>
  import ShoppingItem from './ShoppingItem.vue'
  
  export default {
    components: { ShoppingItem },
    data() {
      return {
        value: '',
        items: [],
        nextId: 1,
      }
    },
    methods: {
      addItem() {
        if (this.value.trim()) {
          this.items.push({ id: this.nextId++, name: this.value, bought: false })
          this.value = ''
        }
      },
      toggleItem(id) {
        const item = this.items.find((i) => i.id === id)
        if (item) item.bought = !item.bought
      },
      removeItem(id) {
        this.items = this.items.filter((i) => i.id !== id)
      },
    },
  }
  </script>
  
  <style scoped>
  input {
    margin: 10px;
  }
  </style>
  