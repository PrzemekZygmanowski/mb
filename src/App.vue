<template>
  <v-app>
    <v-main>
      <Menu></Menu>
      <!-- <MobileMenu v-show="isMobile"></MobileMenu> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  components: { Menu },
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
