<template>
    <div>
      <Header/>
      <div class="wrapper">
        <div class="pageTitle">
            <h1>Login</h1>
            <p>Home . </p>

        </div>
    </div>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Header from '../components/HeaderPage.vue'
  import Footer from '../components/FooterPage.vue'
  export default {
    data() {
      return {
      };
    },
    components: {
      Header,
      Footer
    },
  }
  </script>
  <style>
  @media (min-width: 1024px) {
    .product {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  