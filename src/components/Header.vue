<template>
  <header id="header">
    <div class="header">
      <div class="header__container">
        <img :src="image" class="header__picture" alt="kancelaria" />
        <div class="header__text-container">
          <h2 class="header__title header-title">{{ title }}</h2>
          <h3 class="header__subtitle header-subtitle">{{ subtitle }}</h3>
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
    },
    subtitle: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.header {
  height: 80vh;
  max-height: 100vh;
  width: 100%;
  @media (min-width: $desktopBreakpoint) {
    max-height: 640px;
  }
  .header__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0 auto;
    height: 100%;
    width: 100%;

    .header__picture {
      width: 100vw;
      height: 100%;
      transition: 0.5s ease;
      backface-visibility: hidden;
      object-fit: cover;
      animation: picture 2s ease-in-out;
      animation-fill-mode: forwards;
      @media (min-width: $desktopBreakpoint) {
        position: relative;
        display: block;
        width: 100%;
        max-height: 640px;
        object-fit: cover;
      }
    }
    .header__text-container {
      width: 100%;
      height: 80vh;
      max-height: 100vh;
      margin: 0 auto;
      position: absolute;
      color: $mb-white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.2);
      animation: text-container 1.5s ease-in;

      @media (min-width: $desktopBreakpoint) {
        height: 640px;
      }
      .header__title {
        width: $mobileWidth;
        line-height: 1.2;
        margin-bottom: 20px;
      }
      .header__subtitle {
        text-align: center;
        width: $mobileWidth;
        line-height: 1.2;
        margin-top: 20px;
      }
    }
  }
}
@keyframes text-container {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes picture {
  0% {
    filter: blur(0);
  }
  50% {
    filter: blur(0);
  }
  100% {
    filter: blur(2px);
  }
}
</style>
