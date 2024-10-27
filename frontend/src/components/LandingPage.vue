<template>
    <div class="landing-page d-flex flex-column justify-content-center align-items-center">
      <h1 class="display-4 text-center mb-4">Welcome to Blossom Flower Shop</h1>
      <p class="lead text-center mb-5">From Petals to Pixels, we bring the beauty of flowers to your doorstep.</p>
      <div class="d-flex gap-3">
        <router-link to="/login" class="btn btn-primary btn-lg">Login</router-link>
        <router-link to="/signup" class="btn btn-outline-primary btn-lg">Sign Up</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  .landing-page {
    height: 100vh;
    background: url('/path-to-your-flower-background.jpg') center/cover no-repeat;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .btn-lg {
    padding: 10px 20px;
    font-size: 1.25rem;
  }
  
  .lead {
    font-size: 1.5rem;
  }
  
  .display-4 {
    font-size: 3rem;
  }
  </style>
  