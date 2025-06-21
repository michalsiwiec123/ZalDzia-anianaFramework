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