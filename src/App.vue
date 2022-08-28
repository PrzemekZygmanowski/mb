<template>
  <v-app v-resize="onResize">
    <v-main class="pa-0 ma-0">
      <Menu v-show="!isMobile"></Menu>
      <MobileMenu v-show="isMobile"></MobileMenu>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';
import MobileMenu from '@/components/Mobile-Menu.vue';
import Footer from '@/components/Footer.vue';
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  components: { Menu, MobileMenu, Footer },
  mixins: [breakPointMixin],
  name: 'App',
  computed: {
    function() {
      return this.isMobile();
    },
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
  transform: 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
