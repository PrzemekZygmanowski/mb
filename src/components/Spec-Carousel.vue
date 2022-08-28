<template>
  <div class="section-container">
    <v-card v-for="page in pages" :key="page.id" class="mb-6 page__container">
      <div class="mx-auto my-5">
        <BigIcon :icon="page.imageUrl" class="logo"></BigIcon>
      </div>
      <div>
        <h3 class="icon-title card-title my-4">{{ page.title }}</h3>
        <h4 class="icon-text my-2">{{ page.subtitle }}</h4>
        <p class="icon-text my-2">{{ page.text }}</p>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text class="icon-text" v-html="page.expandText">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import BigIcon from '@/commons/BigIcon.vue';

export default {
  components: { BigIcon },

  data: () => ({
    model: 0,
    show: false,
  }),
  props: {
    pages: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            title: 'Prawo karne',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/svg/scale-balance.svg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
            expandText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 2,
            title: 'Prawo cywilne',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-justice-64.png',
            imageTitle: 'Prawo cywilne',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
            expandText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 3,
            title: 'Prawo pracy',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-workers-64.png',
            imageTitle: 'Prawo pracy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
            expandText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 4,
            title: 'Prawo rodzinne',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-family-50.png',
            imageTitle: 'Prawo pracy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
            expandText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
        ];
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.page__container {
  display: flex;
  flex-direction: column;
}
.card-title {
  text-align: center;
}
</style>
