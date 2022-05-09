<template>
  <swiper
    :options="swiperOption"
    class="swiper section-container icons-overview_container"
  >
    <swiper-slide
      :key="icon.id"
      v-for="icon in icons"
      class="icons-overview_wrapper"
    >
      <Icon :icon="icon"></Icon>
    </swiper-slide>
  </swiper>
</template>

<script>
import Icon from '@/commons/Icon.vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';
export default {
  components: { Icon, Swiper, SwiperSlide },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
      },
    };
  },
  props: {
    icons: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            title: 'Prawo karne',
            imageUrl: 'data/img/logo/icons8-law-64.png',
            imageTitle: 'Prawo Karne',
          },
          {
            id: 2,
            title: 'Prawo cywilne',
            imageUrl: 'data/img/logo/icons8-justice-64.png',
            imageTitle: 'Prawo cywilne',
          },
          {
            id: 3,
            title: 'Prawo pracy',
            imageUrl: 'data/img/logo/icons8-workers-64.png',
            imageTitle: 'Prawo pracy',
          },
          {
            id: 4,
            title: 'Prawo rodzinne',
            imageUrl: 'data/img/logo/icons8-family-50.png',
            imageTitle: 'Prawo pracy',
          },
        ];
      },
    },
  },
  //   methods: {
  //     slideChange(e) {
  //       this.swiperStates = {
  //         activeIndex: e.activeIndex,
  //         isEnd: e.isEnd,
  //         isBeginning: e.isBeginning,
  //       };
  //     },
  //     changeDirection(e, direction) {
  //       switch (direction) {
  //         case 'next': {
  //           this.swiper.slideNext(400);
  //           break;
  //         }
  //         case 'prev': {
  //           this.swiper.slidePrev(400);
  //           break;
  //         }
  //       }
  //     },
  //   },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.icons-overview_container {
  display: flex;
  flex-direction: row;
  clear: both;
  @media (min-width: $desktopBreakpoint) {
  }
  .icons-overview_wrapper {
    // width: 25%;
    // // aspect-ratio: 1;
    @media (min-width: $desktopBreakpoint) {
      //   width: calc($mobileBreakpoint/3);
    }
  }
}
</style>
