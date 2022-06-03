<template>
  <div>
    <div class="burger">
      <div></div>
    </div>
    <!-- <div
      class="menu-container"
      :class="[isMenuTransparent ? 'menu_transparent' : 'menu_color']"
    >
      <router-link class="menu_link menu-link" to="/"
        >Strona główna</router-link
      >
      <router-link class="menu_link menu-link" to="/owner">O Mnie</router-link>
      <router-link class="menu_link menu-link" to="/firm"
        >Kancelaria</router-link
      >
      <router-link class="menu_link menu-link" to="/contact"
        >Kontakt</router-link
      >
    </div> -->
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
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const header = document.getElementById("header");
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
@import "styles/global/_all.scss";
.burger {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 50px;
}

.burger:before,
.burger:after,
.burger div {
  background: #fff;
  content: "";
  display: block;
  height: 6px;
  border-radius: 3px;
  margin: 7px 0;
  transition: 0.5s;
}
.burger:hover:before {
  transform: translateY(12px) rotate(135deg);
}
.burger:hover:after {
  transform: translateY(-12px) rotate(-135deg);
}
.burger:hover div {
  transform: scale(0);
}
</style>
