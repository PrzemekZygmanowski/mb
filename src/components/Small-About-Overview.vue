<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="500"
    transition="scroll-y-reverse-transition"
  >
    <div class="section-container">
      <div class="small-about_container">
        <div class="small-about_img-wrapper">
          <img
            class="small-about_img"
            :src="owner.imageUrl"
            :alt="owner.imageName"
          />
        </div>
        <div class="small-about_overview">
          <Section-title :title="owner.title"></Section-title>
          <h4 class="section-small-subtitle" v-html="owner.subtitle"></h4>
          <p class="section-text" v-html="owner.about"></p>
          <LinkButton :btnProps="btnProps"></LinkButton>
        </div>
      </div>
    </div>
  </v-lazy>
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';
import LinkButton from '@/commons/LinkButton.vue';

export default {
  components: { SectionTitle, LinkButton },
  data() {
    return {
      isActive: false,

      btnProps: {
        link: '/owner',
        color: '#69b9ff',
        btnWidth: 340,
        outlined: false,
        text: 'Dowiedz się więcej',
      },
    };
  },
  // @ is an alias to /src
  props: {
    owner: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.small-about_title-container {
  width: 100%;
  text-align: center;
}
.small-about_container {
  display: flex;
  flex-direction: column;
  .small-about_img-wrapper {
    width: $mobileWidth;
    @media (min-width: $mobileBreakpoint) {
      width: $mobileBreakpoint;
    }
    .small-about_img {
      overflow: hidden;
      object-fit: cover;
      width: $mobileWidth;
      @media (min-width: $mobileBreakpoint) {
        width: $mobileBreakpoint;
      }
    }
  }
  .small-about_overview {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .small-about_link {
      color: $mb-black;
    }
  }
}
</style>
