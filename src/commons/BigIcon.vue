<template>
  <div class="big-icon-container">
    <font-awesome-icon class="icon-title" :icon="icon.icon" />
    <h3 class="icon-title big-icon__title" v-html="icon.title"></h3>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.big-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: $mb-black;
  margin: 0 40px;

  .big-icon__title {
    font-size: 32px;
    font-weight: 400;
    @media (min-width: $desktopBreakpoint) {
      font-size: 40px;
    }
  }
}
</style>
