<template>
  <div class="big-icon-container">
    <div
      class="big-icon__first-wrapper"
      data-aos="icon-rotate"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    >
      <div class="big-icon__second-wrapper">
        <font-awesome-icon class="big-icon icon-title" :icon="icon.icon" />
      </div>
    </div>
    <h3 class="icon-title" v-html="icon.title"></h3>
    <p class="icon-text">{{ icon.text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconColor: "#000080",
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
@import "styles/global/_all.scss";
.big-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: $mb-black;
  border: 0.5px solid $mb-blue;
  border-radius: 5px;
  width: $mobileWidth;
  min-height: 300px;
  padding: 7%;
  margin-bottom: 20px;
  @media (min-width: $mobileBreakpoint) {
    width: 220px;
    min-height: 400px;
  }
  @media (min-width: $desktopBreakpoint) {
    width: 240px;
  }
  .big-icon__first-wrapper {
    position: relative;
    height: 120px;
    width: 120px;
    border: 2px solid $mb-blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: $mobileBreakpoint) {
      height: 100px;
      width: 100px;
    }
    .big-icon__second-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
      width: 90px;
      background-color: $mb-blue;
      border-radius: 50%;
      @media (min-width: $mobileBreakpoint) {
        height: 80px;
        width: 80px;
      }
      .big-icon {
        height: 30px;
        font-size: 20px;
        font-weight: 400;
        color: $mb-white;
      }
    }
  }
}
</style>
