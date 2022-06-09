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
      default: 'data/img/pictures/header.jpg',
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.main-header {
  height: 80vh;
  max-height: 100vh;
  width: 100%;
  @media (min-width: $desktopBreakpoint) {
    max-height: 640px;
  }
  .main-header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto;
    height: 100%;
    width: 100%;

    .main-header__picture {
      width: 100vw;
      height: 100%;
      transition: 0.5s ease;
      backface-visibility: hidden;
      object-fit: cover;

      @media (min-width: $desktopBreakpoint) {
        position: relative;
        display: block;
        width: 100%;
        max-height: 640px;
        object-fit: cover;
      }
    }
    .main-header__text-container {
      width: 100%;
      margin: 0 auto;
      position: absolute;
      transform: translateY(-25%);
      color: $mb-white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      @media (min-width: $desktopBreakpoint) {
        // width: 50%;
        // margin: 0 10% 0 auto;
      }
      .main-header__title {
        width: 90%;
        margin: 0 auto;
      }
      .main-header__subtitle {
      }
    }
  }
}
</style>
