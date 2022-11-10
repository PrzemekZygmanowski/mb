<template transition="slide-y-transition">
  <div class="section-container text-overview_container">
    <Section-title
      v-show="this.textOverview.title"
      :title="this.textOverview.title"
    ></Section-title>
    <p
      v-show="this.textOverview.text"
      class="section-text text-overview_text"
      v-html="this.textOverview.text"
    ></p>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTitle from "@/commons/Section-Title.vue";

export default {
  components: { SectionTitle },
  // @ is an alias to /src
  props: {
    textOverview: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
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
      content: "";
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
