<template>
  <div style="width: 300px; margin: 20px auto;">
    <div v-for="(user, index) in users" :key="index" style="display: flex; align-items: center; margin-bottom: 15px;">
      <img :src="catImage" alt="cat" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px;" />
      <span>{{ user.name }} - {{ user.value }}</span>
    </div>
  </div>
</template>

<script>
import catImage from './assets/cat.jpg'; 

export default {
  name: 'App',
  data() {
    return {
      catImage, 
      users: [
        { name: 'user1', value: 12 },
        { name: 'user2', value: 15 },
        { name: 'user4', value: 11 },
        { name: 'user5', value: 19 },
        { name: 'user6', value: 25 },
        { name: 'user7', value: 36 },
        { name: 'user8', value: 90 },
        { name: 'user9', value: 57 },
      ],
    };
  },
};
</script>
