<template>
  <div class="section-container big-icons-container">
    <div
      :key="icon.id"
      v-for="icon in icons"
      class="big-icons-overview_wrapper"
    >
      <BigIcon :icon="icon"></BigIcon>
    </div>
  </div>
</template>

<script>
import BigIcon from '@/commons/BigIcon.vue';

export default {
  components: { BigIcon },
  props: {
    icons: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            title: 'Profesjonalizm',
            icon: 'fa-solid fa-certificate',
          },
          {
            id: 2,
            title: 'Empatia',
            icon: 'fa-solid fa-dove',
          },
          {
            id: 3,
            title: 'Doświadczenie',
            icon: 'fa-solid fa-shield',
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
.big-icons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
