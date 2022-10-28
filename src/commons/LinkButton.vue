<template>
  <v-btn
    :color="btnProps.color"
    :to="btnProps.link"
    :width="btnProps.btnWidth"
    :outlined="btnProps.outlined"
    class="btn-link btn_link"
    depressed
    elevation="3"
    >{{ btnProps.text }}</v-btn
  >
</template>

<script>
export default {
  data() {
    return {
      btnWidth: 340,
    };
  },
  props: {
    btnProps: {
      type: Object,
      default() {
        return {
          link: "/",
          color: "#fafffa",
          btnWidth: 340,
          outlined: false,
          text: "",
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
</style>
