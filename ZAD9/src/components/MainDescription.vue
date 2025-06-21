<template>
  <section class="main-description-section">
    <h2>Portfolio</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
</template>

<script>
export default {
  name: 'MainDescription'
}
</script>

<style scoped>
.main-description-section {
  background-color: #ffffff; 
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  text-align: center;
}

.main-description-section h2 {
  color: #3f51b5; 
  font-size: 2.8em;
  margin-bottom: 25px;
  font-weight: 600;
}

.main-description-section p {
  color: #555;
  font-size: 1.15em;
  line-height: 1.9;
  margin: 0 auto 15px auto;
  max-width: 850px;
}
</style>
