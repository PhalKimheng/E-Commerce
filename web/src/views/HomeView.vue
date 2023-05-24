<template>
  <div>
    <div class="body1">
      <div class="box1">
        <div class="child1">
          <img id="lampImg" src="@/assets/images/lamp.png">
        </div>
        <div class="child2">
          <p style="font-weight: 500; color: #d9534f">Best Gaming Chair For Productivity...</p>
          <h1 style="font-weight: 700;">New Chair Collection </h1>
          <h1 style="font-weight: 700;">Trends in 2023</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos facere molestias itaque numquam accusamus,
            eveniet tenetur nisi eius ullam delectus.</p>
          <button
            style="font-weight: 500; padding: 12px; padding-left: 30px; padding-right: 30px; color: white; background-color:#EB455F; border-radius: 10px;"
            type="button">Shop Now</button>
        </div>
      </div>
      <div class="box2" v-for="row in productRows" :key="row[0]">
        <span
          style="width: 50%; height: 75%; display: flex; align-items: center; background-color: #FFD6EC; border-radius: 100%;">
          <img v-for="product in row" :key="product" style="margin-left: 25px;" id="chairOne" :src="product.pictureUrl"
            alt="chairOne">
        </span>
      </div>
    </div>
    <div class="body2">
      <h2 style="color: #144272">Featured Products</h2>
      <div class="featuredProducts">
        <div class="item">
          <img id="chairTwo" src="@/assets/images/chairTwo.png">
          <h5 style="color: #00235B">SecretLab TITAN Evo</h5>
          <img id="dashImg" src="@/assets/images/dashes.png">
          <span style="color: #00235B">Code - Y523201</span>
          <span style="color: #d9534f">$ 542.00</span>
        </div>
        <div class="item">
          <img id="chairTwo" src="@/assets/images/chairTwo.png">
          <h5 style="color: #00235B">SecretLab TITAN Evo</h5>
          <img id="dashImg" src="@/assets/images/dashes.png">
          <span style="color: #00235B">Code - Y523201</span>
          <span style="color: #d9534f">$ 542.00</span>
        </div>
        <div class="item">
          <img id="chairTwo" src="@/assets/images/chairTwo.png">
          <h5 style="color: #00235B">SecretLab TITAN Evo</h5>
          <img id="dashImg" src="@/assets/images/dashes.png">
          <span style="color: #00235B">Code - Y523201</span>
          <span style="color: #d9534f">$ 542.00</span>
        </div>
        <div class="item">
          <img id="chairTwo" src="@/assets/images/chairTwo.png">
          <h5 style="color: #00235B">SecretLab TITAN Evo</h5>
          <img id="dashImg" src="@/assets/images/dashes.png">
          <span style="color: #00235B">Code - Y523201</span>
          <span style="color: #d9534f">$ 542.00</span>
        </div>
      </div>
      <h2 style="color: #144272">Latest Products</h2>
      <ul class="listLatestProducts">
        <li><a class="anchor anchor1" href="#">New Arrival</a></li>
        <li><a class="anchor" href="#">Best Seller</a></li>
        <li><a class="anchor" href="#">Featured</a></li>
        <li><a class="anchor" href="#">Special Offer</a></li>
      </ul>
      <div class="latestProducts">
        <div class="latestPro">
          <img id="chairThree" src="@/assets/images/chairThree.png">
          <div style="width: 100%; display: flex; justify-content: space-between;">
            <span style="color: #00235B">SecretLab TITAN Evo</span>
            <span style="color: #d9534f">$ 542.00</span>
          </div>
        </div>
        <div class="latestPro">
          <img id="chairThree" src="@/assets/images/chairThree.png">
          <div style="width: 100%; display: flex; justify-content: space-between;">
            <span style="color: #00235B">SecretLab TITAN Evo</span>
            <span style="color: #d9534f">$ 542.00</span>
          </div>
        </div>
        <div class="latestPro">
          <img id="chairThree" src="@/assets/images/chairThree.png">
          <div style="width: 100%; display: flex; justify-content: space-between;">
            <span style="color: #00235B">SecretLab TITAN Evo</span>
            <span style="color: #d9534f">$ 542.00</span>
          </div>
        </div>
      </div>
      <div class="reviewer">
        <div class="rev">
          <img id="techradar" src="@/assets/images/techradar.png">
          <h5 style="color: #F2CD5C">BEST IN CLASS AWARD</h5>
          <p>"It's the <strong>most comfortable chair</strong> we've ever used."</p>
        </div>
        <div class="rev">
          <img id="rate2" src="@/assets/images/forbes.png">
          <p>"an amazing gaming chair, providing <strong>sublime fabric comfort, a slick aesthetic</strong> and excellent
            back support."</p>
        </div>
        <div class="rev">
          <img id="rate3" src="@/assets/images/kotaku.png">
          <p>"Between the Titan’s ergonomic design and the built-in adjustable lumbar support,<strong>my back has never
              been
              happier</strong> than it has over the past month."</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';
export default {
  name: 'Shopping-item',

  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8081/');
        products.value = response.data;
      } catch (err) {
        console.error(err);
      }
    });

    const productRows = computed(() => {
      const rows = [];
      for (let i = 0; i < products.value.length; i += 1) {
        rows.push(products.value.slice(i, i + 1));
      }
      return rows;
    });

    return { productRows };
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

#chairTwo {
  width: 160px;
  height: 200px;
}

#chairThree {
  width: 230px;
  height: 260px;
}

#dashImg {
  width: 60px;
  height: 60px;
}

#techradar {
  width: 180px;
  height: 40px;
  margin-bottom: 10px;
}

#rate2 {
  width: 150px;
  height: 40px;
  margin-bottom: 10px;
}

#rate3 {
  width: 180px;
  height: 40px;
  margin-bottom: 10px;
}

.body1 {
  width: 100%;
  height: 600px;
  background-color: #ECF2FF;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

}

.body2 {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.featuredProducts {
  margin-top: 30px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  column-gap: 50px;
}

.listLatestProducts {
  margin-top: 10px;
  display: flex;
  column-gap: 40px;
  list-style-type: none;
  font-size: 18px;
}

.latestProducts {
  display: flex;
  column-gap: 50px;
}

.latestPro {
  width: 300px;
  height: 360px;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.latestPro {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.reviewer {
  width: 100%;
  height: 150px;
  padding-top: 10px;
  margin-top: 100px;
  margin-bottom: 60px;
  display: flex;
  align-items: start;
  justify-content: center;
  column-gap: 140px;
}

.rev {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
}

.anchor {
  text-decoration: none;
  color: black;
}

.anchor1 {
  color: #d9534f;
  text-decoration: underline;
}

.item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box1 {
  width: 40%;
  display: flex;
  flex-direction: row;
}

.box2 {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.child2 {
  margin-top: 150px;
  margin-left: 30px;
}
</style>
