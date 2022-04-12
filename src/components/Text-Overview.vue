<template>
  <div class="section-container text-overview_container">
    <Section-title :title="title"></Section-title>
    <p class="section-text text-overview_text">{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';

export default {
  components: { SectionTitle },
  // @ is an alias to /src
  props: {
    title: {
      type: String,
      default: 'Lorem Impsum',
    },
    text: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.text-overview_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  .text-overview_title {
    margin: 0 auto 15px auto;
    outline: 0;
    position: relative;
    display: inline-block;
    &:after {
      content: '';
      position: absolute;
      height: 2px;
      background-color: $mb-blue;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
