<template>
    <main class="main-header">
    <header class="main-header__wrapper">
        <div class="main-header__top">
            <div class="main-header__left">
                <img src="static/images/logo.png" alt="Super Sport Logo"/>
            </div>

            <div class="main-header__right">
                <div class="main-header__phone">+45 22660077</div>
                <div class="main-header__mail">lorem@ipsum.com</div>
                <div class="main-header__cart">
                    <div class="main-header__cartinfo">$ 99.54 <button class="main-header__checkout">Checkout</button></div>
                </div>                
            </div>
    
        <nav class="main-nav" id="top-nav">
            <div class="main-nav__left">
                <router-link to="/">HOME</router-link>
                <router-link to="/">MEN</router-link>
                <router-link to="/">WOMEN</router-link>
                <router-link to="/">KIDS</router-link>
                <router-link to="/">SALE</router-link>
                <router-link to="/">ABOUT US</router-link>
                <router-link to="/contact">SUPPORT</router-link>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
                <div class="main-nav__right"><input class="main-nav__search" type="search" name="seacrh" value="Search..." /></div>
        </nav>
        </div>

    </header>
        </main>
</template>

<script>
function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
</script>
