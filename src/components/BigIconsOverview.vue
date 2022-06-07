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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            id: 2,
            title: 'Empatia',
            icon: 'fa-solid fa-dove',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            id: 3,
            title: 'Doświadczenie',
            icon: 'fa-solid fa-shield',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
        ];
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.big-icons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row;
  }
}
</style>
