<template>
  <header class="app-header">
    <div class="header-content">
      <h1>Moje Portfolio</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background-color: #3f51b5; 
  color: white;
  padding: 45px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.header-content {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  margin: 0;
  font-size: 3.8em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700; 
}

.tagline {
  margin: 15px 0 0;
  font-size: 1.4em;
  font-style: italic;
  opacity: 0.9;
  font-weight: 300; 
}
</style>
