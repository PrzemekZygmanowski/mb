<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="500"
    transition="scale-transition"
  >
    <div class="big-icon__first-wrapper">
      <div class="big-icon__second-wrapper">
        <font-awesome-icon class="big-icon icon-title" :icon="icon" />
        <img :src="icon" class="big-icon logo icon-title" />
      </div>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      iconColor: '#000080',
    };
  },
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';

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
      &.logo {
        filter: invert(100%) sepia(1%) saturate(3425%) hue-rotate(50deg)
          brightness(107%) contrast(105%);
      }
    }
  }
}
</style>
