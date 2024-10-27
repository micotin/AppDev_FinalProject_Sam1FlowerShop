<template>
    <div class="user-home">
        <Header />
      <!-- Hero Section -->
      <section class="hero-section text-center text-white py-5">
        <div class="container">
          <h1 class="display-4 fw-bold mb-4">Welcome to SAM1 Flower Shop</h1>
          <p class="lead mb-4">Bringing beauty and fragrance to every moment of your life</p>
          <router-link to="/shop" class="btn btn-lg btn-outline-light">Shop Now</router-link>
        </div>
      </section>
  
      <!-- Featured Arrangements Section -->
      <section class="featured-arrangements py-5">
        <div class="container">
          <h2 class="text-center mb-5"><i class="bi bi-flower1 me-2"></i>Featured Arrangements</h2>
          <div class="row g-4">
            <div 
              v-for="product in featuredProducts" 
              :key="product.id" 
              class="col-md-4 d-flex align-items-stretch"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-img-wrapper">
                  <img :src="product.imageUrl" :alt="product.name" class="card-img-top" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <span class="badge bg-primary rounded-pill mb-2">{{ product.category }}</span>
                  </div>
                </div>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text flex-grow-1">{{ product.description }}</p>
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <h6 class="mb-0">₱{{ product.price.toFixed(2) }}</h6>
                    <button class="btn btn-outline-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Section -->
      <section class="services-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Our Services</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="service-card text-center p-4 bg-white rounded shadow-sm">
                <i class="bi bi-gift display-4 text-primary mb-3"></i>
                <h5>Custom Arrangements</h5>
                <p>Create your perfect bouquet for any occasion</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-card text-center p-4 bg-white rounded shadow-sm">
                <i class="bi bi-truck display-4 text-primary mb-3"></i>
                <h5>Same-Day Delivery</h5>
                <p>Fast and reliable delivery to your doorstep</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-card text-center p-4 bg-white rounded shadow-sm">
                <i class="bi bi-calendar-event display-4 text-primary mb-3"></i>
                <h5>Event Floristry</h5>
                <p>Beautiful floral designs for your special events</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Navigation Menu -->
      <nav class="user-nav text-center py-5">
        <div class="container">
          <h2 class="mb-4">Explore More</h2>
          <div class="row g-3 justify-content-center">
            <div class="col-md-3 col-sm-6">
              <router-link to="/shop" class="btn btn-primary w-100">
                <i class="bi bi-shop me-2"></i>Shop All
              </router-link>
            </div>
            <div class="col-md-3 col-sm-6">
              <router-link to="/about" class="btn btn-primary w-100">
                <i class="bi bi-info-circle me-2"></i>About Us
              </router-link>
            </div>
            <div class="col-md-3 col-sm-6">
              <router-link to="/contact" class="btn btn-primary w-100">
                <i class="bi bi-envelope me-2"></i>Contact Us
              </router-link>
            </div>
            <div class="col-md-3 col-sm-6">
              <router-link to="/faq" class="btn btn-primary w-100">
                <i class="bi bi-question-circle me-2"></i>FAQ
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebaseConfig';
  import { collection, getDocs, query, where, limit } from 'firebase/firestore';
  import Header from './Header.vue';
  
  export default {
    name: 'UserHome',
    components: {
      Header,
    },
    setup() {
      const featuredProducts = ref([]);
  
      const fetchFeaturedProducts = async () => {
        const productsRef = collection(db, 'products');
        const featuredQuery = query(productsRef, where('featured', '==', true), limit(3));
        const querySnapshot = await getDocs(featuredQuery);
        featuredProducts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      };
  
      onMounted(fetchFeaturedProducts);
  
      return {
        featuredProducts,
      };
    },
  };
  </script>  
  
  <style scoped>
  .user-home {
    font-family: 'Poppins', sans-serif;
  }
  
  .hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/flower-hero-bg.jpg') no-repeat center center;
    background-size: cover;
    padding: 100px 0;
  }
  
  .hero-section h1 {
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .featured-arrangements h2,
  .services-section h2,
  .user-nav h2 {
    color: #4a0e4e;
    font-weight: 600;
  }
  
  .card {
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img-wrapper {
    position: relative;
    overflow: hidden;
  }
  
  .card-img-top {
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover .card-img-top {
    transform: scale(1.05);
  }
  
  .card-img-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
  
  .badge {
    font-size: 0.8rem;
    padding: 0.5em 1em;
  }
  
  .btn-primary,
  .btn-outline-primary {
    background-color: #4a0e4e;
    border-color: #4a0e4e;
    color: #ffffff;
  }
  
  .btn-primary:hover,
  .btn-outline-primary:hover {
    background-color: #3a0b3e;
    border-color: #3a0b3e;
  }
  
  .btn-outline-primary {
    background-color: transparent;
    color: #4a0e4e;
  }
  
  .service-card {
    transition: transform 0.3s ease-in-out;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
  }
  
  .user-nav .btn {
    transition: all 0.3s ease-in-out;
  }
  
  .user-nav .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>