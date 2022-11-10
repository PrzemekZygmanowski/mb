<template>
  <v-container class="section-container pa-0 d-flex flex-column align-center">
    <v-container
      class="pa-0 ma-0 mb-8 about_container"
      :class="`about_container-${content.orientation}`"
    >
      <div class="about_img-wrapper">
        <img
          :src="backendUrl + content.imageUrl.data.attributes.url"
          :alt="content.imageName"
          v-show="content.text"
          class="about_img"
        />
      </div>
      <div class="about_overview">
        <p class="section-text" v-show="content.text" v-html="content.text"></p>
      </div>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import vuetify from "@/plugins/vuetify";

export default {
  vuetify,
  data() {
    return {
      backendUrl: process.env.VUE_APP_BACKEND_URL,
    };
  },
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.about_title-container {
  width: 100%;
  text-align: center;
}
.about_container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: $mobileBreakpoint) {
    min-height: 30vh;
    flex-direction: row;
    margin-bottom: 60px;
  }

  .about_img-wrapper {
    width: 100%;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
    }
    .about_img {
      overflow: hidden;
      object-fit: cover;
      width: 100%;
      max-height: 400px;

      @media (min-width: $mobileBreakpoint) {
      }
    }
  }
  .about_overview {
    padding: 5px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
      padding: 0 5px;
    }
    .price-text {
      font-weight: bold;
      color: $mb-blue;
    }
    .about_link {
      color: $mb-black;
    }
  }
}
.about_container-right {
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row-reverse;
  }
}
.about_container-left {
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row;
  }
}
</style>
