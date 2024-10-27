import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Router
import router from './router'; // Import your router

// Import Bootstrap Bundle (for JS components like modals, dropdowns)
import 'bootstrap';

createApp(App)
  .use(router) // Add the router
  .mount('#app');
