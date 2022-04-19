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
      default: 'data/img/pictures/robo_lawyer.png',
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
      display: none;
      @media (min-width: $desktopBreakpoint) {
        display: block;
        width: 50%;
        aspect-ratio: 1;
      }
    }
    .main-header__text-container {
      //   width: $mobileWidth;
      //   margin: $mobileMargin;
      color: $mb-blue;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      @media (min-width: $desktopBreakpoint) {
        width: 50%;
        margin: 0;
      }
    }
  }
}
</style>
