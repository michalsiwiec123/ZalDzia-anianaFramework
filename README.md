## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
App.vue DLA Poszczególnych zadań:

ZAD 1 -Lista zakupów:
<template>
  <div id="app">
    <ShoppingList />
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ShoppingList
  }
}
</script>

<style>

</style>

ZAD 2 – Układ Strony
/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="container">
    <Header />
    <div class="main">
      <Content />
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/AppHeader2.vue'
import Sidebar from './components/AppSidebar.vue'
import Content from './components/AppContent.vue'
import Footer from './components/AppFooter.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  display: flex;
  flex: 1;
}
</style>
ZAD 3 – Stworzyć UI
ZAD 4 – v-if, v-for
ZAD 5  - Click +1 oraz dynamiczny text
ZAD 6 – obrazek, nickname oraz wiek
ZAD 7 - ODD/EVEN
App.vue DLA ZAD 5
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
ZAD 8 – Lista Uczniów
ZAD 9 – Portfolio



