<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <!-- Brand Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="fa fa-leaf text-success me-2"></i>
          <span class="fw-bold">SAM1 Flower Shop</span>
        </router-link>
  
        <!-- Toggle button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fa fa-home me-1"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                <i class="fa fa-shopping-bag me-1"></i> Products/Shop
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">
                <i class="fa fa-images me-1"></i> Gallery
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">
                <i class="fa fa-search me-1"></i> Search
              </router-link>
            </li>
          </ul>
  
          <!-- Profile and Cart -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/user-panel" class="nav-link">
                <i class="fa fa-user me-1"></i> Profile
              </router-link>
            </li>
            <li class="nav-item position-relative">
              <router-link to="/cart" class="nav-link">
                <i class="fa fa-shopping-cart me-1"></i> Cart
                <!-- Notification badge for items in the cart -->
                <span class="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  3
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  header {
    padding: 1rem 0;
  }
  .nav-link {
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }
  .nav-link:hover {
    color: #28a745;
  }
  .navbar-brand {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .badge {
    font-size: 0.75rem;
    padding: 0.4em 0.5em;
  }
  </style>
  