
import { createRouter, createWebHistory } from 'vue-router';
import AppHomePage from '../components/AppHomePage.vue';
import AppContact from '../components/AppContact.vue';

const routes = [
  { path: '/', component: AppHomePage },
  { path: '/contact', component: AppContact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
