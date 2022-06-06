<template>
  <v-app-bar app color="primary" hide-on-scroll class="menu-container">
    <router-link class="menu_link menu-link" :to="home.url">
      <img :src="home.icon" class="main-logo" :alt="home.altText" />
      <span style="margin: 0 0 0 20px" v-if="!isMobile">{{ home.text }}</span>
    </router-link>
    <v-spacer></v-spacer>
    <div class="menu-wrapper">
      <div class="menu_link-wrapper" v-for="link in links" :key="link.id">
        <router-link class="menu_link menu-link" :to="link.url"
          ><span v-if="!isMobile">{{ link.text }}</span
          ><font-awesome-icon v-if="isMobile" :icon="link.icon"
        /></router-link>
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
  background-color: $mb-white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  .v-toolbar__content {
    margin: 0 auto;
    width: $desktopBreakpoint;
  }
  .menu_link {
    color: $mb-white;
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
  }
}
</style>
