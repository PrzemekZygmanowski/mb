import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';
import gsap from 'gsap';
import vuetify from './plugins/vuetify';

library.add(
  faBuildingColumns,
  faPhoneFlip,
  faUserTie,
  faCertificate,
  faDove,
  faShield
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.use(gsap);

Vue.config.productionTip = false;

new Vue({
  router,
  VueAwesomeSwiper,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
