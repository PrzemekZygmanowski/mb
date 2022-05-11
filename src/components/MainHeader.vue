<template>
  <header id="main-header">
    <div class="main-header">
      <div class="main-header__container">
        <img :src="image" class="main-header__picture" alt="Buzar" />
        <div class="main-header__text-container">
          <h1 class="main-header__title main-title">{{ title }}</h1>
          <h2 class="main-header__subtitle main-subtitle">{{ subtitle }}</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Michał Buzar',
    },
    subtitle: {
      type: String,
      default: 'Radca prawny',
    },
    image: {
      type: String,
      default: 'data/img/pictures/MB_header.jpg',
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.main-header {
  height: 100vh;
  width: $mobileWidth;
  margin: 0 $mobileMargin;
  @media (min-width: $desktopBreakpoint) {
    height: 640px;
  }
  .main-header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto;
    height: 100%;
    width: 100%;

    @media (min-width: $desktopBreakpoint) {
      width: $desktopBreakpoint;
    }
    .main-header__picture {
      width: 100%;

      @media (min-width: $desktopBreakpoint) {
        position: relative;
        display: block;
        width: 100%;
        transform: rotateY(180deg);
      }
    }
    .main-header__text-container {
      //   width: $mobileWidth;
      //   margin: $mobileMargin;
      position: absolute;
      right: 20%;
      color: $mb-white;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      @media (min-width: $desktopBreakpoint) {
        // width: 50%;
        right: 25%;

        margin: 0;
      }
    }
  }
}
</style>
