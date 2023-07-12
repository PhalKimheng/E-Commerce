<template>
    <div>
        <Header />

        <div class="pageTitle py-2 px-5 d-flex flex-column justify-content-between align-items-start">
            <h1>Sign Up</h1>
            <p>Home . Pages . Sign Up</p>
        </div>
        <div class="signupForm">
            <div class="w-25">
                <form>
                    <!-- Name input -->
                    <h3 class="mb-4">Sign up</h3>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerName">Name</label>
                        <input type="text" id="registerName" class="form-control" />
                    </div>

                    <!-- Username input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerUsername">Username</label>
                        <input type="text" id="registerUsername" class="form-control" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerEmail">Email</label>
                        <input type="email" id="registerEmail" class="form-control" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerPassword">Password</label>
                        <input type="password" id="registerPassword" class="form-control" />
                    </div>

                    <!-- Repeat Password input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                        <input type="password" id="registerRepeatPassword" class="form-control" />
                    </div>

                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                            aria-describedby="registerCheckHelpText" />
                        <label class="form-check-label" for="registerCheck">
                            I have read and agree to the <strong>Terms & Conditions</strong>
                        </label>
                    </div>

                    <!-- Submit button -->
                    <div class="w-100 d-flex justify-content-center">
                        <button type="submit" class="w-50 btn btn-danger btn-block mb-2">Sign Up</button>
                    </div>
                    <div class="text-center">
                        <p>Already has an account?
                            <router-link :to="{ path: '/login' }">
                                <a href="">Login here</a>
                            </router-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <!-- Pills content -->
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

    .signupForm {
        width: full;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>
    