<template>
  <a href="/" class="card-component">
    <div class="card-container">
      <img :src="card.imageUrl" :alt="card.imageTitle" class="card-logo" />
      <div class="card-wrapper">
        <h3 class="card-title card__title" v-html="card.title"></h3>
        <a href="/" class="card-link card-text">dowiedz się więcej</a>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.card-component {
  cursor: inherit;
  text-decoration: none;

  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    aspect-ratio: 1;
    background-color: $mb-blue;
    color: $mb-white;
    box-shadow: 3px 3px 13px 1px $mb-blue;
    -webkit-box-shadow: 3px 3px 13px 1px $mb-blue;
    -moz-box-shadow: 3px 3px 13px 1px $mb-blue;
    .card-logo {
      aspect-ratio: 1;
      transform: scale(1.35);
      filter: invert(100%) sepia(1%) saturate(3425%) hue-rotate(50deg)
        brightness(107%) contrast(105%);
    }
    .card-wrapper {
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .card__title {
        outline: 0;
        position: relative;
        display: inline-block;
        &:after {
          content: "";
          position: absolute;
          height: 2px;
          background-color: $mb-white;
          width: 100%;
          left: 0;
          bottom: 0;
        }
      }
      .card-link {
        cursor: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
