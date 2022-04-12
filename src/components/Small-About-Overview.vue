<template>
  <div class="section-container">
    <div class="small-about_title-container">
      <Section-title :title="title"></Section-title>
    </div>
    <div class="small-about_container">
      <div class="small-about_img-wrapper">
        <img
          class="small-about_img"
          :src="owner.imageUrl"
          :alt="owner.imageName"
        />
      </div>
      <div class="small-about_overview">
        <h3 class="section-small-title" v-html="owner.title"></h3>
        <h4 class="section-small-subtitle" v-html="owner.subtitle"></h4>
        <p class="section-text" v-html="owner.about"></p>
        <a
          class="section-text link-reset small-about_link"
          :href="owner.linkUrl"
          v-html="owner.linkText"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';

export default {
  components: { SectionTitle },
  // @ is an alias to /src
  props: {
    title: {
      type: String,
      default: 'Kim Jestem',
    },
    owner: {
      type: Object,
      default() {
        return {
          imageUrl: 'data/img/pictures/robocze.jpg',
          imageName: 'Michał_Buzar',
          title: 'Michał Buzar',
          subtitle: 'Radca Prawny',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          linkUrl: '/',
          linkText: 'Dowiedz się więcej',
        };
      },
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
  max-height: 400px;
  display: flex;
  flex-direction: column;
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row;
  }
  .small-about_img-wrapper {
    @media (min-width: $mobileBreakpoint) {
      max-width: 50%;
      max-height: 100%;
    }
    .small-about_img {
      max-width: $mobileWidth;
      overflow: hidden;
      object-fit: cover;
      @media (min-width: $mobileBreakpoint) {
        width: 100%;
        max-width: auto;
        max-height: 100%;
      }
    }
  }
  .small-about_overview {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: $mobileBreakpoint) {
      max-width: 50%;
      padding: 0 30px;
    }
    .small-about_link {
      color: $mb-black;
    }
  }
}
</style>
