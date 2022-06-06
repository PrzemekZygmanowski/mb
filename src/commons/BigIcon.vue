<template>
  <div class="big-icon-container">
    <div class="big-icon__first-wrapper">
      <div class="big-icon__second-wrapper">
        <font-awesome-icon class="big-icon icon-title" :icon="icon.icon" />
      </div>
    </div>
    <!-- <v-avatar :color="iconColor" size="70">
      <font-awesome-icon class="big-icon icon-title" :icon="icon.icon" />
    </v-avatar> -->
    <h3 class="icon-title" v-html="icon.title"></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconColor: '#000080',
    };
  },
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

  .big-icon__first-wrapper {
    position: relative;
    height: 120px;
    width: 120px;
    border: 2px solid $mb-blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .big-icon__second-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 90px;
      width: 90px;
      background-color: $mb-blue;
      border-radius: 50%;
      .big-icon {
        height: 30px;
        font-size: 20px;
        font-weight: 400;
        color: $mb-white;
        @media (min-width: $desktopBreakpoint) {
        }
      }
    }
  }
}
</style>
