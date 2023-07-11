<template>
    <Header />
    <div class="wrapper">
        <div class="pageTitle">
            <h1>Blog</h1>
            <p>Home . Blog</p>

        </div>
    </div>
    <Footer />
</template>
<script>
import Header from '../components/HeaderPage.vue'
import Footer from '../components/FooterPage.vue'
export default {
    name: 'BlogView',
    components: {
        Header,
        Footer
    }
}
</script>