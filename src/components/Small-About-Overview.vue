<template>
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
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';
import LinkButton from '@/commons/LinkButton.vue';

export default {
  components: { SectionTitle, LinkButton },
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
          imageUrl: 'data/img/pictures/MB_header.jpg',
          imageName: 'Michał_Buzar',
          title: 'Michał Buzar',
          subtitle: 'Radca Prawny',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        };
      },
    },
    btnProps: {
      type: Object,
      default() {
        return {
          link: '/owner',
          color: '#69b9ff',
          btnWidth: 340,
          outlined: false,
          text: 'Dowiedz się więcej',
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
