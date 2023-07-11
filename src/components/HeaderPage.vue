<template>
    <header>
        <div class="wrapper">
            <nav class="py-2 px-5 bg-primary bg-opacity-75 d-flex justify-content-between align-items-center">
                <div class="px-3 d-flex justify-content-between align-items-center">
                    <img class="icon" src="@/assets/images/mail.png">
                    <span>phalkimheng555@gmail.com</span>
                    <img class="icon" src="@/assets/images/phone.png">
                    <span>+(855) 11 540 714</span>
                </div>
                <div class="px-3 d-flex justify-content-between align-items-center">
                    <span>English</span>
                    <img class="icon" src="@/assets/images/down.png">
                    <span>USD</span>
                    <img class="icon" src="@/assets/images/down.png">
                    <router-link :to="{ path: '/login' }">
                        <span>Login</span>
                        <img class="icon" src="@/assets/images/user.png">
                    </router-link>
                    <router-link :to="{ path: '/wishlist' }">
                        <span>Wishlist</span>
                        <img class="icon" src="@/assets/images/love.png">
                    </router-link>
                    <router-link :to="{ path: '/cart' }">
                        <img id="cartIcon" src="@/assets/images/cart.png">
                    </router-link>

                </div>
            </nav>
            <nav class="navbar navbar-expand-lg py-3 px-5">
                <div class="container-fluid">
                    <router-link :to="{ path: '/' }">
                        <a class="navbar-brand fw-bolder" href="#">C H A M A</a>
                    </router-link>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <router-link :to="{ path: '/' }">
                                    <a class="nav-link text-danger" aria-current="page" href="#">Home</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ path: '/product' }">
                                    <a class="nav-link" href="#">Products</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ path: '/blog' }">
                                    <a class="nav-link" href="#">Blog</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ path: '/shop' }">
                                    <a class="nav-link" href="#">Shop</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ path: '/contact' }">
                                    <a class="nav-link" href="#">Contact</a>
                                </router-link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-danger"><img id="searchIcon" src="@/assets/images/search.png"
                                    alt="search"></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>

export default {
    data() {
        return {
            // isLoginPopupVisible: false,
        }
    },
    methods: {
        showLoginPopup() {
            this.isLoginPopupVisible = true;
        },
    },
    components: {
        // LoginPopup
    }
}
</script>
<style scoped>
#lampImg {
    width: 140px;
    height: 260px;
    margin-left: 10px;
}

#chairOne {
    width: 380px;
    height: 380px;
}

#cartIcon {
    width: 21px;
    height: 21px;
    margin-left: 20px;
}

#searchIcon {
    width: 30px;
    height: 30px;
}

.wrapper {
    font-size: 16px;
}

.icon {
    width: 20px;
    height: 20px;
}

span {
    color: white;
    margin-left: 5px;
    margin-right: 5px;
}

a {
    text-decoration: none;
}
</style>