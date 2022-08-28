<template>
  <v-footer
    :color="footerColor"
    :height="height"
    padless
    class="mt-8 d-flex flex-column justify-space-between"
    v-resize="onResize"
  >
    <div v-show="contactPage()" class="footer__contact-container ma-0 pa-0">
      <v-container
        class="footer__contact-wrapper pa-0 d-flex flex-column justify-space-around align-center"
      >
        <h3 class="section-small-subtitle">{{ contact.title }}</h3>
        <strong class="section-text">{{ contact.subtitle }}</strong>
        <div v-show="!isMobile" class="footer-contact__links">
          <a
            :href="`mailto:${contact.email}`"
            class="section-small-subtitle link-reset footer__link"
            >{{ contact.emailText }}</a
          >
          <a
            :href="`tel:${contact.phone}`"
            class="section-small-subtitle link-reset footer__link"
            >{{ contact.phoneText }}</a
          >
          <router-link
            class="section-small-subtitle link-reset footer__link"
            :to="contact.address"
            exact
            >{{ contact.addressText }}</router-link
          >
        </div>
        <div v-show="isMobile" class="footer-contact__links">
          <v-btn
            :color="btnColor"
            :href="`mailto:${contact.email}`"
            class="mx-5"
            elevation="2"
            fab
            small
            ><font-awesome-icon icon="fa-solid fa-envelope" />
          </v-btn>
          <v-btn
            :color="btnColor"
            :href="`tel:${contact.phone}`"
            class="mx-5"
            elevation="2"
            fab
            small
            ><font-awesome-icon icon="fa-solid fa-phone-flip" />
          </v-btn>
          <v-btn
            :color="btnColor"
            :href="contact.address"
            class="mx-5"
            elevation="2"
            fab
            small
            ><font-awesome-icon icon="fa-solid fa-house" />
          </v-btn>
        </div>
      </v-container>
    </div>
    <v-col
      class="text-center footer-text footer__copy pa-0 d-flex align-center justify-center"
      cols="12"
    >
      <span>&#169;</span> {{ new Date().getFullYear() }} —
      <strong>{{ title }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  mixins: [breakPointMixin],

  data() {
    return {
      footerColor: '#192024',
      copy: 'data/img/svg/copyright-solid.svg',
      height: 250,
      btnColor: '#69b9ff',
    };
  },
  props: {
    title: {
      type: String,
      default: 'Michał Buzar',
    },
    contact: {
      type: Object,
      default() {
        return {
          title: 'Potrzebujesz pomocy?',
          subtitle: 'Skontaktuj się z nami?',
          email: 'xcd@cxcv.pl',
          emailText: 'Napisz',
          phone: '123-456-789',
          phoneText: 'Zadzwóń',
          address: '/contact',
          addressText: 'Odwiedź nas',
        };
      },
    },
  },
  computed: {
    function() {
      return this.isMobile();
    },
  },
  methods: {
    contactPage() {
      if (this.$route.path == '/contact') {
        this.height = 50;
        return false;
      }
      this.height = 250;
      return true;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.footer__contact-container {
  width: 100vw;
  height: 80%;
  background-color: lightgray;
  .container {
    height: 100% !important;
  }
  .footer-contact-wrapper {
    margin: 0 auto;
    width: $mobileWidth;
    color: $mb-white;
    @media (min-width: $desktopBreakpoint) {
      width: $mobileBreakpoint;
    }
  }
  .footer-contact__links {
    display: flex;
    justify-content: space-between !important;
    color: $mb-black;
    @media (min-width: $desktopBreakpoint) {
      width: $mobileBreakpoint;
    }
    .footer__link {
      color: $mb-black;
      width: 25%;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: $mb-blue;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
}
.footer__copy {
  width: 100%;
  max-height: 50px;
}
</style>
