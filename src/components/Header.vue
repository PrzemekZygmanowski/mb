<template>
  <header id="header">
    <div class="header">
      <div class="title-container">
        <img src="data/img/logo/MBblack.png" class="main-logo" alt="MB LOGO" />
        <div class="">
          <h1 class="main-title title">{{ title }}</h1>
          <h2 class="main-subtitle subtitle">{{ subtitle }}</h2>
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
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.header {
  height: 100vh;
  width: 100%;
  background-image: url(https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover;
  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    .main-logo {
      transform: scale(0.5);
      filter: invert(100%) sepia(19%) saturate(376%) hue-rotate(126deg)
        brightness(101%) contrast(101%);
    }
    &::before {
      filter: invert(91%) sepia(90%) saturate(100%) hue-rotate(51deg)
        brightness(0%) contrast(106%);
    }
    .title,
    .subtitle {
      text-align: center;
    }
  }
}
</style>
