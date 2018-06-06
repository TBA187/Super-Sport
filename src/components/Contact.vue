<template>
<div class="contact">
    <form class="contact__form" action="#/contact" method="GET">
    <h1 class="contact__header">Contact Us</h1>
        
        <div class="contact__wrapper">
        <div class="contact__label-wrapper"><label for="name">Name:</label></div>
        <div class="contact__input-wrapper"><input class="contact__input" v-validate="'required'" type="text" name="name" placeholder="YOUR NAME..."></div>
        <div class="contact__error-wrapper"><span v-show="errors.has('name')">{{ errors.first('name') }}</span></div>     
        </div>

        <div class="contact__wrapper">
        <div class="contact__label-wrapper"><label for="email">Email:</label></div>
        <div class="contact__input-wrapper"><input class="contact__input" v-validate="'required|email'" type="text" name="email" placeholder="YOUR EMAIL..."></div>
        <div class="contact__error-wrapper"><span v-show="errors.has('email')">{{ errors.first('email') }}</span></div>
        </div>

        <div class="contact__wrapper">
        <div class="contact__label-wrapper--msg"><label for="message">Message:</label></div>
        <div class="contact__input-wrapper"><textarea class="contact__txtarea" v-validate="'required'" name="message" placeholder="YOUR TEXT..."></textarea></div>
        <div class="contact__error-wrapper"><span v-show="errors.has('message')">{{ errors.first('message') }}</span></div>
        </div>

        <div class="contact__btn-wrapper"><button onclick="return confirm('Are you sure?');" class="contact__btn">Send message</button></div>
    </form>
</div>
</template>

