<template>
  <div
    class="menu-container"
    :class="[isMenuTransparent ? 'menu_transparent' : 'menu_color']"
  >
    <router-link class="menu_link menu-link" to="/">Strona główna</router-link>
    <router-link class="menu_link menu-link" to="/owner">O Mnie</router-link>
    <router-link class="menu_link menu-link" to="/firm">Kancelaria</router-link>
    <router-link class="menu_link menu-link" to="/contact">Kontakt</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      drawer: false,
      group: null,
      distanceScrolled: 0,

      headerHeight: 600,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const header = document.getElementById('header');
      this.distanceScrolled =
        document.body.scrollTop + header.getBoundingClientRect().top * -1;
    },
  },
  computed: {
    isMenuTransparent: function () {
      return this.distanceScrolled < this.headerHeight;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
@import 'styles/global/_all.scss';
.menu-container {
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 2 1 1 1;
  z-index: 2;
  transition: ease-in-out 0.1s;
  &.menu_transparent {
    background-color: rgba(0, 0, 0, 0.5);
    .menu_link {
      color: $mb-white;
    }
  }
  &.menu_color {
    background-color: $mb-white;
    .menu_link {
      color: $mb-black;
    }
  }
}
</style>
