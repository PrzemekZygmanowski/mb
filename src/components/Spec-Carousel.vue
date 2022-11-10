<template>
  <div class="section-container">
    <v-card v-for="page in pages" :key="page.id" class="mb-6 page__container">
      <div class="mx-auto my-5">
        <BigIcon
          :icon="backendUrl + page.imageUrl.data.attributes.url"
          class="logo"
        ></BigIcon>
      </div>
      <div>
        <h3 class="icon-title card-title my-4">{{ page.title }}</h3>
        <p class="icon-text my-2">{{ page.text }}</p>
      </div>
      <v-card-actions v-if="page.expandText">
        <v-spacer></v-spacer>
        <v-btn icon fab color="#69b9ff" @click="expandCard(page.id)">
          <v-icon large>{{
            page.id === selectedIndex ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="page.id === selectedIndex">
          <v-divider></v-divider>
          <v-card-text class="icon-text" v-html="page.expandText">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import BigIcon from "@/commons/BigIcon.vue";

export default {
  components: { BigIcon },

  data: () => ({
    model: 0,
    selectedIndex: null,
    backendUrl: process.env.VUE_APP_BACKEND_URL,
    show: false,
  }),
  props: {
    pages: {
      type: Array,
    },
  },
  methods: {
    expandCard(i) {
      if (!this.selectedIndex || this.selectedIndex !== i)
        this.selectedIndex = i;
      else this.selectedIndex = null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.page__container {
  display: flex;
  flex-direction: column;
}
.card-title {
  text-align: center;
}
</style>
