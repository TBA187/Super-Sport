import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
import Productpage from '@/components/Productpage'
import Contact from '@/components/Contact'
import {Tabs, Tab} from 'vue-tabs-component'
import VeeValidate from 'vee-validate'
import VueCarousel from 'vue-carousel';

Vue.use(Router)
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(VeeValidate);
Vue.use(VueCarousel);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/productpage/:id',
      name: 'Productpage',
      component: Productpage
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    }
  ]
})