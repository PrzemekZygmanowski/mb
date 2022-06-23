<template>
  <div class="about">
    <Header
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    ></Header>
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    ></TextOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import TextOverview from '@/components/Text-Overview.vue';

import homeProps from '@/assets/data/home/home.json';

export default {
  name: 'Home',
  components: {
    Header,
    TextOverview,
  },
  methods: {
    log() {
      console.log(JSON.stringify(JSON.parse(homeProps)));
    },
  },
  mounted() {
    this.log();
  },
  data() {
    return {
      mainHeaderProps: {
        title: '"Executio iuris non habet iniuriam"',
        subtitle: 'Egzekwowanie prawa nie jest bezprawiem.',
        image: 'data/img/pictures/MB_team_header.jpg',
      },
      textOverviewProps: {
        title: 'Lorem Impsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
    };
  },
};
</script>
