<template>
  <v-app-bar class="menu-container ma-0 pa-0">
    <router-link class="menu_link menu-link" :to="home.url" exact>
      <img :src="home.icon" class="main-logo" :alt="home.altText" />
      {{ home.text }}
    </router-link>
    <v-spacer></v-spacer>
    <div class="menu-wrapper">
      <div class="menu_link-wrapper" v-for="link in links" :key="link.id">
        <router-link class="menu_link menu-link" :to="link.url" exact>{{
          link.text
        }}</router-link>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import breakPointMixin from '@/mixins/breakPointMixin.js';
import vuetify from '../plugins/vuetify';

export default {
  vuetify,
  mixins: [breakPointMixin],
  props: {
    home: {
      type: Object,
      default() {
        return {
          altText: 'MB LOGO',
          icon: 'data/img/logo/MBblack.png',
          url: '/',
          text: 'Start',
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
  background-color: $mb-white !important;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  z-index: 1000000;
  .v-toolbar__content {
    margin: 0 auto;
    width: $desktopBreakpoint;
  }
  .menu_link {
    color: $mb-black;
    .main-logo {
      height: 24px;
    }
  }
  .menu-wrapper {
    width: 600px;
    margin: 0 auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
    .menu_link-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .menu_link {
    display: inline-block;
    padding: 0 auto 25px auto;
    color: $mb-black;
    font-weight: 500;
    position: relative;
    &:after {
      transform: scaleX(0);
      content: '';
      position: absolute;
      height: 2px;
      background-color: $mb-blue;
      width: 100%;
      left: 0;
      bottom: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
  }
  .router-link-active {
    transition: 0.25s ease-out;
    color: $mb-blue;
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
