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
      currentView: 'home' // Domyślny widok to 'home'
    };
  }
}
</script>

<style>
/* Resetowanie podstawowych stylów */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif; /* Typowa czcionka sans-serif */
  line-height: 1.6;
  color: #333;
  background-color: #f7f7f7; /* Jasne, neutralne tło */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Aplikacja zajmuje całą wysokość widoku */
}

/* --- Nawigacja --- */
.main-nav {
  background-color: #ffffff;
  padding: 15px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 30px; /* Większy odstęp od sekcji głównej */
}

.main-nav a {
  font-weight: bold;
  color: #666; /* Szary kolor dla nieaktywnych linków */
  text-decoration: none;
  padding: 8px 15px;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  font-size: 1.1em;
  border-bottom: 2px solid transparent; /* Przezroczyste podkreślenie */
}

.main-nav a:hover {
  color: #333;
}

.main-nav a.nav-active {
  color: #4CAF50; /* Zgadywany zielony z obrazka */
  border-bottom: 2px solid #4CAF50;
}

.nav-divider {
  color: #ccc;
  margin: 0 5px;
}

/* --- Główny kontener na treść --- */
.app-main-container {
  flex-grow: 1; /* Pozwala głównej zawartości rozciągać się i spychać stopkę na dół */
  max-width: 1000px; /* Maksymalna szerokość zawartości */
  margin: 0 auto;
  padding: 0 20px; /* Padding po bokach */
}
</style>
