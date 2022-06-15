<template>
  <div class="home">
    <MainHeader
      :title="homeProps.mainHeaderProps.title"
      :subtitle="homeProps.mainHeaderProps.subtitle"
      :image="homeProps.mainHeaderProps.image"
    ></MainHeader>
    <TextOverview
      :title="homeProps.textOverviewProps.title"
      :text="homeProps.textOverviewProps.text"
    ></TextOverview>
    <BigIconOverview
      :icons="homeProps.bigIconOverviewProps.icons"
    ></BigIconOverview>
    <SpecOverview :cards="homeProps.specOverviewProps.cards"></SpecOverview>
    <AboutOverview :owner="homeProps.aboutOverviewProps.owner"></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import SpecOverview from '@/components/Spec-Overview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';
import BigIconOverview from '@/components/BigIconsOverview.vue';
import homeProps from '@/assets/data/home/home.json';

export default {
  name: 'Home',
  components: {
    MainHeader,
    TextOverview,
    SpecOverview,
    AboutOverview,
    BigIconOverview,
  },

  data() {
    return {
      homeProps: homeProps,
    };
  },
};
</script>
