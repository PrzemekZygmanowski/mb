<template>
  <div class="home">
    <MainHeader></MainHeader>
    <TextOverview></TextOverview>
    <CardsOverview></CardsOverview>
    <AboutOverview></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import CardsOverview from '@/components/Cards-Overview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    TextOverview,
    CardsOverview,
    AboutOverview,
  },
};
</script>
