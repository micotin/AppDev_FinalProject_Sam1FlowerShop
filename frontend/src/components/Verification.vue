<template>
    <div class="verification-page d-flex flex-column justify-content-center align-items-center">
      <h2>Email Verification</h2>
      <p>Please check your email and click on the verification link to activate your account.</p>
      <p class="text-danger">{{ message }}</p>
      <button 
        :disabled="!isVerified" 
        class="btn btn-primary mt-3" 
        @click="goToLogin"
      >
        Go to Login
      </button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getAuth } from "firebase/auth";
  import { getFirestore, doc, updateDoc } from "firebase/firestore";
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const auth = getAuth();
      const db = getFirestore();
      const router = useRouter();
  
      const message = ref('');
      const isVerified = ref(false);
  
      const checkVerificationStatus = async () => {
        const user = auth.currentUser;
  
        if (user) {
          await user.reload();
          if (user.emailVerified) {
            isVerified.value = true;
            message.value = "Your email has been verified! You can now log in.";
  
            // Update Firestore to set verified status to true
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, { verified: true });
          } else {
            message.value = "Your email is not verified yet. Please check your inbox.";
          }
        } else {
          message.value = "No user found. Please sign up again.";
        }
      };
  
      const goToLogin = () => {
        router.push('/login');
      };
  
      const pollVerificationStatus = () => {
        const intervalId = setInterval(() => {
          checkVerificationStatus();
          if (isVerified.value) {
            clearInterval(intervalId);
          }
        }, 3000); // Check every 3 seconds
      };
  
      onMounted(() => {
        checkVerificationStatus();
        pollVerificationStatus();
      });
  
      return {
        message,
        isVerified,
        goToLogin
      };
    }
  };
  </script>
  
  <style scoped>
  .verification-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('/path-to-your-flower-background.jpg') center/cover no-repeat;
    color: #333;
  }
  </style>
  