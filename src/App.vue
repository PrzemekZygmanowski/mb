<template>
  <div id="app">
    <Menu v-show="!isMobile"></Menu>
    <MobileMenu v-show="isMobile"></MobileMenu>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import MobileMenu from '@/components/Mobile-Menu.vue';
import breakPointMixin from '@/mixins/breakPointMixin.js';
export default {
  components: { Menu, MobileMenu },
  mixins: [breakPointMixin],
  computed: {
    function() {
      return this.isMobile();
    },
  },
};
</script>

<style lang="scss">
@import 'styles/global/_all.scss';

* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  background-color: $mb-white;
}
</style>
