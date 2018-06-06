<template>
<div class="productdetail">
<!-- Left Section START -->
  <div class="productdetail__left">
    <div class="productdetail__lrg-img">
      <img v-bind:src="product.big_image_url" alt="Big image"/>
    </div>

    <div class="productdetail__sml-img">
      <div class="productdetail__img-preview"><img v-bind:src="product.image_url1" alt="Image1"/></div>
      <div class="productdetail__img-preview--selected"><img v-bind:src="product.image_url2" alt="Image2"/></div>
      <div class="productdetail__img-preview"><img v-bind:src="product.image_url3" alt="Image3"/></div>
    </div>
  </div>
<!-- Left Section END -->

<!-- Right Section START -->
  <div class="productdetail__right">
    <h2 class="productdetail__head">{{ product.title }}</h2>

    <div class="productdetail__info-wrapper">
      <div class="productdetail__brandlogo">
        <img v-bind:src="product.brand_logo"/>
      </div>
      
      <div class="productdetail__price">
        <h2 class="productdetail__actual-price">$ {{ product.new_price }}</h2>
        <h3 class="productdetail__old-price">$ {{ product.price }}</h3>
        <h4 class="productdetail__percent">You save 15.00%</h4> 
      </div>
    </div>

    <div class="productdetail__specs">
      <div class="productdetail__specs-left">
      <label class="productdetail__label" for="productSize">Size</label>      
      <select class="productdetail__size">
        <option value="1">EU 45 Black</option>
        <option value="2">Test Size 1</option>
        <option value="3">Test Size 2</option>
        <option value="4">Test Size 3</option>
      </select>
      </div>

      <div class="productdetail__specs-right">
      <label class="productdetail__label" for="productQt">Amount</label>
      <input class="productdetail__qt" type="text" value="1" />
      </div>

      <div class="productdetail__buy">
        <button class="productdetail__btn">Buy now</button>
      </div>
    </div>
  </div>
<!-- Right Section END -->


<!-- Right Detail Section START END -->
  <div class="productdetail__info">
    <tabs>
      <tab name="Description">
        <p class="productdetail__txt-left">Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër.<br /><br /> Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave 'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit me aplikacione publikimi si Aldus PageMaker që përmbajnë versione të Lorem Ipsum.</p>
        <p class="productdetail__txt-right">Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër.<br /><br /> Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave 'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit me aplikacione publikimi si Aldus PageMaker që përmbajnë versione të Lorem Ipsum.</p>
      </tab>
      <tab name="Shipping">
        <p class="productdetail__txt-left">Everything you need to know about Shipping!</p>
        <p class="productdetail__txt-right">Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër.<br /><br /> Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave 'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit me aplikacione publikimi si Aldus PageMaker që përmbajnë versione të Lorem Ipsum.</p>
      </tab>
      <tab name="Sizing">
        <p class="productdetail__txt-right">Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër.<br /><br /> Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin elektronik, duke ndenjur në thelb i pandryshuar. U bë i njohur në vitet 1960 me lëshimin e letrave 'Letraset' që përmbanin tekstin Lorem Ipsum, e në kohët e fundit me aplikacione publikimi si Aldus PageMaker që përmbajnë versione të Lorem Ipsum.</p>
        <p class="productdetail__txt-left">Everything you need to know about Sizing!</p>        
      </tab>
    </tabs>
  </div>
<!-- Right Detail Section END -->
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "product-detail",
  data: function() {
    return {
      product: ""
    };
  },
  created: function() {
    this.getProductById();
  },
  watch: {
    $route(to, from) {
      this.getProductById();
    }
  },
  methods: {
    getProductById: function() {
      let id = this.$route.params.id;
      axios
        .get("/static/products.json")
        .then(response => {
          this.product = response.data.filter(product => product.id == id)[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>