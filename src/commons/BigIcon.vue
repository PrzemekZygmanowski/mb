<template>
  <div class="big-icon-container">
    <v-avatar :color="iconColor" size="70">
      <font-awesome-icon class="big-icon icon-title" :icon="icon.icon" />
    </v-avatar>
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
  border-radius: 3%;
  height: 150px;
  width: 150px;

  .big-icon {
    height: 30px;
    font-size: 20px;
    font-weight: 400;
    color: $mb-white;
    @media (min-width: $desktopBreakpoint) {
    }
  }
}
</style>
