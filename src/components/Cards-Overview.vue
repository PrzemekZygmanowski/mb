<template>
  <div class="section-container cards-overview_container">
    <div class="cards-overview_wrapper" v-for="card in cards" :key="card.id">
      <Card :card="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/commons/Card.vue';
export default {
  components: { Card },
  props: {
    cards: {
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
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.cards-overview_container {
  width: $mobileWidth;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
  @media (min-width: 639px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 10%;
  }
  @media (min-width: $desktopBreakpoint) {
    width: $mobileBreakpoint;
  }
  .cards-overview_wrapper {
    width: 100%;
    aspect-ratio: 1;
    @media (min-width: 639px) {
      width: calc(640 / 2);
    }
    @media (min-width: $desktopBreakpoint) {
      width: calc($mobileBreakpoint/2 - 30px);
    }
  }
}
</style>
