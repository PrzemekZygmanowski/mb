<template>
  <v-footer :color="footerColor" :height="height" padless class="mt-8">
    <v-col class="text-center footer-text" cols="12">
      <span>&#169;</span> {{ new Date().getFullYear() }} —
      <strong>{{ title }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footerColor: '#192024',
      copy: 'data/img/svg/copyright-solid.svg',
      height: 70,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Michał Buzar',
    },
  },
};
</script>
