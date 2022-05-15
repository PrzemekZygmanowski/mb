<template>
  <div class="big-icon-container">
    <font-awesome-icon class="big-icon icon-title" :icon="icon.icon" />
    <h3 class="icon-title" v-html="icon.title"></h3>
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
  padding: 20px;
  border-radius: 3%;
  height: 150px;
  width: 150px;
  -webkit-box-shadow: 3px 7px 19px -10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 7px 19px -10px rgba(0, 0, 0, 1);
  box-shadow: 3px 7px 19px -10px rgba(0, 0, 0, 1);
  .big-icon {
    font-size: 64px;
    font-weight: 400;
    color: $mb-blue;
    @media (min-width: $desktopBreakpoint) {
      font-size: 72px;
    }
  }
}
</style>
