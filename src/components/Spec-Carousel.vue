<template>
  <div class="section-container">
    <v-carousel v-model="model" hide-delimiters show-arrows-on-hover touch>
      <v-carousel-item v-for="page in pages" :key="page.id">
        <v-sheet height="100%" tile>
          <v-container class="fill-height page__container">
            <div>
              <BigIcon :icon="page.imageUrl"></BigIcon>
            </div>
            <div>
              <h3>{{ page.title }}</h3>
              <h4>{{ page.subtitle }}</h4>
              <p>{{ page.text }}</p>
            </div>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import BigIcon from '@/commons/BigIcon.vue';

export default {
  components: { BigIcon },

  data: () => ({
    model: 0,
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
            imageUrl: 'fa-solid fa-scale-balanced',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 2,
            title: 'Prawo cywilne',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-justice-64.png',
            imageTitle: 'Prawo cywilne',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 3,
            title: 'Prawo pracy',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-workers-64.png',
            imageTitle: 'Prawo pracy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
          },
          {
            id: 4,
            title: 'Prawo rodzinne',
            subtitle: 'Lorem ipsum dolor',
            imageUrl: 'data/img/logo/icons8-family-50.png',
            imageTitle: 'Prawo pracy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!',
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
</style>
