<template>
  <div
    class="menu-container"
    :class="[isMenuTransparent ? 'menu_transparent' : 'menu_color']"
  >
    <div class="menu-wrapper">
      <router-link class="menu_link menu-link" :to="home.url">
        <img :src="home.icon" class="main-logo" :alt="home.altText" />
      </router-link>
      <div class="menu_link-wrapper" v-for="link in links" :key="link.id">
        <router-link class="menu_link menu-link" :to="link.url"
          ><span v-if="!isMobile">{{ link.text }}</span
          ><font-awesome-icon v-if="isMobile" :icon="link.icon"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  mixins: [breakPointMixin],
  props: {
    home: {
      type: Object,
      default() {
        return {
          altText: 'MB LOGO',
          icon: 'data/img/logo/MBblack.png',
          url: '/',
        };
      },
    },
    links: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            text: 'O mnie',
            icon: 'fa-solid fa-user-tie',
            url: '/owner',
          },
          {
            id: 2,
            text: 'Kancelaria',
            icon: 'fa-solid fa-building-columns',
            url: '/firm',
          },
          {
            id: 3,
            text: 'Kontakt',
            icon: 'fa-solid fa-phone-flip',
            url: '/contact',
          },
        ];
      },
    },
  },
  computed: {
    function() {
      return this.isMobile();
    },
  },
};
</script>

<style lang="scss">
@import 'styles/global/_all.scss';
.menu-container {
  width: 100vw;
  background-color: $mb-white;
  position: fixed;
  top: calc(100% - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  @media (min-width: $desktopBreakpoint) {
    margin: 0 auto;
    top: 0;
  }
  .menu-wrapper {
    width: $mobileWidth;
    margin: 0 $mobileMargin;
    margin: 0 auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
    @media (min-width: $desktopBreakpoint) {
      width: $desktopBreakpoint;
    }
    .menu_link {
      color: $mb-black;
      .main-logo {
        height: 24px;
      }
    }
  }
}
</style>
