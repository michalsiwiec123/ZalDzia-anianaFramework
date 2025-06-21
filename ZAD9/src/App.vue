<template>
  <div id="app">
    <AppHeader />

    <nav class="main-nav">
      <a :class="{ 'nav-active': currentView === 'home' }" @click="currentView = 'home'">Strona Główna</a>
      <span class="nav-divider">|</span>
      <a :class="{ 'nav-active': currentView === 'contact' }" @click="currentView = 'contact'">Kontakt</a>
    </nav>

    <main class="app-main-container">
      <AppMain v-if="currentView === 'home'" />
      <AppContact v-if="currentView === 'contact'" />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppContact,
    AppFooter
  },
  data() {
    return {
      currentView: 'home' 
    };
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif; 
  line-height: 1.6;
  color: #333;
  background-color: #f7f7f7; 
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}


.main-nav {
  background-color: #ffffff;
  padding: 15px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 30px; 
}

.main-nav a {
  font-weight: bold;
  color: #666; 
  text-decoration: none;
  padding: 8px 15px;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  font-size: 1.1em;
  border-bottom: 2px solid transparent; 
}

.main-nav a:hover {
  color: #333;
}

.main-nav a.nav-active {
  color: #4CAF50; 
  border-bottom: 2px solid #4CAF50;
}

.nav-divider {
  color: #ccc;
  margin: 0 5px;
}


.app-main-container {
  flex-grow: 1; 
  max-width: 1000px; 
  margin: 0 auto;
  padding: 0 20px; 
}
</style>
