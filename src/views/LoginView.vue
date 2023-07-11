<template>
  <div>
    <Header />

    <div class="pageTitle py-2 px-5 d-flex flex-column justify-content-between align-items-start">
      <h1>Login</h1>
      <p>Home . Pages . Login</p>
    </div>
    <div class="loginForm">
      <div class="w-25">
        <form>
          <!-- Email input -->
          <h3 class="mb-4">Login</h3>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" v-model="email" id="form2Example1" class="form-control" required />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" v-model="password" id="form2Example2" class="form-control" required />
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>

            <div class="col">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <div class="w-100 d-flex justify-content-center">
            <button type="submit" class="w-50 btn btn-danger btn-block mb-4">Sign In</button>
          </div>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Don't have an account? <a href="#!">Create account</a></p>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Header from '../components/HeaderPage.vue'
import Footer from '../components/FooterPage.vue'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {

    }
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

  h3 {
    text-align: center;
  }

  .pageTitle {
    background-color: #ECF2FF;
    padding-inline: 470;
  }

  .loginForm {
    width: full;
    height: 66vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
  