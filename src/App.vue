<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <Menu v-show="!isMobile"></Menu>
      <MobileMenu v-show="isMobile"></MobileMenu>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';
import MobileMenu from '@/components/Mobile-Menu.vue';
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  components: { Menu, MobileMenu },
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
