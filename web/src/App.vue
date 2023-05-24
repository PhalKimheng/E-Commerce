<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
// import Index from "./views/Index.vue";
// import Checkout from "./views/CheckoutView.vue";
import Header from "./components/HeaderPage.vue";
import Footer from "./components/FooterPage.vue";
export default {
  data() {
    return {
      isCheckingOut: false,
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>