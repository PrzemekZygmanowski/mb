<template>
  <div id="app">
    <Menu></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
export default {
  components: { Menu },
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
