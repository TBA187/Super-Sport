<template>
<main>
  
<!-- Frontpage Image START 
<div class="main-header__slider"></div>
-->
 <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide>
      <div class="slide">
        <div class="slide__bg">
          <div class="slide__box">
            <div class="slide__boxitems">
            <h3 class="slide__header">Right is pink.</h3>
            <h3 class="slide__header">Left is blue</h3>
            <p class="slide__txt">Inspired by Brasil's bold colors and matching up to football's on-pitch playmakers, these kick are ready to stand out.</p>
            <button class="slide__btn">Shop Brasil</button>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="slide">
        <div class="slide__bg">
          <div class="slide__box">
            <div class="slide__boxitems">
            <h3 class="slide__header">Right is pink.</h3>
            <h3 class="slide__header">Left is blue</h3>
            <p class="slide__txt">Inspired by Brasil's bold colors and matching up to football's on-pitch playmakers, these kick are ready to stand out.</p>
            <button class="slide__btn">Shop Brasil</button>
            </div>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
<!-- Frontpage Image START -->

<!-- Frontpage Categories START -->
<section class="frontpage-cats">
  <div class="frontpage-cats__item">
    <div class="frontpage-cats__img">
        <img src="static/images/shoes.jpg" alt="Super Sport Shoes"/>
    </div>
    <h2 class="frontpage-cats__title">Football shoes</h2>
    <p class="frontpage-cats__info">Lorem Ipsum er ganske enkelt fyldtekst fra printindustrien. Standard fyldtekst siden 1500</p>
  </div>

  <div class="frontpage-cats__item">
    <div class="frontpage-cats__img">
        <img src="static/images/clothes.jpg" alt="Super Sport Clothes"/>
    </div>
    <h2 class="frontpage-cats__title">Morden clothes</h2>
    <p class="frontpage-cats__info">Lorem Ipsum er ganske enkelt fyldtekst fra printindustrien. Standard fyldtekst siden 1500</p>
  </div>

  <div class="frontpage-cats__item">
    <div class="frontpage-cats__img">
        <img src="static/images/bag.jpg" alt="Super Sport Bag"/>
    </div>
    <h2 class="frontpage-cats__title">Bags & accesories</h2>
    <p class="frontpage-cats__info">Lorem Ipsum er ganske enkelt fyldtekst fra printindustrien. Standard fyldtekst siden 1500</p>
 </div>
</section>
<!-- Frontpage Categories END -->

  <!-- Products Section START -->
<section class="frontpage-products">
  <div class="frontpage-products__header">
    <img src="static/images/popular-products.png" />
    </div>

    <div class="frontpage-products__product" v-for="product in products" :key="product.id">
    <div class="frontpage-products__img">
      <img class="frontpage-products__pro-rating" v-bind:src="product.rating"/>
      <img class="frontpage-products__pro-img" v-bind:src="product.image_url"/>
    </div>

    <div class="frontpage-products__info">
      <div class="frontpage-products__title"><h3>{{ product.title }}</h3></div>
      <div class="frontpage-products__cat">{{ product.category }}</div>
      <div class="frontpage-products__desc">{{ product.description }}</div>
      <div class="frontpage-products__xtra">
        <div class="frontpage-products__price">$ {{ product.new_price }}</div>
        <div class="frontpage-products__bookmark">
          <img src="static/images/heart.png" />
          <img src="static/images/add.png" />          
        </div>
      </div>
    </div>
    <router-link class="frontpage-products__btn" :to="/productpage/ + product.id">Buy now</router-link>
  </div>
</section>
<!-- Products Section END -->
</main>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  name: "Frontpage",
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function() {
      axios
        .get("/static/products.json")
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>