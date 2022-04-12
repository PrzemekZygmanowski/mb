<template>
  <div class="home">
    <Header></Header>
    <TextOverview></TextOverview>
    <CardsOverview></CardsOverview>
    <AboutOverview></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import TextOverview from '@/components/Text-Overview.vue';
import CardsOverview from '@/components/Cards-Overview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';

export default {
  name: 'Home',
  components: {
    Header,
    TextOverview,
    CardsOverview,
    AboutOverview,
  },
};
</script>
