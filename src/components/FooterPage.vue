<template>
    <div class="footer">
        <div class="leftContent">
            <h5>C H A M A</h5>
            <div style="display: flex; column-gap: 10px;">
                <input style="width: 70%;" class="form-control" type="search" placeholder="Enter Email Address">
                <button class="btn btn-danger">Sign Up</button>
            </div>
            <span>Contact Information</span>
            <span>U5, 555 Road, Khan Russey Keo, Phnom Penh, Cambodia</span>
        </div>
        <div class="midContent">
            <h5>Catagories</h5>
            <span>All Products</span>
            <span>Gaming Chairs</span>
            <span>Computer Desks</span>
            <span>Accessories</span>
        </div>
        <div class="midContent">
            <h5>Custom Care</h5>
            <span>FAQ</span>
            <span>Support</span>
            <span>Warranty</span>
            <span>Returns</span>
            <span>Orders Tracking</span>
        </div>
        <div class="rightContent">
            <h5>Pages</h5>
            <span>Blog</span>
            <span>Reviews</span>
            <span>Referral</span>
            <span>Resources</span>
            <span>Technology</span>
        </div>
    </div>
    <div class="btmContent">
        <span>©2023 - All Rights Reserved</span>
        <span>
            <a href="#"><img class="soMe" src="https://cdn-icons-png.flaticon.com/64/4138/4138166.png"></a>
            <a href="#"><img class="soMe" src="https://cdn-icons-png.flaticon.com/64/4138/4138164.png"></a>
            <a href="#"><img class="soMe" src="https://cdn-icons-png.flaticon.com/64/4138/4138168.png"></a>
        </span>
    </div>
</template>
<style scoped>
.footer {
    width: 100%;
    height: 400px;
    padding-top: 90px;
    background-color: #ECF2FF;
    display: flex;
    align-items: start;
    justify-content: center;
    column-gap: 50px;
    font-size: 16px;
}

.leftContent {
    width: 22%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.midContent {
    width: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.rightContent {
    width: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.btmContent {
    width: 100%;
    height: 60px;
    padding: 0 50px 0 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.soMe {
    width: 30px;
    height: 30px;
}
</style>
<script>
export default {
    name: 'Footer'
}
</script>