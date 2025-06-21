<template>
  <main class="app-main-content">
    <MainDescription />
    <MainProjects />
  </main>
</template>

<script>
import MainDescription from './MainDescription.vue';
import MainProjects from './MainProjects.vue';

export default {
  name: 'AppMain',
  components: {
    MainDescription,
    MainProjects
  }
}
</script>

<style scoped>
.app-main-content {
  /* Style już w globalnym .app-main-container w App.vue */
}
</style>