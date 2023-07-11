<template>
    <div>
        <Header />
        <div class="wrapper">
            <div class="pageTitle">
                <h1>Shopping Cart</h1>
                <p>Home . Shopping Cart</p>

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
        };
    },
    components: {
        Header,
        Footer
    },
}
</script>
<style scoped>
.pageTitle {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    background-color: #ECF2FF;
}
</style>